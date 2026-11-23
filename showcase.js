(function () {
  "use strict";

  var showcase = document.querySelector(".showcase");
  if (!showcase) return;

  var scenes = Array.prototype.slice.call(showcase.querySelectorAll("[data-showcase-scene]"));
  var track = showcase.querySelector(".showcase-track");
  var tabs = Array.prototype.slice.call(showcase.querySelectorAll('[role="tab"]'));
  var count = document.getElementById("showcase-count");
  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var rotationDuration = 3500;
  var interactionDelay = 9500;
  var activeIndex = 0;
  var trackPosition = 1;
  var trackSize = 0;
  var timerId = 0;
  var deadline = 0;
  var remaining = rotationDuration;
  var pointerInside = false;
  var focusInside = false;

  function isInteracting() {
    return pointerInside || focusInside;
  }

  function clearTimer() {
    if (timerId) {
      window.clearTimeout(timerId);
      timerId = 0;
    }
  }

  function schedule(delay) {
    clearTimer();
    remaining = delay;
    if (document.hidden || motionQuery.matches || isInteracting()) {
      showcase.dataset.rotating = "false";
      return;
    }

    deadline = Date.now() + delay;
    showcase.dataset.rotating = "true";
    timerId = window.setTimeout(function () {
      activate((activeIndex + 1) % scenes.length, false);
    }, delay);
  }

  function setTrackPosition(position, immediate) {
    if (!track || !trackSize) return;

    trackPosition = position;
    if (immediate) track.style.transition = "none";
    track.style.transform = "translate3d(-" + (position * 100 / trackSize) + "%, 0, 0)";

    if (immediate) {
      track.offsetHeight;
      track.style.transition = "";
    }
  }

  function cloneScene(scene) {
    var clone = scene.cloneNode(true);
    clone.classList.add("showcase-scene--clone");
    clone.removeAttribute("id");
    clone.removeAttribute("role");
    clone.removeAttribute("aria-labelledby");
    clone.removeAttribute("data-showcase-scene");
    clone.removeAttribute("data-active");
    clone.setAttribute("aria-hidden", "true");
    return clone;
  }

  function initializeTrack() {
    if (!track || !scenes.length) return;

    var firstClone = cloneScene(scenes[0]);
    var lastClone = cloneScene(scenes[scenes.length - 1]);
    track.insertBefore(lastClone, scenes[0]);
    track.appendChild(firstClone);

    trackSize = scenes.length + 2;
    track.style.width = trackSize * 100 + "%";
    Array.prototype.forEach.call(track.children, function (scene) {
      var panelWidth = 100 / trackSize + "%";
      scene.style.flex = "0 0 " + panelWidth;
      scene.style.width = panelWidth;
    });

    setTrackPosition(1, true);
    track.addEventListener("transitionend", function (event) {
      if (event.target !== track || event.propertyName !== "transform") return;
      scenes.forEach(function (scene) {
        scene.removeAttribute("data-exiting");
      });
      if (trackPosition === 0) {
        setTrackPosition(scenes.length, true);
      } else if (trackPosition === scenes.length + 1) {
        setTrackPosition(1, true);
      }
    });
  }

  function activate(index, manual) {
    var previousIndex = activeIndex;
    activeIndex = (index + scenes.length) % scenes.length;

    scenes.forEach(function (scene) {
      scene.removeAttribute("data-exiting");
    });
    if (previousIndex !== activeIndex && !motionQuery.matches) {
      scenes[previousIndex].dataset.exiting = "true";
    }

    scenes.forEach(function (scene, sceneIndex) {
      var isActive = sceneIndex === activeIndex;
      scene.dataset.active = String(isActive);
      scene.setAttribute("aria-hidden", String(!isActive));
    });

    tabs.forEach(function (tab, tabIndex) {
      var isActive = tabIndex === activeIndex;
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    if (count) count.textContent = "0" + (activeIndex + 1) + " / 0" + scenes.length;
    if (track) {
      var position = activeIndex + 1;
      if (!motionQuery.matches && previousIndex === scenes.length - 1 && activeIndex === 0) {
        position = scenes.length + 1;
      } else if (!motionQuery.matches && previousIndex === 0 && activeIndex === scenes.length - 1) {
        position = 0;
      }
      setTrackPosition(position, motionQuery.matches || previousIndex === activeIndex);
    }
    schedule(manual ? interactionDelay : rotationDuration);
  }

  function pauseRotation() {
    if (timerId) {
      remaining = Math.max(0, deadline - Date.now());
      clearTimer();
    }
    showcase.dataset.rotating = "false";
  }

  function pauseMotion() {
    pauseRotation();
    showcase.dataset.paused = "true";
  }

  function resume(delay) {
    if (document.hidden || motionQuery.matches) return;
    delete showcase.dataset.paused;
    if (isInteracting()) {
      showcase.dataset.rotating = "false";
      return;
    }
    schedule(typeof delay === "number" ? delay : remaining || rotationDuration);
  }

  showcase.addEventListener("pointerenter", function () {
    pointerInside = true;
    pauseRotation();
  });

  showcase.addEventListener("pointerleave", function () {
    pointerInside = false;
    resume(interactionDelay);
  });

  showcase.addEventListener("focusin", function () {
    focusInside = true;
    pauseRotation();
  });

  showcase.addEventListener("focusout", function (event) {
    if (!showcase.contains(event.relatedTarget)) {
      focusInside = false;
      resume(interactionDelay);
    }
  });

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      activate(index, true);
    });

    tab.addEventListener("keydown", function (event) {
      var nextIndex = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (index + tabs.length - 1) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      tabs[nextIndex].focus();
      activate(nextIndex, true);
    });
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      pauseMotion();
    } else {
      resume();
    }
  });

  function updateMotionPreference() {
    if (motionQuery.matches) {
      pauseMotion();
      activate(0, false);
      pauseRotation();
    } else {
      delete showcase.dataset.paused;
      resume(rotationDuration);
    }
  }

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", updateMotionPreference);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(updateMotionPreference);
  }

  initializeTrack();
  showcase.dataset.rotating = String(!motionQuery.matches);
  if (motionQuery.matches) {
    showcase.dataset.paused = "true";
    activate(0, false);
    pauseRotation();
  } else {
    activate(0, false);
  }
})();

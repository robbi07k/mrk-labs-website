(function () {
  "use strict";

  var hero = document.querySelector(".hero");
  var canvas = document.querySelector(".particle-wave");
  if (!hero || !canvas) return;

  var context = canvas.getContext("2d", { alpha: true });
  if (!context) {
    canvas.hidden = true;
    return;
  }

  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mobileQuery = window.matchMedia("(max-width: 620px)");
  var width = 1;
  var height = 1;
  var heroHeight = 1;
  var pixelRatio = 1;
  var columns = 0;
  var rows = 0;
  var count = 0;
  var pointU = new Float32Array(0);
  var pointV = new Float32Array(0);
  var pointSeed = new Float32Array(0);
  var frameId = 0;
  var previousTime = 0;
  var elapsedTime = 0;
  var isVisible = true;
  var fadeExtension = 220;
  var particleColor = "#2163C5";

  function resize() {
    width = Math.max(1, document.documentElement.clientWidth);
    heroHeight = Math.max(1, hero.getBoundingClientRect().height);
    height = heroHeight + fadeExtension;
    hero.style.setProperty("--hero-wave-width", width + "px");
    hero.style.setProperty("--hero-wave-height", height + "px");

    var isMobile = mobileQuery.matches;
    pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.6);
    canvas.width = Math.max(1, Math.round(width * pixelRatio));
    canvas.height = Math.max(1, Math.round(height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    columns = isMobile
      ? Math.max(28, Math.round(width / 11))
      : Math.min(96, Math.round(width / 14));
    var baseRows = isMobile
      ? Math.max(24, Math.min(36, Math.round(heroHeight / 30)))
      : (width <= 900 ? 32 : 36);
    var horizonRatio = isMobile ? 0.04 : 0.12;
    var maxDepth = Math.pow(
      (height / heroHeight - horizonRatio) / 1.03,
      1 / 1.65
    );
    rows = Math.ceil((baseRows - 1) * maxDepth) + 1;
    count = columns * rows;
    pointU = new Float32Array(count);
    pointV = new Float32Array(count);
    pointSeed = new Float32Array(count);

    var index = 0;
    for (var row = 0; row < rows; row += 1) {
      var v = row / (rows - 1) * maxDepth;
      for (var column = 0; column < columns; column += 1) {
        var u = (column / (columns - 1) - 0.5) * 2.1;
        var random = Math.sin((row + 1) * 127.1 + (column + 1) * 311.7) * 43758.5453;
        pointU[index] = u;
        pointV[index] = v;
        pointSeed[index] = random - Math.floor(random);
        index += 1;
      }
    }

    draw(elapsedTime);
    previousTime = 0;
    schedule();
  }

  function smoothStep(start, end, value) {
    var t = Math.max(0, Math.min(1, (value - start) / (end - start)));
    return t * t * (3 - 2 * t);
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = particleColor;

    var isMobile = mobileQuery.matches;
    var centerX = width * 0.5;
    var horizon = heroHeight * (isMobile ? 0.04 : 0.12);

    for (var index = 0; index < count; index += 1) {
      var u = pointU[index];
      var v = pointV[index];
      var seed = pointSeed[index];
      var worldX = u * 1.45;

      var waveA = Math.sin(worldX * 1.8 + v * 3.5 - time * 0.42);
      var waveB = Math.sin(
        worldX * 4.1 - v * 5.3 + time * 0.28 + Math.sin(v * 3 + worldX) * 0.24
      );
      var waveC = Math.cos(worldX * 0.86 + v * 8.6 - time * 0.18);
      var waveD = Math.sin(worldX * 2.6 + v * 1.4 + time * 0.12);

      var ridgeCenterA = 0.34 * Math.sin(time * 0.23 + v * 3.4);
      var ridgeCenterB = -0.42 + 0.24 * Math.cos(time * 0.17 - v * 2.2);
      var ridgeA = Math.exp(-Math.pow((worldX - ridgeCenterA) / 0.24, 2));
      var ridgeB = Math.exp(-Math.pow((worldX - ridgeCenterB) / 0.2, 2));
      var ridge = Math.max(
        ridgeA * (0.72 + 0.28 * Math.sin(v * 7 - time * 0.28)),
        ridgeB * (0.68 + 0.32 * Math.cos(v * 5 + time * 0.22))
      );
      var wave = waveA * 0.48 + waveB * 0.24 + waveC * 0.17 + waveD * 0.11;
      wave += (ridge - 0.2) * 0.16 + (seed - 0.5) * 0.045;

      var perspective = 0.55 + v * 0.42 + wave * 0.018;
      var baseX = centerX + u * width * perspective * 0.53;
      var screenX = baseX + Math.sin(v * 4 + time * 0.25 + worldX) * width * 0.006 * (0.4 + v);
      var depth = Math.min(v, 1);
      var screenY = horizon + Math.pow(v, 1.65) * heroHeight * 1.03;
      screenY -= wave * heroHeight * (0.045 + depth * 0.075) + ridge * heroHeight * 0.018;

      if (screenX < -4 || screenX > width + 4 || screenY < -4 || screenY > height + 4) continue;

      var normalizedX = screenX / width;
      var normalizedY = screenY / heroHeight;
      var focusX = isMobile ? 0.5 : 0.31;
      var focusY = isMobile ? 0.25 : 0.48;
      var radiusX = isMobile ? 0.66 : 0.36;
      var radiusY = isMobile ? 0.2 : 0.34;
      var focusDistance = Math.pow((normalizedX - focusX) / radiusX, 2)
        + Math.pow((normalizedY - focusY) / radiusY, 2);
      var contrastMask = 1 - 0.44 * Math.exp(-focusDistance * 1.15);
      var activity = isMobile
        ? 0.5 + 0.5 * smoothStep(0.1, 0.5, normalizedY)
        : 0.78 + 0.22 * smoothStep(0.08, 0.94, normalizedY);
      var crest = Math.max(0, Math.min(1, 0.5 + wave * 0.5));
      var twinkle = 0.88 + 0.12 * Math.sin(time * (1.1 + seed) + seed * 18);
      var alpha = (0.22 + v * 0.3 + crest * 0.2 + ridge * 0.22)
        * contrastMask * activity * twinkle;
      var radius = 0.7 + v * 1.15 + crest * 0.35;
      var fadeStart = heroHeight - Math.min(140, heroHeight * 0.2);
      var fade = 1 - smoothStep(fadeStart, height, screenY);
      alpha *= fade;

      if (ridge > 0.62 && crest > 0.52) {
        context.fillStyle = particleColor;
        context.globalAlpha = alpha * 0.16;
        context.beginPath();
        context.arc(screenX, screenY, radius * 2.4, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = alpha;
        context.beginPath();
        context.arc(screenX, screenY, radius * 1.08, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = particleColor;
      } else {
        context.globalAlpha = alpha;
        context.beginPath();
        context.arc(screenX, screenY, radius, 0, Math.PI * 2);
        context.fill();
      }
    }

    context.globalAlpha = 1;
  }

  function shouldAnimate() {
    return !motionQuery.matches && !document.hidden && isVisible;
  }

  function stop() {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }
    previousTime = 0;
  }

  function schedule() {
    if (shouldAnimate() && !frameId) {
      frameId = window.requestAnimationFrame(frame);
    }
  }

  function frame(timestamp) {
    frameId = 0;
    if (!shouldAnimate()) return;

    if (previousTime) {
      elapsedTime += Math.min(timestamp - previousTime, 50) / 1000;
    }
    previousTime = timestamp;
    draw(elapsedTime);
    frameId = window.requestAnimationFrame(frame);
  }

  function updateMotion() {
    if (motionQuery.matches) {
      stop();
      draw(elapsedTime);
    } else {
      schedule();
    }
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else schedule();
  });

  window.addEventListener("resize", resize, { passive: true });
  if (typeof ResizeObserver === "function") {
    new ResizeObserver(resize).observe(hero);
  }

  if (typeof IntersectionObserver === "function") {
    new IntersectionObserver(function (entries) {
      isVisible = entries[0].isIntersecting;
      if (isVisible) schedule();
      else stop();
    }, { rootMargin: "160px 0px" }).observe(canvas);
  }

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", updateMotion);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(updateMotion);
  }

  resize();
})();

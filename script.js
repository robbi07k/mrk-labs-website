(function () {
  "use strict";

  var translations = {
    en: {},
    id: {
      skip: "Lewati ke konten",
      navLabel: "Navigasi utama",
      menuToggleLabel: "Buka atau tutup menu navigasi",
      navServices: "Solusi",
      navProcess: "Workflow",
      navUseCases: "Contoh kasus",
      navAbout: "Tentang",
      navContact: "Kontak",
      heroEyebrow: "STUDIO AI & OTOMASI BISNIS",
      heroTitle: "Kembangkan bisnis dengan",
      heroAccent: "teknologi cerdas.",
      heroTagline: "Kurangi pekerjaan manual. Tingkatkan produktivitas.",
      heroDescription: "Kami membangun solusi AI praktis, mengotomatisasi pekerjaan berulang, dan mengembangkan sistem digital khusus agar bisnis bekerja lebih efisien dan terus berkembang.",
      heroCta: "Diskusikan Kebutuhan Anda",
      heroSecondaryCta: "Jelajahi Solusi Kami",
      showcaseAriaLabel: "Lima kategori layanan dengan animasi",
      showcaseEyebrow: "KAPABILITAS DALAM GERAK",
      showcaseControlsLabel: "Pilih kategori layanan",
      themePickerLabel: "Pilih tema latar",
      themeNavy: "Navy",
      themeWhite: "Putih",
      introVideoEyebrow: "KENALI MRK LABS",
      introVideoTitle: "Cara yang lebih baik untuk memajukan pekerjaan.",
      introVideoDescription: "Lihat bagaimana AI praktis, otomasi, dan sistem digital dapat mendukung kebutuhan bisnis nyata.",
      introVideoWindowTitle: "Pengenalan Studio MRK Labs",
      introVideoAriaLabel: "Video pengenalan MRK Labs",
      introVideoFallback: "Browser Anda tidak mendukung video HTML.",
      tabAutomation: "Otomasi proses bisnis",
      tabAi: "Integrasi dan pengembangan AI",
      tabDocuments: "Kecerdasan dokumen dan data",
      tabSystems: "Sistem bisnis khusus",
      tabInfrastructure: "Infrastruktur digital",
      sceneAutomationKicker: "01 / OTOMASI PROSES BISNIS",
      sceneAutomationTitle: "Otomatisasi pekerjaan berulang.",
      sceneAutomationSummary: "Alur kerja yang terhubung menjadikan tugas rutin lebih tertata.",
      sceneAiKicker: "02 / INTEGRASI & PENGEMBANGAN AI",
      sceneAiTitle: "Manfaatkan AI untuk bisnis Anda.",
      sceneAiSummary: "Kecerdasan praktis yang terhubung dengan alat dan pekerjaan sehari-hari.",
      sceneDocumentsKicker: "03 / KECERDASAN DOKUMEN & DATA",
      sceneDocumentsTitle: "Ubah informasi menjadi wawasan berguna.",
      sceneDocumentsSummary: "Ekstrak, tata, dan temukan informasi penting dalam dokumen bisnis.",
      sceneSystemsKicker: "04 / SISTEM BISNIS KHUSUS",
      sceneSystemsTitle: "Bangun alat yang sesuai dengan bisnis Anda.",
      sceneSystemsSummary: "Perangkat lunak khusus yang mengikuti cara kerja tim Anda.",
      sceneInfrastructureKicker: "05 / INFRASTRUKTUR DIGITAL",
      sceneInfrastructureTitle: "Bangun fondasi digital bisnis Anda.",
      sceneInfrastructureSummary: "Pengalaman digital yang menghubungkan pelanggan dengan bisnis Anda.",
      servicesEyebrow: "YANG KAMI BANGUN",
      servicesTitle: "Teknologi yang bekerja untuk bisnis Anda.",
      servicesIntro: "Dari AI praktis hingga otomasi cerdas, kami membangun solusi digital yang berangkat dari kebutuhan bisnis nyata.",
      serviceNumberOne: "01 / OTOMASI",
      serviceAutomationTitle: "Otomatisasi pekerjaan berulang.",
      serviceAutomationText: "Hubungkan proses bisnis, kurangi tugas manual, dan tingkatkan efisiensi operasional sehari-hari.",
      automationExampleOne: "Otomasi alur kerja",
      automationExampleTwo: "Pelaporan otomatis",
      automationExampleThree: "Otomasi pengelolaan prospek",
      automationExampleFour: "Integrasi lintas platform",
      serviceNumberTwo: "02 / AI",
      serviceAiTitle: "Manfaatkan AI untuk bisnis Anda.",
      serviceAiText: "Integrasikan kemampuan AI yang berguna ke dalam operasional, alat, dan sistem yang sudah digunakan.",
      aiExampleOne: "Asisten AI khusus",
      aiExampleTwo: "Dukungan pelanggan berbasis AI",
      aiExampleThree: "Asisten pengetahuan",
      aiExampleFour: "Integrasi LLM dan API",
      aiStatus: "Program percontohan AI layanan pelanggan, tersedia terbatas",
      serviceNumberThree: "03 / DOKUMEN & DATA",
      serviceDocumentsTitle: "Ubah informasi menjadi wawasan berguna.",
      serviceDocumentsText: "Ubah dokumen dan informasi yang tersebar menjadi data yang teratur, mudah dicari, dan siap digunakan.",
      documentsExampleOne: "Pemrosesan invoice dan PDF",
      documentsExampleTwo: "Otomasi OCR dan ekstraksi data",
      documentsExampleThree: "Otomasi spreadsheet",
      documentsExampleFour: "Pembuatan dokumen otomatis",
      serviceNumberFour: "04 / SISTEM",
      serviceSystemsTitle: "Bangun alat yang sesuai dengan bisnis Anda.",
      serviceSystemsText: "Kembangkan sistem digital dan aplikasi internal yang mengikuti cara kerja bisnis Anda.",
      systemsExampleOne: "Dashboard bisnis internal",
      systemsExampleTwo: "Sistem inventaris dan penjualan",
      systemsExampleThree: "Aplikasi pelaporan",
      systemsExampleFour: "Aplikasi web khusus",
      serviceNumberFive: "05 / INFRASTRUKTUR",
      serviceInfrastructureTitle: "Bangun fondasi digital bisnis Anda.",
      serviceInfrastructureText: "Bangun infrastruktur digital yang dibutuhkan bisnis untuk terhubung dengan pelanggan dan berkembang.",
      infrastructureExampleOne: "Website bisnis",
      infrastructureExampleTwo: "Portal pelanggan",
      infrastructureExampleThree: "Sistem pemesanan",
      infrastructureExampleFour: "Infrastruktur akuisisi prospek",
      serviceExplore: "Jelajahi layanan ini",
      processEyebrow: "CARA KERJA",
      processTitle: "Dari tantangan bisnis menuju sistem yang lebih cerdas.",
      processIntro: "Pendekatan disesuaikan dengan kebutuhan Anda. Tidak semua proyek memerlukan setiap tahap.",
      processDiscover: "Temukan",
      processDiscoverText: "Pahami alur kerja, kendala, dan tujuan bisnis.",
      processDesign: "Rancang",
      processDesignText: "Kenali peluang dan susun solusi yang praktis.",
      processBuild: "Bangun",
      processBuildText: "Kembangkan otomasi, alat AI, atau sistem digital.",
      processIntegrate: "Integrasikan",
      processIntegrateText: "Hubungkan solusi dengan lingkungan bisnis yang sudah ada.",
      processOptimize: "Optimalkan",
      processOptimizeText: "Sempurnakan solusi seiring perubahan kebutuhan dan operasional.",
      useCasesEyebrow: "CONTOH PENERAPAN",
      useCasesTitle: "Apa yang bisa berjalan lebih baik di bisnis Anda?",
      useCasesIntro: "Mulai dari hambatan dalam pekerjaan sehari-hari, lalu cari cara praktis untuk mengatasinya.",
      useCaseNumberOne: "01 / INPUT DATA",
      useCaseManualTitle: "Terlalu banyak input data manual",
      problemLabel: "Tantangan",
      useCaseManualProblem: "Banyak waktu habis untuk menyalin informasi di antara spreadsheet dan aplikasi.",
      solutionLabel: "Pendekatan yang mungkin",
      useCaseManualSolution: "Otomatiskan ekstraksi, validasi, dan sinkronisasi data.",
      benefitLabel: "Hasil yang diharapkan",
      useCaseManualBenefit: "Kurangi input berulang dan tata aliran informasi dengan lebih konsisten.",
      useCaseNumberTwo: "02 / DOKUMEN",
      useCaseDocumentsTitle: "Dokumen tersebar di mana-mana",
      useCaseDocumentsProblem: "Informasi penting tersembunyi di dalam PDF, spreadsheet, dan folder yang berbeda.",
      useCaseDocumentsSolution: "Gunakan pemrosesan dokumen dan sistem pengetahuan yang mudah ditelusuri.",
      useCaseDocumentsBenefit: "Buat informasi berguna lebih mudah ditemukan dan dimanfaatkan.",
      useCaseNumberThree: "03 / OPERASIONAL",
      useCaseOperationsTitle: "Operasional harian yang berulang",
      useCaseOperationsProblem: "Langkah administrasi yang sama terus dilakukan berulang kali.",
      useCaseOperationsSolution: "Hubungkan tugas rutin dalam alur kerja yang jelas dan otomatis.",
      useCaseOperationsBenefit: "Beri tim lebih banyak waktu untuk pekerjaan yang membutuhkan perhatian mereka.",
      useCaseNumberFour: "04 / INTEGRASI",
      useCaseToolsTitle: "Alat bisnis yang tidak terhubung",
      useCaseToolsProblem: "Perangkat lunak yang digunakan tidak saling berbagi informasi.",
      useCaseToolsSolution: "Hubungkan sistem dengan integrasi dan API yang sesuai.",
      useCaseToolsBenefit: "Buat alur informasi yang lebih jelas di antara berbagai alat.",
      useCaseNumberFive: "05 / PERTUMBUHAN",
      useCaseGrowthTitle: "Operasional bisnis makin kompleks",
      useCaseGrowthProblem: "Perangkat yang ada tidak lagi sesuai dengan perkembangan cara kerja bisnis.",
      useCaseGrowthSolution: "Kembangkan aplikasi bisnis khusus sesuai pekerjaan yang perlu dilakukan.",
      useCaseGrowthBenefit: "Sediakan alat yang dirancang berdasarkan kebutuhan nyata tim Anda.",
      aboutEyebrow: "MENGAPA MRK LABS",
      aboutTitle: "Teknologi praktis. Manfaat nyata bagi bisnis.",
      aboutIntro: "Teknologi yang baik dimulai dengan memahami pekerjaan yang perlu dibuat lebih mudah.",
      principlePurpose: "Berangkat dari tujuan",
      principlePurposeText: "Mulai dari masalah bisnis nyata dan alasan yang jelas untuk menyelesaikannya.",
      principleSimplicity: "Utamakan kesederhanaan",
      principleSimplicityText: "Teknologi seharusnya mempermudah pekerjaan, bukan menambah kerumitan.",
      principleBuilt: "Dirancang untuk Anda",
      principleBuiltText: "Bentuk solusi mengikuti alur kerja dan orang yang menggunakannya.",
      principleAi: "AI yang praktis",
      principleAiText: "Utamakan penerapan yang berguna, bukan teknologi hanya demi tren.",
      aboutBrandTitle: "Kemitraan langsung dan terlibat.",
      aboutText: "MRK Labs membantu bisnis memanfaatkan AI, otomasi, dan teknologi khusus secara praktis. Setiap solusi dirancang berdasarkan kebutuhan bisnis nyata dan mudah dipahami.",
      location: "Berbasis di Balikpapan · Melayani bisnis di seluruh Indonesia secara remote",
      faqEyebrow: "FAQ",
      faqTitle: "Pertanyaan yang mungkin Anda miliki.",
      faqTurnaroundQ: "Berapa lama pengerjaan suatu proyek?",
      faqTurnaroundA: "Waktu tergantung pada lingkup dan ketersediaan konten. Setelah diskusi awal, Anda akan menerima perkiraan yang jelas untuk setiap tahap.",
      faqPricingQ: "Bagaimana pembahasan harganya?",
      faqPricingA: "Harga didasarkan pada lingkup yang disepakati dan perkiraan usaha. Kami membahasnya secara terbuka sebelum pekerjaan dimulai, tanpa kewajiban untuk melanjutkan.",
      faqSafetyQ: "Bagaimana data bisnis ditangani?",
      faqSafetyA: "Hanya informasi yang diperlukan untuk proyek yang dikumpulkan. Penanganan data, akses, dan retensi dibahas dan disepakati sebelum implementasi.",
      contactEyebrow: "MARI BERDISKUSI",
      contactTitle: "Siap membuat bisnis Anda bekerja lebih cerdas?",
      contactText: "Ceritakan hal yang memperlambat bisnis Anda. Mari bahas bagaimana otomasi, AI, atau teknologi khusus dapat membantu.",
      contactCta: "Diskusikan Proyek Anda",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      footerTagline: "Bangun lebih cerdas. Otomatiskan lebih baik. Tumbuh lebih jauh.",
      footerLocation: "Balikpapan, Indonesia"
    }
  };

  var enMessage = "Hello MRK Labs, I'd like to discuss how AI, automation, or custom technology could help my business.";
  var idMessage = "Halo MRK Labs, saya ingin membahas bagaimana AI, otomasi, atau teknologi khusus dapat membantu bisnis saya.";

  function cacheEnglishCopy() {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.setAttribute("data-en", element.textContent.trim());
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      element.setAttribute("data-en-aria-label", element.getAttribute("aria-label") || "");
    });
  }

  function setLanguage(language) {
    var selected = language === "id" ? "id" : "en";
    var dictionary = translations[selected];

    document.documentElement.lang = selected;
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      var english = element.getAttribute("data-en");
      element.textContent = selected === "id" && dictionary[key] ? dictionary[key] : english;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria-label");
      var english = element.getAttribute("data-en-aria-label");
      element.setAttribute("aria-label", selected === "id" && dictionary[key] ? dictionary[key] : english);
    });

    var languageToggle = document.getElementById("language-toggle");
    languageToggle.setAttribute("aria-checked", String(selected === "id"));
    languageToggle.setAttribute(
      "aria-label",
      selected === "id" ? "Ganti bahasa ke Inggris" : "Switch language to Indonesian"
    );

    var message = selected === "id" ? idMessage : enMessage;
    document.querySelectorAll(".whatsapp-link").forEach(function (link) {
      link.href = "https://wa.me/6281348934399?text=" + encodeURIComponent(message);
    });

    document.title = selected === "id"
      ? "MRK Labs — Studio AI & Otomasi Bisnis"
      : "MRK Labs — AI & Business Automation Studio";
    document.querySelector('meta[name="description"]').setAttribute(
      "content",
      selected === "id"
        ? "MRK Labs adalah studio AI dan otomasi bisnis yang membangun solusi AI praktis, alur kerja cerdas, dan sistem digital khusus."
        : "MRK Labs is an AI and business automation studio building practical AI, intelligent workflows, and custom digital systems for businesses."
    );
    localStorage.setItem("mrk-labs-language", selected);
  }

  function setTheme(theme) {
    var selected = theme === "light" ? "light" : "dark";
    var isLight = selected === "light";

    document.documentElement.setAttribute("data-theme", selected);
    document.querySelectorAll(".theme-option").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-theme-value") === selected));
    });
    document.querySelectorAll(".site-header .brand-wordmark").forEach(function (image) {
      image.setAttribute(
        "src",
        isLight ? "assets/logo-transparent.svg?v=15" : "assets/logo-primary.svg?v=15"
      );
    });
    document.querySelectorAll(".footer-brand-lockup .brand-wordmark").forEach(function (image) {
      image.setAttribute(
        "src",
        isLight ? "assets/logo-transparent.svg?v=15" : "assets/logo-primary.svg?v=15"
      );
    });
    document.querySelector('meta[name="theme-color"]').setAttribute(
      "content",
      isLight ? "#061225" : "#F5F8FC"
    );
    document.querySelector('meta[name="color-scheme"]').setAttribute(
      "content",
      isLight ? "light" : "dark"
    );
    localStorage.setItem("mrk-labs-theme", selected);
  }

  cacheEnglishCopy();
  setLanguage(localStorage.getItem("mrk-labs-language") === "id" ? "id" : "en");
  setTheme(localStorage.getItem("mrk-labs-theme") === "light" ? "light" : "dark");

  var menuToggle = document.getElementById("menu-toggle");
  var menuPanel = document.getElementById("header-menu-panel");
  var headerMenu = document.querySelector(".header-menu");
  menuPanel.hidden = true;

  function setMenuOpen(isOpen) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuPanel.hidden = !isOpen;
  }

  menuToggle.addEventListener("click", function () {
    setMenuOpen(menuPanel.hidden);
  });
  document.addEventListener("click", function (event) {
    if (!headerMenu.contains(event.target)) {
      setMenuOpen(false);
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  document.getElementById("language-toggle").addEventListener("click", function () {
    setLanguage(document.documentElement.lang === "en" ? "id" : "en");
  });
  document.querySelectorAll(".theme-option").forEach(function (button) {
    button.addEventListener("click", function () {
      setTheme(button.getAttribute("data-theme-value"));
    });
  });

  var revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach(function (element) { observer.observe(element); });
  } else {
    revealElements.forEach(function (element) { element.classList.add("is-visible"); });
  }
})();

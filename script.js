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
      navUseCases: "Contoh penerapan",
      navAbout: "Tentang",
      navContact: "Kontak",
      heroEyebrow: "STUDIO AI & OTOMASI UNTUK BISNIS",
      heroTitle: "Kembangkan bisnis dengan",
      heroAccent: "teknologi cerdas.",
      heroTagline: "Kurangi pekerjaan manual. Tingkatkan produktivitas.",
      heroDescription: "Kami membangun solusi AI praktis, mengotomatiskan pekerjaan berulang, dan mengembangkan sistem digital khusus agar bisnis bekerja lebih efisien dan terus berkembang.",
      heroCta: "Diskusikan Kebutuhan Anda",
      heroSecondaryCta: "Jelajahi Solusi Kami",
      showcaseAriaLabel: "Lima kategori layanan dengan animasi",
      showcaseEyebrow: "SOLUSI DALAM AKSI",
      showcaseControlsLabel: "Pilih kategori layanan",
      themePickerLabel: "Pilih tema latar",
      themeNavy: "Biru navy",
      themeWhite: "Putih",
      introVideoEyebrow: "KENALI MRK LABS",
      introVideoTitle: "Cara kerja yang lebih efektif.",
      introVideoDescription: "Lihat bagaimana AI praktis, otomasi, dan sistem digital dapat mendukung kebutuhan bisnis nyata.",
      introVideoWindowTitle: "Pengenalan Studio MRK Labs",
      introVideoAriaLabel: "Video pengenalan MRK Labs",
      introVideoFallback: "Browser Anda tidak mendukung video HTML.",
      tabAutomation: "Otomasi proses bisnis",
      tabAi: "Integrasi dan pengembangan AI",
      tabDocuments: "Pengolahan dokumen dan data",
      tabSystems: "Sistem bisnis khusus",
      tabInfrastructure: "Infrastruktur digital",
      sceneAutomationKicker: "01 / OTOMASI PROSES BISNIS",
      sceneAutomationTitle: "Otomasi pekerjaan berulang.",
      sceneAutomationSummary: "Alur kerja yang saling terhubung membuat tugas rutin lebih teratur.",
      sceneAiKicker: "02 / INTEGRASI & PENGEMBANGAN AI",
      sceneAiTitle: "Manfaatkan AI untuk bisnis Anda.",
      sceneAiSummary: "AI praktis yang terintegrasi dengan alat kerja dan aktivitas sehari-hari.",
      sceneDocumentsKicker: "03 / PENGOLAHAN DOKUMEN & DATA",
      sceneDocumentsTitle: "Ubah informasi menjadi wawasan yang bermanfaat.",
      sceneDocumentsSummary: "Temukan, rapikan, dan gunakan informasi penting dari dokumen bisnis.",
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
      serviceAutomationTitle: "Otomasi pekerjaan berulang.",
      serviceAutomationText: "Hubungkan proses bisnis, kurangi tugas manual, dan tingkatkan efisiensi operasional sehari-hari.",
      automationExampleOne: "Otomasi alur kerja",
      automationExampleTwo: "Pelaporan otomatis",
      automationExampleThree: "Otomasi pengelolaan prospek",
      automationExampleFour: "Integrasi lintas platform",
      serviceNumberTwo: "02 / AI",
      serviceAiTitle: "Manfaatkan AI untuk bisnis Anda.",
      serviceAiText: "Terapkan AI yang berguna pada operasional dan sistem yang sudah Anda gunakan.",
      aiExampleOne: "Asisten AI khusus",
      aiExampleTwo: "Dukungan pelanggan berbasis AI",
      aiExampleThree: "Asisten pencarian informasi internal",
      aiExampleFour: "Integrasi LLM dan API",
      aiStatus: "Uji coba layanan pelanggan berbasis AI tersedia secara terbatas.",
      serviceNumberThree: "03 / DOKUMEN & DATA",
      serviceDocumentsTitle: "Ubah informasi menjadi wawasan yang bermanfaat.",
      serviceDocumentsText: "Olah dokumen dan informasi yang tersebar menjadi data terstruktur yang mudah dicari dan siap digunakan.",
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
      infrastructureExampleFour: "Sistem untuk mendapatkan calon pelanggan",
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
      useCaseManualProblem: "Waktu banyak terbuang untuk menyalin informasi dari satu spreadsheet atau aplikasi ke yang lain.",
      solutionLabel: "Pendekatan yang mungkin",
      useCaseManualSolution: "Otomatiskan ekstraksi, validasi, dan sinkronisasi data.",
      benefitLabel: "Hasil yang diharapkan",
      useCaseManualBenefit: "Kurangi input berulang dan buat alur informasi lebih konsisten.",
      useCaseNumberTwo: "02 / DOKUMEN",
      useCaseDocumentsTitle: "Dokumen tersebar di mana-mana",
      useCaseDocumentsProblem: "Informasi penting tersembunyi di dalam PDF, spreadsheet, dan folder yang berbeda.",
      useCaseDocumentsSolution: "Gunakan pemrosesan dokumen dan sistem pencarian informasi agar dokumen mudah ditelusuri.",
      useCaseDocumentsBenefit: "Buat informasi berguna lebih mudah ditemukan dan dimanfaatkan.",
      useCaseNumberThree: "03 / OPERASIONAL",
      useCaseOperationsTitle: "Operasional harian yang berulang",
      useCaseOperationsProblem: "Langkah administrasi yang sama terus dilakukan berulang kali.",
      useCaseOperationsSolution: "Hubungkan tugas rutin dalam alur kerja yang jelas dan otomatis.",
      useCaseOperationsBenefit: "Beri tim lebih banyak waktu untuk fokus pada pekerjaan penting.",
      useCaseNumberFour: "04 / INTEGRASI",
      useCaseToolsTitle: "Alat bisnis yang tidak terhubung",
      useCaseToolsProblem: "Perangkat lunak yang digunakan tidak saling berbagi informasi.",
      useCaseToolsSolution: "Hubungkan sistem dengan integrasi dan API yang sesuai.",
      useCaseToolsBenefit: "Buat alur informasi yang lebih jelas di antara berbagai alat.",
      useCaseNumberFive: "05 / PERTUMBUHAN",
      useCaseGrowthTitle: "Operasional bisnis makin kompleks",
      useCaseGrowthProblem: "Perangkat yang ada tidak lagi sesuai dengan perkembangan cara kerja bisnis.",
      useCaseGrowthSolution: "Buat aplikasi khusus yang sesuai dengan kebutuhan operasional.",
      useCaseGrowthBenefit: "Sediakan alat yang dirancang berdasarkan kebutuhan nyata tim Anda.",
      useCaseNumberSix: "06 / MAINTENANCE & RELIABILITY",
      useCaseMaintenanceTitle: "Data Work Order yang belum konsisten",
      useCaseMaintenanceProblem: "Asset ID, failure code, dan close-out notes berbeda-beda, sehingga history dan reliability analysis sulit dibandingkan.",
      useCaseMaintenanceSolution: "Petakan Work Order ke taxonomy yang disepakati, validasi field penting, dan tandai record yang perlu ditinjau engineer.",
      useCaseMaintenanceBenefit: "Data yang lebih konsisten sebagai dasar analisis MTBF, MTTR, backlog, dan Pareto.",
      useCaseMaintenanceLink: "Lihat contoh workflow",
      maintenanceEyebrow: "MAINTENANCE & RELIABILITY",
      maintenanceTitle: "Dukung keputusan maintenance dengan data Work Order yang lebih konsisten.",
      maintenanceIntro: "Untuk planner, reliability engineer, dan operations leader yang membutuhkan data Work Order lebih konsisten dan reporting yang lebih dapat diandalkan.",
      maintenancePrimaryCta: "Diskusikan workflow reliability",
      maintenanceSecondaryCta: "Lihat contoh workflow",
      maintenanceCaseEyebrow: "CONTOH PENERAPAN",
      maintenanceCaseTitle: "Saat data Work Order belum seragam",
      maintenanceChallengeTitle: "Tantangan",
      maintenanceChallengeText: "Asset ID, failure code, dan close-out notes berbeda-beda antar Work Order. Akibatnya, history sulit dibandingkan dan hasil reliability analysis kurang konsisten.",
      maintenanceApproachTitle: "Pendekatan yang mungkin",
      maintenanceApproachText: "Selaraskan field penting dengan taxonomy yang disepakati, validasi data wajib, dan tandai record ambigu untuk ditinjau engineer tanpa menghapus nilai aslinya.",
      maintenanceOutcomeTitle: "Hasil yang diharapkan",
      maintenanceOutcomeText: "Data yang lebih konsisten sebagai dasar analisis MTBF, MTTR, backlog, dan Pareto.",
      maintenanceWorkflowEyebrow: "WORKFLOW SNAPSHOT",
      maintenanceWorkflowTitle: "Dari data sumber ke reliability reporting",
      maintenanceWorkflowIntro: "Ini contoh workflow. Desain akhirnya menyesuaikan CMMS, definisi field, kualitas data, dan proses review.",
      maintenanceStepOneTitle: "CMMS exports",
      maintenanceStepOneText: "Work Order, asset hierarchy, dan reference list yang disepakati.",
      maintenanceStepTwoTitle: "Validation",
      maintenanceStepTwoText: "Periksa field wajib, data type, duplikasi, dan nilai yang belum terisi.",
      maintenanceStepThreeTitle: "Taxonomy mapping",
      maintenanceStepThreeText: "Petakan nilai lama ke asset dan failure taxonomy yang disepakati; minta engineer meninjau record yang belum jelas.",
      maintenanceStepFourTitle: "Reliability reporting",
      maintenanceStepFourText: "Siapkan data yang konsisten untuk analisis MTBF, MTTR, backlog, dan Pareto.",
      maintenanceNote: "Workflow ini bersifat ilustratif, bukan case study klien yang sudah dipublikasikan. Angka dan dampak hanya akan dicantumkan setelah diukur serta mendapat izin untuk dipublikasikan.",
      maintenanceContactTitle: "Sedang merapikan data Work Order atau reliability?",
      maintenanceContactText: "Ceritakan bagian reporting yang paling sulit. Kita bisa mulai dengan memahami data source dan definisinya, tanpa membagikan data operasional yang sensitif.",
      maintenanceContactCta: "Diskusikan use case",
      maintenanceBackTitle: "Jelajahi use case lainnya",
      maintenanceBackCta: "Lihat use case lainnya",
      aboutEyebrow: "MENGAPA MRK LABS",
      aboutTitle: "Teknologi praktis. Manfaat nyata bagi bisnis.",
      aboutIntro: "Teknologi yang tepat berawal dari memahami hal yang perlu dipermudah.",
      principlePurpose: "Berangkat dari tujuan",
      principlePurposeText: "Mulai dari masalah bisnis nyata dan alasan yang jelas untuk menyelesaikannya.",
      principleSimplicity: "Utamakan kesederhanaan",
      principleSimplicityText: "Teknologi seharusnya mempermudah pekerjaan, bukan menambah kerumitan.",
      principleBuilt: "Dirancang untuk Anda",
      principleBuiltText: "Solusi dirancang sesuai alur kerja dan kebutuhan tim Anda.",
      principleAi: "AI yang praktis",
      principleAiText: "Fokus pada manfaat nyata, bukan sekadar mengikuti tren teknologi.",
      aboutBrandTitle: "Kemitraan langsung dengan pendampingan di setiap tahap.",
      aboutText: "MRK Labs membantu bisnis menerapkan AI, otomasi, dan teknologi yang dirancang sesuai kebutuhan. Solusi kami dibuat agar mudah dipahami dan digunakan.",
      location: "Berbasis di Balikpapan · Melayani bisnis di seluruh Indonesia dari jarak jauh",
      faqEyebrow: "TANYA JAWAB",
      faqTitle: "Pertanyaan umum",
      faqTurnaroundQ: "Berapa lama pengerjaan suatu proyek?",
      faqTurnaroundA: "Durasi pengerjaan bergantung pada ruang lingkup proyek dan kesiapan materi. Setelah diskusi awal, kami akan memberikan perkiraan waktu yang jelas untuk setiap tahap.",
      faqPricingQ: "Bagaimana biaya proyek ditentukan?",
      faqPricingA: "Biaya ditentukan berdasarkan ruang lingkup proyek dan perkiraan beban kerja. Kami menyampaikannya secara terbuka sebelum pekerjaan dimulai, dan Anda bebas memutuskan apakah ingin melanjutkan.",
      faqSafetyQ: "Bagaimana data bisnis ditangani?",
      faqSafetyA: "Kami hanya mengumpulkan informasi yang diperlukan untuk proyek. Pengelolaan data, pihak yang dapat mengaksesnya, dan lama penyimpanannya dibahas dan disepakati sebelum proyek dimulai.",
      contactEyebrow: "MARI BERDISKUSI",
      contactTitle: "Siap membuat bisnis Anda bekerja lebih cerdas?",
      contactText: "Ceritakan hal yang memperlambat bisnis Anda. Mari bahas bagaimana otomasi, AI, atau teknologi khusus dapat membantu.",
      contactCta: "Diskusikan Proyek Anda",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      footerTagline: "Bangun solusi dengan lebih cerdas. Otomatiskan proses. Kembangkan bisnis.",
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

    var titleElement = document.querySelector("title");
    var pageTitle = titleElement.getAttribute("data-title-" + selected);
    document.title = pageTitle || (selected === "id"
      ? "MRK Labs — Studio AI & Otomasi Bisnis"
      : "MRK Labs — AI & Business Automation Studio");
    var descriptionElement = document.querySelector('meta[name="description"]');
    var pageDescription = descriptionElement.getAttribute("data-description-" + selected);
    descriptionElement.setAttribute(
      "content",
      pageDescription || (selected === "id"
        ? "MRK Labs adalah studio AI dan otomasi bisnis yang membangun solusi AI praktis, alur kerja cerdas, dan sistem digital khusus."
        : "MRK Labs is an AI and business automation studio building practical AI, intelligent workflows, and custom digital systems for businesses.")
    );
    localStorage.setItem("mrk-labs-language", selected);
  }

  function setTheme(theme) {
    var selected = theme === "light" ? "light" : "dark";
    var isLight = selected === "light";
    var assetPrefix = document.documentElement.getAttribute("data-asset-prefix") || "";

    document.documentElement.setAttribute("data-theme", selected);
    document.querySelectorAll(".theme-option").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-theme-value") === selected));
    });
    document.querySelectorAll(".site-header .brand-wordmark").forEach(function (image) {
      image.setAttribute(
        "src",
        assetPrefix + (isLight ? "assets/logo-transparent.svg?v=15" : "assets/logo-primary.svg?v=15")
      );
    });
    document.querySelectorAll(".footer-brand-lockup .brand-wordmark").forEach(function (image) {
      image.setAttribute(
        "src",
        assetPrefix + (isLight ? "assets/logo-transparent.svg?v=15" : "assets/logo-primary.svg?v=15")
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

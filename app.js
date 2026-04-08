/* ============================================================
   くら鯖 Mod一覧 スクリプト
   mods.js の MOD_VERSIONS データを読み込んでページを描画します
   ============================================================ */

(function () {
  "use strict";

  // ---- 現在表示中のバージョンインデックス ----
  let currentIdx = 0;

  // ---- DOM refs ----
  const versionBarInner = document.getElementById("version-bar-inner");
  const heroTitle = document.getElementById("hero-title");
  const heroDesc = document.getElementById("hero-desc");
  const heroTags = document.getElementById("hero-tags");
  const downloadBtn = document.getElementById("download-btn");
  const sidebarNav = document.getElementById("sidebar-nav");
  const contentArea = document.getElementById("content-area");

  // ================================================================
  //  バージョンタブを描画
  // ================================================================
  function renderVersionTabs() {
    versionBarInner.innerHTML =
      `<span class="version-bar-label">シリーズ</span>`;

    MOD_VERSIONS.forEach((ver, idx) => {
      const btn = document.createElement("button");
      btn.className = "ver-tab" + (idx === currentIdx ? " active" : "");
      btn.dataset.idx = idx;
      btn.innerHTML = `<span class="ver-dot"></span>${ver.label}`;
      btn.addEventListener("click", () => switchVersion(idx));
      versionBarInner.appendChild(btn);
    });
  }

  // ================================================================
  //  ヒーローエリアを更新
  // ================================================================
  function renderHero(ver) {
    heroTitle.innerHTML = ver.label.replace(
      /(Ver\.\d+)/,
      '<em>$1</em>'
    );
    heroDesc.textContent = ver.description;
    heroTags.innerHTML = `
      <span class="tag forge">${ver.loader}</span>
      <span class="tag ver">Minecraft ${ver.minecraft}</span>
      <span class="tag">Mod数 約${ver.totalMods}</span>
    `;
    downloadBtn.href = "#";
    downloadBtn.onclick = (e) => {
      e.preventDefault();
      showDownloadModal(ver.downloads);
    };
  }

  // ================================================================
  //  サイドバーを描画
  // ================================================================
  function renderSidebar(ver) {
    sidebarNav.innerHTML = "";
    ver.categories.forEach(cat => {
      const a = document.createElement("a");
      a.className = "sidebar-link";
      a.href = "#" + cat.id;
      a.dataset.target = cat.id;
      a.innerHTML = `
        <span class="icon">${cat.icon}</span>
        ${cat.title}
        <span class="sidebar-count">${cat.mods.length}</span>
      `;
      a.addEventListener("click", e => {
        e.preventDefault();
        const sec = document.getElementById(cat.id);
        if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      sidebarNav.appendChild(a);
    });
  }

  // ================================================================
  //  Modカードを生成
  // ================================================================
  function buildModCard(mod) {
    const card = document.createElement("div");
    card.className = "mod-card";

    // --- バッジ ---
    let badgeHtml = "";
    if (mod.addons && mod.addons.length) {
      const label = mod.addonLabel || "Addon";
      badgeHtml = `<span class="mod-badge badge-addon">${label} ${mod.addons.length}個</span>`;
    }
    if (mod.badge === "jp") {
      badgeHtml += `<span class="mod-badge badge-jp">日本製Mod</span>`;
    }
    if (mod.badge === "original") {
      badgeHtml += `<span class="mod-badge badge-original">オリジナル</span>`;
    }

    // --- メイン部分 ---
    card.innerHTML = `
      <div class="mod-main">
        <div class="mod-icon-wrap">${mod.icon}</div>
        <div class="mod-body">
          <div class="mod-name">${escHtml(mod.name)} ${badgeHtml}</div>
          <div class="mod-desc">${escHtml(mod.desc)}</div>
        </div>
      </div>
    `;

    // --- Addonリスト ---
    if (mod.addons && mod.addons.length) {
      const addonLabel = mod.addonLabel || "Addon";
      const toggleBtn = document.createElement("button");
      toggleBtn.className = "addon-toggle-btn";
      toggleBtn.innerHTML = `<i class="toggle-arrow">▶</i> ${addonLabel}を見る (${mod.addons.length}個)`;
      toggleBtn.addEventListener("click", () => toggleAddon(toggleBtn));
      card.appendChild(toggleBtn);

      const addonList = document.createElement("div");
      addonList.className = "addon-list";
      mod.addons.forEach(addon => {
        const item = document.createElement("div");
        item.className = "addon-item";
        item.innerHTML = `
          <div class="addon-dot"></div>
          <div>
            <div class="addon-name">${escHtml(addon.name)}</div>
            <div class="addon-desc">${escHtml(addon.desc)}</div>
          </div>
        `;
        addonList.appendChild(item);
      });
      card.appendChild(addonList);
    }

    return card;
  }

  // ================================================================
  //  コンテンツエリアを描画
  // ================================================================
  function renderContent(ver) {
    contentArea.innerHTML = "";
    ver.categories.forEach(cat => {
      const section = document.createElement("section");
      section.className = "category-section";
      section.id = cat.id;

      section.innerHTML = `
        <div class="category-header">
          <span class="category-icon">${cat.icon}</span>
          <span class="category-title">${escHtml(cat.title)}</span>
          <span class="category-count">${cat.mods.length} Mods</span>
        </div>
      `;

      cat.mods.forEach(mod => {
        section.appendChild(buildModCard(mod));
      });

      contentArea.appendChild(section);
    });
  }

  // ================================================================
  //  バージョン切り替え
  // ================================================================
  function switchVersion(idx) {
    if (idx === currentIdx) return;
    currentIdx = idx;

    // フェードアウト
    contentArea.classList.add("fading");

    setTimeout(() => {
      const ver = MOD_VERSIONS[currentIdx];
      renderHero(ver);
      renderSidebar(ver);
      renderContent(ver);
      renderVersionTabs(); // アクティブ更新
      initScrollSpy();
      contentArea.classList.remove("fading");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  }

  // ================================================================
  //  スクロールスパイ
  // ================================================================
  function initScrollSpy() {
    const links = sidebarNav.querySelectorAll(".sidebar-link");
    const sections = contentArea.querySelectorAll(".category-section");

    function update() {
      let current = "";
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
      });
      links.forEach(l => {
        l.classList.toggle("active", l.dataset.target === current);
      });
    }

    // 古いリスナーを差し替えるため、一旦クローンで置き換え
    window.removeEventListener("scroll", window._scrollSpy);
    window._scrollSpy = update;
    window.addEventListener("scroll", update);
    update();
  }

  // ================================================================
  //  Addonトグル
  // ================================================================
  function toggleAddon(btn) {
    const isOpen = btn.classList.contains("open");
    btn.classList.toggle("open", !isOpen);
    const list = btn.nextElementSibling;
    list.classList.toggle("open", !isOpen);
    const countMatch = btn.textContent.match(/\((\d+)個\)/);
    const count = countMatch ? countMatch[0] : "";
    const addonLabel = btn.textContent.match(/^[^\(]+を/)?.[0] || "Addonを";
    btn.innerHTML = `<i class="toggle-arrow${!isOpen ? " open" : ""}">▶</i> ${!isOpen ? addonLabel + "隠す " : addonLabel + "見る "}${count}`;
  }

  // ================================================================
  //  ユーティリティ
  // ================================================================
  function escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ================================================================
  //  ダウンロードモーダル
  // ================================================================
  const DOWNLOAD_LABELS = [
    { key: "prism", icon: "🔷", label: "Prism Launcher" },
    { key: "modrinth", icon: "🟢", label: "Modrinth App" },
    { key: "curseforge", icon: "🔶", label: "CurseForge" },
    { key: "zip", icon: "📦", label: "ZIPで直接ダウンロード" },
  ];

  function showDownloadModal(downloads) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<h2 class="modal-title">ダウンロード方法を選択</h2>`;

    DOWNLOAD_LABELS.forEach(({ key, icon, label }) => {
      const url = downloads?.[key];
      const btn = document.createElement("a");
      btn.className = "modal-btn" + (url ? "" : " disabled");
      btn.innerHTML = `<span>${icon}</span><span>${label}</span>${url ? "" : '<span class="modal-na">準備中 / お問い合わせください</span>'}`;
      if (url) {
        btn.href = url;
        btn.download = "";
      } else {
        btn.href = "#";
        btn.addEventListener("click", e => e.preventDefault());
      }
      modal.appendChild(btn);
    });

    const closeBtn = document.createElement("button");
    closeBtn.className = "modal-close";
    closeBtn.textContent = "閉じる";
    closeBtn.addEventListener("click", () => overlay.remove());
    modal.appendChild(closeBtn);

    overlay.appendChild(modal);
    overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }


  // ================================================================
  //  初期化
  // ================================================================
  function init() {
    if (!MOD_VERSIONS || MOD_VERSIONS.length === 0) {
      contentArea.innerHTML = "<p style='color:var(--text2);padding:2rem'>mods.js が読み込まれていません。</p>";
      return;
    }
    renderVersionTabs();
    const ver = MOD_VERSIONS[0];
    renderHero(ver);
    renderSidebar(ver);
    renderContent(ver);
    initScrollSpy();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      this.style.display = "none";
      console.warn(`Image non trouvée: ${this.src}`);
    });
  });

  document.querySelectorAll(".btn, .tab-btn, .hamburger").forEach((element) => {
    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  function initAddressCopy() {
    const addressClickable = document.querySelector(".address-clickable");
    const copyFeedback = document.querySelector(".copy-feedback");

    if (addressClickable && copyFeedback) {
      addressClickable.style.cursor = "pointer";

      addressClickable.addEventListener("click", async function () {
        const address = this.getAttribute("data-address");

        try {
          await navigator.clipboard.writeText(address);

          copyFeedback.classList.add("show");

          setTimeout(() => {
            copyFeedback.classList.remove("show");
          }, 2000);
        } catch (err) {
          const textArea = document.createElement("textarea");
          textArea.value = address;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();

          try {
            document.execCommand("copy");
            copyFeedback.classList.add("show");
            setTimeout(() => {
              copyFeedback.classList.remove("show");
            }, 2000);
          } catch (fallbackErr) {
            console.error("Impossible de copier l'adresse:", fallbackErr);
          }

          document.body.removeChild(textArea);
        }
      });
    }
  }

  initAddressCopy();

  window.addEventListener("fragmentsLoaded", initAddressCopy);

  // Correction des liens pour les pages légales
  function fixLegalPageLinks() {
    const currentPage = window.location.pathname;
    const isLegalPage =
      currentPage.includes("mentions-legales.html") ||
      currentPage.includes("politique-confidentialite.html");

    if (!isLegalPage) return;

    // Corriger le logo pour pointer vers l'accueil
    const logoLink = document.querySelector(".nav-logo a");
    if (logoLink) {
      logoLink.href = "index.html";
      logoLink.removeAttribute("target");
      logoLink.removeAttribute("rel");
      logoLink.setAttribute("aria-label", "Retour à l'accueil");
    }

    // Corriger les liens de navigation (header)
    document.querySelectorAll(".nav-menu a.nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        link.href = `index.html${href}`;
      }
    });

    // Corriger les liens du footer
    document.querySelectorAll(".footer-links a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        // Pour #accueil, on va juste à index.html
        if (href === "#accueil") {
          link.href = "index.html";
        } else {
          link.href = `index.html${href}`;
        }
      }
    });
  }

  // Exécuter après le chargement des fragments
  window.addEventListener("fragmentsLoaded", fixLegalPageLinks);

  // Exécuter aussi au chargement si les fragments sont déjà chargés
  if (document.readyState === "complete") {
    setTimeout(fixLegalPageLinks, 100);
  }
});

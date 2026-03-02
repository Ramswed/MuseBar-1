const SITE_CONFIG = {
  site: {
    name: "Muse",
    tagline: "Bar et cuisine à partager",
    description:
      "Découvrez Muse Bar, un établissement de restauration d'exception à Rouen où cuisine raffinée et ambiance chaleureuse se rencontrent.",
    version: "1.0.0",
    year: 2025,
  },

  contact: {
    address: "4 impasse des Hauts Mariages",
    city: "76000 Rouen, France",
    phone: "+33 0 00 00 00 00",
    email: "en cours de création",
    coordinates: {
      lat: 49.4401499,
      lng: 1.098898,
    },
    hours: {
      lundi: "17h00 - 23h00",
      mardi: "17h00 - 00h00",
      mercredi: "17h00 - 00h00",
      jeudi: "17h00 - 01h00",
      vendredi: "17h00 - 01h00",
      samedi: "17h00 - 01h00",
      dimanche: "17h00 - 23h00",
    },
  },

  social: {
    instagram: "https://www.instagram.com/muse_bar_rouen/",
    instagramHandle: "@muse_bar_rouen",
  },

  map: {
    enabled: true,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.3474378378605!2d1.098898!3d49.440149999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0df00253696c3%3A0x7d955acb7ec7c05c!2sMuse!5e0!3m2!1sfr!2sfr!4v1753535281311!5m2!1sfr!2sfr",
    address: "4 impasse des Hauts Mariages, 76000 Rouen, France",
  },

  animations: {
    enabled: true,
    duration: 600,
    easing: "ease",
    slideInterval: 5000,
  },

  seo: {
    title: "Muse Bar - L'expérience culinaire unique à Rouen",
    description:
      "Découvrez Muse Bar, un établissement gastronomique d'exception où cuisine raffinée et ambiance chaleureuse se rencontrent. Planches à partager, cocktails originaux et cave privatisable.",
    keywords:
      "restaurant, bar, gastronomie, Rouen, planches à partager, cocktails, privatisation, cave, ambiance chaleureuse",
    author: "Muse Bar",
    ogImage: "images/homepage.png",
    canonical: "https://musebar.fr",
  },

  legal: {
    company: {
      name: "Muse Bar",
      legalForm: "SASU",
      headquartersAddress: "254 RUE MARTAINVILLE",
      headquartersCity: "76000 Rouen, France",
      siret: "931 334 718 00018",
      siren: "931 334 718 R.C.S. Rouen",
      vatNumber: "FR64 931334718",
      capital: "2000.00 €",
    },
    director: {
      name: "Hugo Martins",
      role: "Président",
    },
    hosting: {
      name: "Cloudflare, Inc.",
      address: "101 Townsend Street, San Francisco, CA 94107, USA",
      website: "https://www.cloudflare.com",
    },
  },
};

function updateSiteContent() {
  document.querySelectorAll(".nav-logo h2, .hero-title").forEach((el) => {
    if (el) el.textContent = SITE_CONFIG.site.name;
  });

  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.textContent = SITE_CONFIG.site.tagline;
  }

  if (SITE_CONFIG.contact) {
    const contactItems = document.querySelectorAll(".contact-item");
    contactItems.forEach((item) => {
      const icon = item.querySelector("i");
      if (icon) {
        const iconClass = icon.className;
        if (iconClass.includes("map-marker-alt")) {
          item.querySelector(
            "p"
          ).innerHTML = `${SITE_CONFIG.contact.address}<br>${SITE_CONFIG.contact.city}`;
        } else if (iconClass.includes("phone")) {
          item.querySelector("p").textContent = SITE_CONFIG.contact.phone;
        } else if (iconClass.includes("envelope")) {
          item.querySelector("p").textContent = SITE_CONFIG.contact.email;
        }
      }
    });
  }

  if (SITE_CONFIG.social) {
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach((link) => {
      const icon = link.querySelector("i");
      const iconClass = icon ? icon.className : "";
      if (icon && iconClass.includes("instagram")) {
        link.href = SITE_CONFIG.social.instagram;
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateSiteContent();
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}

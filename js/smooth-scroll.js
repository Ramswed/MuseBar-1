function initSmoothScroll() {
  document.addEventListener("click", function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 70;
    const extraOffset = href === "#privatisation" ? 120 : 70;
    const offsetTop = target.offsetTop - navbarHeight + extraOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSmoothScroll);
} else {
  initSmoothScroll();
}

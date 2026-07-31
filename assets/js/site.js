(function () {
  "use strict";

  const body = document.body;
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelectorAll(".desktop-nav a");

  if (header) {
    const updateHeader = function () {
      header.classList.toggle("scrolled", window.scrollY > 16);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      const isOpen = body.classList.toggle("nav-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
      if (menuButton) menuButton.setAttribute("aria-expanded", "false");
    });
  });

  const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
  navLinks.forEach(function (link) {
    const linkPath = new URL(link.href, window.location.href).pathname.replace(
      /\/index\.html$/,
      "/",
    );
    const isHome =
      (currentPath === "/" || currentPath.endsWith("/qize-website/")) &&
      (linkPath === "/" || linkPath.endsWith("/qize-website/"));
    if (isHome || (linkPath !== "/" && currentPath.startsWith(linkPath))) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    reveals.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  const inquiryForm = document.querySelector("[data-inquiry-form]");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(inquiryForm);
      const subject = encodeURIComponent(
        "QIZE Website Inquiry — " + (data.get("company") || data.get("name") || "New Project"),
      );
      const message = [
        "Name: " + (data.get("name") || ""),
        "Company: " + (data.get("company") || ""),
        "Email: " + (data.get("email") || ""),
        "Country / Region: " + (data.get("country") || ""),
        "Product Interest: " + (data.get("interest") || ""),
        "",
        "Project Details:",
        data.get("message") || "",
      ].join("\n");
      window.location.href =
        "mailto:info@qizezn.com?subject=" +
        subject +
        "&body=" +
        encodeURIComponent(message);
    });
  }
})();

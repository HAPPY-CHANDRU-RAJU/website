$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    html: true,
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Mobile screen block 
  if (window.innerWidth <= 768) {
    $("#mobileModal").modal({
      show: false,
      backdrop: "static",
      keyboard: false,
    });
    $("#mobileModal").modal("show");
    $("#desktop").empty();
  }

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

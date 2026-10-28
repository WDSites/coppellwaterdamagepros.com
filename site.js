(function () {
  var BREAKPOINT = 900;
  var btn = document.getElementById("nav-toggle");
  var menu = document.getElementById("mobile-menu");
  if (!btn || !menu) { return; }
  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Close" : "Menu";
    document.documentElement.classList.toggle("menu-open", open);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BREAKPOINT && menu.classList.contains("open")) {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
      document.documentElement.classList.remove("menu-open");
    }
  });
})();

/* UI-Venus-2.0 project page — "What it can do" showcase: capability
 * switcher, pager, and the auto-rotate progress behaviour. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  var capCells = Array.prototype.slice.call(document.querySelectorAll(".cap-cell"));
  var capPanels = capCells.map(function (cell) {
    return document.getElementById(cell.getAttribute("aria-controls"));
  });

  function capSelect(idx) {
    idx = (idx + capCells.length) % capCells.length;
    capCells.forEach(function (cell, i) {
      cell.setAttribute("aria-selected", i === idx ? "true" : "false");
      if (capPanels[i]) capPanels[i].hidden = i !== idx;
    });
  }

  capCells.forEach(function (cell, i) {
    cell.addEventListener("click", function () { capSelect(i); });
  });

  document.querySelectorAll(".cap-panel .pager button[data-dir]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var current = capPanels.findIndex(function (p) { return p && !p.hidden; });
      capSelect(current + parseInt(btn.dataset.dir, 10));
    });
  });

  /* Auto-rotate the showcase every 8s while it is on screen; any manual
     interaction stops the rotation for good. The selected cell's underline
     doubles as the rotation progress bar (see .cap-strip.auto in CSS). */
  var capStrip = document.querySelector(".cap-strip");
  var capAutoTimer = null;
  var capAutoStopped = reduceMotion;

  function capAutoPause() {
    if (capAutoTimer) { clearInterval(capAutoTimer); capAutoTimer = null; }
    if (capStrip) capStrip.classList.remove("auto");
  }
  function capAutoStart() {
    if (capAutoStopped || capAutoTimer || !capStrip) return;
    capStrip.classList.add("auto");
    capAutoTimer = setInterval(function () {
      var current = capPanels.findIndex(function (p) { return p && !p.hidden; });
      capSelect(current + 1);
    }, 8000);
  }
  function capAutoKill() { capAutoStopped = true; capAutoPause(); }

  capCells.forEach(function (cell) { cell.addEventListener("click", capAutoKill); });
  document.querySelectorAll(".cap-panel .pager button[data-dir]").forEach(function (btn) {
    btn.addEventListener("click", capAutoKill);
  });

  if (capStrip && !capAutoStopped && "IntersectionObserver" in window) {
    var capObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) capAutoStart();
        else capAutoPause();
      });
    }, { threshold: 0.25 });
    capObserver.observe(capStrip);
  }
})();

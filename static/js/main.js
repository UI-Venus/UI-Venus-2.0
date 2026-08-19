/* UI-Venus-2.0 project page — shared page behaviour: scroll reveal,
 * count-up numbers, BibTeX copy, footer year. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function growCharts(root) {
    if (window.VenusPage && window.VenusPage.growCharts) window.VenusPage.growCharts(root);
  }


  function countUp(node) {
    var target = parseFloat(node.dataset.target);
    if (isNaN(target) || reduceMotion) { node.textContent = node.dataset.target; return; }
    var start = null;
    var dur = 1100;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = (target * eased).toFixed(1);
      if (p < 1) requestAnimationFrame(tick);
      else node.textContent = node.dataset.target;
    }
    requestAnimationFrame(tick);
  }



  var revealTargets = document.querySelectorAll("[data-reveal]");
  var countTargets = document.querySelectorAll(".count-up");

  function activate(elmt) {
    elmt.classList.add("revealed");
    growCharts(elmt);
    elmt.querySelectorAll(".count-up").forEach(function (n) {
      if (!n.dataset.done) { n.dataset.done = "1"; countUp(n); }
    });
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(activate);
    growCharts(document);
    countTargets.forEach(function (n) { n.textContent = n.dataset.target; });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealTargets.forEach(function (elmt) { observer.observe(elmt); });

    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var n = entry.target;
          if (!n.dataset.done) { n.dataset.done = "1"; countUp(n); }
          countObserver.unobserve(n);
        }
      });
    }, { threshold: 0.4 });
    countTargets.forEach(function (n) { countObserver.observe(n); });
  }



  var copyBtn = document.getElementById("copy-bibtex");
  var bibtex = document.getElementById("bibtex-text");
  if (copyBtn && bibtex) {
    copyBtn.addEventListener("click", function () {
      var done = function () {
        copyBtn.textContent = "Copied ✓";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1800);
      };
      var fallback = function () {
        var range = document.createRange();
        range.selectNodeContents(bibtex);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand("copy");
        sel.removeAllRanges();
        done();
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(bibtex.textContent).then(done).catch(fallback);
      } else {
        fallback();
      }
    });
  }



  var year = document.getElementById("year");
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();

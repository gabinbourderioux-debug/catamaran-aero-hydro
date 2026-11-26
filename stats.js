/* Compteur de visites GoatCounter (sans cookie).
   Pour l'activer : créer un compte sur https://www.goatcounter.com puis
   remplir l'URL ci-dessous, ex. "https://mon-site.goatcounter.com/count". */
(function () {
  "use strict";
  var URL_COMPTE = "";
  if (!URL_COMPTE) return;
  try {
    if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;
  } catch (e) {}
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", URL_COMPTE);
  document.head.appendChild(s);
})();

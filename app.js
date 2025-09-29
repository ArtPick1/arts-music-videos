(function(){
  "use strict";

  function ensureArray(x){ return Array.isArray(x) ? x : []; }
  var list = ensureArray(window.videos);

  var app = document.getElementById("app");
  if (!app) return;

  if (list.length === 0) {
    var empty = document.createElement("div");
    empty.className = "card";
    empty.textContent = "No videos yet.";
    app.appendChild(empty);
    return;
  }

  list.forEach(function(v){
    var card = document.createElement("article");
    card.className = "card";

    var h2 = document.createElement("h2");
    h2.textContent = v.title || "Untitled";
    card.appendChild(h2);

    var meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = v.url || "";
    card.appendChild(meta);

    if (v.url) {
      // Convert YouTube short/long URL to embed
      var url = String(v.url);
      var videoId = url.split("v=")[1] || url.split("/").pop();
      if (videoId && videoId.indexOf("&") > -1) videoId = videoId.split("&")[0];

      var player = document.createElement("div");
      player.className = "player";
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + videoId;
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      player.appendChild(iframe);
      card.appendChild(player);
    }

    var desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = v.description || ""; // textContent preserves exactly; CSS handles wrapping
    card.appendChild(desc);

    app.appendChild(card);
  });
})();
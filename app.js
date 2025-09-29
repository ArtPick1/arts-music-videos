(function(){
  "use strict";
  var videos = Array.isArray(window.videos) ? window.videos : [];
  var app = document.getElementById("app");
  if (!app) return;
  if (!videos.length) { app.textContent = "No videos yet."; return; }

  videos.forEach(function(v){
    var card = document.createElement("article");
    card.className = "card";

    var h2 = document.createElement("h2");
    h2.textContent = v.title;
    card.appendChild(h2);

    if (v.url) {
      var player = document.createElement("div");
      player.className = "player";
      var iframe = document.createElement("iframe");
      var id = v.url.includes("v=") ? v.url.split("v=")[1].split("&")[0] : v.url.split("/").pop();
      iframe.src = "https://www.youtube.com/embed/" + id;
      iframe.allowFullscreen = true;
      iframe.frameBorder = "0";
      player.appendChild(iframe);
      card.appendChild(player);
    }

    var desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = v.description.replace(/\\n/g, "\n").replace(/\n/g, "\n");
    card.appendChild(desc);

    app.appendChild(card);
  });
})();
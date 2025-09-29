(function () {
  "use strict";

  var videos = Array.isArray(window.videos) ? window.videos.slice() : [];
  var app = document.getElementById("app");
  if (!app) return;

  if (!videos.length) {
    var empty = document.createElement("div");
    empty.className = "card";
    empty.textContent = "No videos yet (window.videos is empty).";
    app.appendChild(empty);
    return;
  }

  // Build layout: main + sidebar
  var main = document.createElement("section");
  main.id = "main";
  var aside = document.createElement("aside");
  aside.id = "sidebar";
  aside.setAttribute("aria-label", "Previous songs");
  app.appendChild(main);
  app.appendChild(aside);

  function ytId(url) {
    var u = String(url || "");
    if (u.includes("watch?v=")) {
      var s = u.split("v=")[1];
      return s ? s.split("&")[0] : "";
    }
    var tail = u.split("/").pop();
    return (tail || "").split("?")[0];
  }

  function renderMain(idx) {
    var v = videos[idx];
    main.innerHTML = "";

    var card = document.createElement("article");
    card.className = "card";

    var h2 = document.createElement("h2");
    h2.textContent = v.title || "Untitled";
    card.appendChild(h2);

    if (v.url) {
      var player = document.createElement("div");
      player.className = "player";
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + ytId(v.url);
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      player.appendChild(iframe);
      card.appendChild(player);
    }

    var desc = document.createElement("div");
    desc.className = "desc";
    // With template literals used in videos.js, descriptions already contain real newlines.
    // textContent + CSS pre-wrap preserves them.
    desc.textContent = v.description || "";
    card.appendChild(desc);

    main.appendChild(card);
  }

  function renderSidebar(selectedIdx) {
    aside.innerHTML = "";
    var wrap = document.createElement("div");
    wrap.className = "sidebar-wrap sticky";

    var heading = document.createElement("h3");
    heading.textContent = "Previous songs";
    wrap.appendChild(heading);

    var list = document.createElement("ul");
    list.className = "song-list";

    videos.forEach(function (v, idx) {
      if (idx === selectedIdx) return;
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "song-link" + (idx === selectedIdx ? " active" : "");
      btn.textContent = v.title || "Untitled";
      btn.onclick = function () {
        renderMain(idx);
        renderSidebar(idx);
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      li.appendChild(btn);
      list.appendChild(li);
    });

    wrap.appendChild(list);
    aside.appendChild(wrap);
  }

  // Default: show the first item (Alive in Christ) in main
  var initialIndex = 0;
  renderMain(initialIndex);
  renderSidebar(initialIndex);
})();
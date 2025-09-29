(function () {
  "use strict";

  // Get videos from either window.videos or a global `videos`
  var data = (Array.isArray(window.videos) && window.videos) ||
             (typeof window.videos === "object" && Array.isArray(window.videos)) ? window.videos :
             (Array.isArray(window.videos) ? window.videos : []);
  if (!data.length && typeof window !== "undefined") {
    try {
      // some sites define a global `videos` var instead of window.videos
      /* eslint-disable no-undef */
      if (typeof videos !== "undefined" && Array.isArray(videos)) data = videos;
      /* eslint-enable no-undef */
    } catch (e) {}
  }
  if (!Array.isArray(data)) data = [];

  var app = document.getElementById("app");
  if (!app) return;

  function ensureLayout() {
    // If the container already has main/aside, reuse them; otherwise build.
    var main = document.getElementById("main");
    var aside = document.getElementById("sidebar");
    if (!main || !aside) {
      app.innerHTML = "";
      main = document.createElement("section");
      main.id = "main";
      aside = document.createElement("aside");
      aside.id = "sidebar";
      aside.setAttribute("aria-label", "Previous songs");
      app.appendChild(main);
      app.appendChild(aside);
    }
    return { main: main, aside: aside };
  }

  function ytId(url) {
    var u = String(url || "");
    if (!u) return "";
    if (u.indexOf("watch?v=") > -1) {
      var s = u.split("v=")[1] || "";
      return s.split("&")[0];
    }
    var tail = u.split("/").pop() || "";
    return tail.split("?")[0];
  }

  function normalizeDescription(desc) {
    if (desc == null) return "";
    var s = String(desc);
    // If literal "\n" sequences are present and there are no actual newlines,
    // convert them to real newlines.
    if (s.indexOf("\\n") > -1 && s.indexOf("\n") === -1) {
      s = s.replace(/\\n/g, "\n");
    }
    // If it's already real newlines (template literal), leave as-is.
    return s;
  }

  var ICON_SVG = (function(){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.style.width = "16px";
    svg.style.height = "16px";
    svg.style.marginRight = "0.4rem";
    svg.style.opacity = "0.95";

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "currentColor");
    circle.setAttribute("opacity", "0.18");
    svg.appendChild(circle);

    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M10 8l6 4-6 4z");
    path.setAttribute("fill", "currentColor");
    svg.appendChild(path);

    return svg;
  })();

  function renderMain(mainEl, item) {
    mainEl.innerHTML = "";

    var card = document.createElement("article");
    card.className = "card";

    var h2 = document.createElement("h2");
    h2.textContent = item.title || "Untitled";
    card.appendChild(h2);

    if (item.url) {
      var player = document.createElement("div");
      player.className = "player";
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + ytId(item.url);
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      player.appendChild(iframe);
      card.appendChild(player);
    }

    var desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = normalizeDescription(item.description);
    card.appendChild(desc);

    mainEl.appendChild(card);
  }

  function renderSidebar(asideEl, list, selectedIdx, onSelect) {
    asideEl.innerHTML = "";
    var wrap = document.createElement("div");
    wrap.className = "sidebar-wrap sticky";

    var heading = document.createElement("h3");
    heading.textContent = "Previous songs";
    wrap.appendChild(heading);

    var ul = document.createElement("ul");
    ul.className = "song-list";

    list.forEach(function(v, idx){
      if (idx === selectedIdx) return;
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "song-link";
      // add icon
      var icon = ICON_SVG.cloneNode(true);
      btn.appendChild(icon);
      // text
      btn.appendChild(document.createTextNode(v.title || "Untitled"));
      btn.onclick = function(){
        onSelect(idx);
        // visual feedback
        var active = asideEl.querySelector(".song-link.active");
        if (active) active.classList.remove("active");
        btn.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      li.appendChild(btn);
      ul.appendChild(li);
    });

    wrap.appendChild(ul);
    asideEl.appendChild(wrap);
  }

  function renderAll(selectedIdx) {
    var layout = ensureLayout();
    var main = layout.main;
    var aside = layout.aside;
    if (!data.length) {
      main.innerHTML = "";
      aside.innerHTML = "";
      var empty = document.createElement("div");
      empty.className = "card";
      empty.textContent = "No videos yet.";
      main.appendChild(empty);
      return;
    }
    renderMain(main, data[selectedIdx]);
    renderSidebar(aside, data, selectedIdx, function(nextIdx){
      renderMain(main, data[nextIdx]);
      renderSidebar(aside, data, nextIdx, arguments.callee);
    });
  }

  // initial render
  renderAll(0);

  // Optional: if something else updates window.videos, re-render automatically
  window.addEventListener("videosUpdated", function(){
    var src = Array.isArray(window.videos) ? window.videos : data;
    if (Array.isArray(src) && src.length) {
      data = src;
      renderAll(0);
    }
  });
})();
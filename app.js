(function () {
  "use strict";

  function getData() {
    if (Array.isArray(window.videos)) return window.videos;
    try { if (typeof videos !== "undefined" && Array.isArray(videos)) return videos; } catch (e) {}
    return [];
  }

  function ensureContainers() {
    var app = document.getElementById("app");
    if (!app) {
      app = document.createElement("main");
      app.id = "app";
      document.body.appendChild(app);
    }
    // Build/clear layout
    app.innerHTML = "";
    var main = document.createElement("section"); main.id = "main";
    var aside = document.createElement("aside"); aside.id = "sidebar"; aside.setAttribute("aria-label","Previous songs");
    app.appendChild(main); app.appendChild(aside);
    return {app: app, main: main, aside: aside};
  }

  function ytId(url) {
    var u = String(url || "");
    if (!u) return "";
    if (u.indexOf("watch?v=") > -1) { var s = u.split("v=")[1] || ""; return s.split("&")[0]; }
    var tail = u.split("/").pop() || ""; return tail.split("?")[0];
  }

  function normalize(desc) {
    if (desc == null) return "";
    var s = String(desc);
    // Convert literal \n sequences to real newlines
    if (s.indexOf("\\n") > -1) s = s.replace(/\\n/g, "\n");
    return s;
  }

  function iconNode() {
    // SVG + text fallback to guarantee visibility
    var wrap = document.createElement("span");
    wrap.style.display = "inline-flex";
    wrap.style.alignItems = "center";
    wrap.style.gap = "0.4rem";

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.style.width = "16px";
    svg.style.height = "16px";
    svg.style.opacity = "0.95";
    var c = document.createElementNS(svg.namespaceURI, "circle");
    c.setAttribute("cx","12"); c.setAttribute("cy","12"); c.setAttribute("r","10"); c.setAttribute("fill","currentColor"); c.setAttribute("opacity","0.18");
    var p = document.createElementNS(svg.namespaceURI, "path");
    p.setAttribute("d","M10 8l6 4-6 4z"); p.setAttribute("fill","currentColor");
    svg.appendChild(c); svg.appendChild(p);

    var fallback = document.createElement("span");
    fallback.textContent = "▶︎";
    fallback.style.opacity = "0.95";

    wrap.appendChild(svg);
    wrap.appendChild(fallback);
    return wrap;
  }

  function renderMain(host, item) {
    host.innerHTML = "";
    var card = document.createElement("article"); card.className = "card";

    var h2 = document.createElement("h2"); h2.textContent = item.title || "Untitled";
    card.appendChild(h2);

    if (item.url) {
      var player = document.createElement("div"); player.className = "player";
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + ytId(item.url);
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      player.appendChild(iframe);
      card.appendChild(player);
    }

    var desc = document.createElement("div"); desc.className = "desc";
    desc.style.whiteSpace = "pre-wrap"; // preserve newlines without needing extra CSS
    desc.textContent = normalize(item.description);
    card.appendChild(desc);

    host.appendChild(card);
  }

  function renderSidebar(host, items, selectedIdx, onPick) {
    host.innerHTML = "";
    var wrap = document.createElement("div"); wrap.className = "sidebar-wrap";
    var h3 = document.createElement("h3"); h3.textContent = "Previous songs";
    wrap.appendChild(h3);

    var ul = document.createElement("ul"); ul.style.listStyle = "none"; ul.style.padding = "0"; ul.style.margin = "0";

    items.forEach(function (v, idx) {
      if (idx === selectedIdx) return;
      var li = document.createElement("li"); li.style.marginBottom = "0.5rem";
      var btn = document.createElement("button"); btn.type = "button";
      btn.className = "song-link";
      btn.style.display = "inline-flex";
      btn.style.alignItems = "center";
      btn.style.gap = "0.4rem";
      btn.style.width = "100%";
      btn.style.textAlign = "left";

      // icon
      var ic = iconNode();
      btn.appendChild(ic);

      // text
      btn.appendChild(document.createTextNode(v.title || "Untitled"));

      btn.onclick = function () {
        onPick(idx);
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      li.appendChild(btn);
      ul.appendChild(li);
    });

    wrap.appendChild(ul);
    host.appendChild(wrap);
  }

  function renderAll(selectedIdx) {
    var data = getData();
    var layout = ensureContainers();
    if (!data.length) {
      var empty = document.createElement("div"); empty.textContent = "No videos yet.";
      layout.main.innerHTML = ""; layout.main.appendChild(empty);
      layout.aside.innerHTML = "";
      return;
    }
    renderMain(layout.main, data[selectedIdx]);
    renderSidebar(layout.aside, data, selectedIdx, function (nextIdx) {
      renderMain(layout.main, getData()[nextIdx]);
      renderSidebar(layout.aside, getData(), nextIdx, arguments.callee);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(){ renderAll(0); });
  } else {
    renderAll(0);
  }
})();
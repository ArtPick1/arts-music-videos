(function(){
  "use strict";

  function readVideos(){
    if (Array.isArray(window.videos)) return window.videos;
    try { if (typeof videos !== "undefined" && Array.isArray(videos)) return videos; } catch(e){}
    return [];
  }

  function el(name, props){
    var n = document.createElement(name);
    if (props) for (var k in props){ if (k === "text") n.textContent = props[k]; else n.setAttribute(k, props[k]); }
    return n;
  }

  function ensureContainer(){
    var app = document.getElementById("app");
    if (!app){ app = el("main"); app.id = "app"; document.body.appendChild(app); }
    app.innerHTML = "";
    var main = el("section"); main.id = "main";
    var aside = el("aside"); aside.id = "sidebar"; aside.setAttribute("aria-label","Previous songs");
    app.appendChild(main); app.appendChild(aside);

    // Minimal style so icons line up even without external CSS
    var style = document.getElementById("render-inline-style");
    if (!style){
      style = el("style"); style.id = "render-inline-style";
      style.textContent = [
        "#app{display:grid;gap:1.1rem;max-width:1100px;margin:1.25rem auto;padding:0 1rem}",
        "@media(min-width:900px){#app{grid-template-columns:1fr 320px;align-items:start}}",
        ".card{background:#111827;border:1px solid #1f2937;border-radius:14px;padding:1rem;color:#e5e7eb}",
        ".card h2{margin:0 0 .5rem 0;color:#60a5fa;font-size:1.1rem}",
        ".player{position:relative;padding-top:56.25%;border-radius:10px;overflow:hidden;margin:.75rem 0 1rem;border:1px solid #1f2937}",
        ".player iframe{position:absolute;inset:0;width:100%;height:100%}",
        ".desc{white-space:pre-wrap;line-height:1.55}",
        "#sidebar .wrap{position:sticky;top:1rem;background:#111827;border:1px solid #1f2937;border-radius:12px;padding:.75rem;color:#e5e7eb}",
        "#sidebar h3{margin:0 0 .5rem 0;font-size:1rem;opacity:.9}",
        ".song-list{list-style:none;margin:0;padding:0;display:grid;gap:.5rem}",
        ".song-link{display:inline-flex;align-items:center;gap:.4rem;width:100%;text-align:left;background:transparent;border:1px solid #1f2937;border-radius:10px;padding:.5rem .6rem;cursor:pointer;color:inherit}",
        ".song-link:hover{border-color:#374151}",
        ".icon-fallback{margin-right:.35rem;opacity:.95}"
      ].join("");
      document.head.appendChild(style);
    }

    return { main: main, aside: aside };
  }

  function ytId(url){
    var u = String(url||"");
    if (u.indexOf("watch?v=")>-1){ var s = u.split("v=")[1]||""; return s.split("&")[0]; }
    var tail = u.split("/").pop()||""; return tail.split("?")[0];
  }

  function normalize(desc){
    if (desc == null) return "";
    var s = String(desc);
    if (s.indexOf("\\n")>-1 && s.indexOf("\n")===-1){ s = s.replace(/\\n/g,"\n"); }
    return s;
  }

  function makeSvgIcon(){
    var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox","0 0 24 24");
    svg.setAttribute("aria-hidden","true");
    svg.setAttribute("focusable","false");
    svg.style.width = "16px";
    svg.style.height = "16px";
    svg.style.opacity = "0.95";
    var c = document.createElementNS(svg.namespaceURI,"circle");
    c.setAttribute("cx","12"); c.setAttribute("cy","12"); c.setAttribute("r","10");
    c.setAttribute("fill","currentColor"); c.setAttribute("opacity","0.18");
    var p = document.createElementNS(svg.namespaceURI,"path");
    p.setAttribute("d","M10 8l6 4-6 4z"); p.setAttribute("fill","currentColor");
    svg.appendChild(c); svg.appendChild(p);
    return svg;
  }

  function addIcon(node){
    // Add both SVG and a text fallback so you ALWAYS see an icon.
    var svg = makeSvgIcon();
    var fallback = document.createElement("span");
    fallback.className = "icon-fallback";
    fallback.textContent = "▶︎";
    node.appendChild(svg);
    node.appendChild(fallback);
  }

  function renderMain(host, item){
    host.innerHTML = "";
    var card = el("article"); card.className = "card";
    var h2 = el("h2"); h2.textContent = item.title || "Untitled"; card.appendChild(h2);

    if (item.url){
      var player = el("div"); player.className="player";
      var iframe = el("iframe");
      iframe.src = "https://www.youtube.com/embed/" + ytId(item.url);
      iframe.setAttribute("title","YouTube video player");
      iframe.setAttribute("frameborder","0");
      iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      iframe.allowFullscreen = true;
      player.appendChild(iframe);
      card.appendChild(player);
    }

    var desc = el("div"); desc.className = "desc"; desc.textContent = normalize(item.description);
    card.appendChild(desc);

    host.appendChild(card);
  }

  function renderSidebar(host, items, selectedIdx, onPick){
    host.innerHTML = "";
    var wrap = el("div"); wrap.className = "wrap";
    var h3 = el("h3"); h3.textContent = "Previous songs"; wrap.appendChild(h3);
    var ul = el("ul"); ul.className = "song-list";

    items.forEach(function(v, idx){
      if (idx === selectedIdx) return;
      var li = el("li");
      var btn = el("button"); btn.type = "button"; btn.className = "song-link";
      addIcon(btn);
      btn.appendChild(document.createTextNode(v.title || "Untitled"));
      btn.onclick = function(){ onPick(idx); window.scrollTo({ top: 0, behavior: "smooth" }); };
      li.appendChild(btn);
      ul.appendChild(li);
    });

    wrap.appendChild(ul);
    host.appendChild(wrap);
  }

  function render(selectedIdx){
    var data = readVideos();
    var layout = ensureContainer();
    if (!data.length){
      layout.main.innerHTML = "";
      var empty = el("div"); empty.className="card"; empty.textContent = "No videos yet.";
      layout.main.appendChild(empty);
      layout.aside.innerHTML = "";
      return;
    }
    renderMain(layout.main, data[selectedIdx]);
    renderSidebar(layout.aside, data, selectedIdx, function(next){
      renderMain(layout.main, readVideos()[next]);
      renderSidebar(layout.aside, readVideos(), next, arguments.callee);
    });
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){ render(0); });
  } else {
    render(0);
  }

  window.addEventListener("videosUpdated", function(){ render(0); });
})();
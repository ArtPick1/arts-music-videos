const videos = [
  {
    title: "Yirat Ometz \u2013 Song of Reverent Boldness",
    videoUrl: "https://www.youtube.com/embed/_m7Ko6mzxd0",
    description: "\n\ud83d\udd25 <strong>Yirat-Ometz</strong> \u2014 Hebrew for \u201cReverent Boldness\u201d \u2014 is a cry for a generation to rise in holy fear and Spirit-empowered courage.\n\n<p><em>Inspired by Malachi 2:4\u20135 and Malachi 1:8</em>, this song confronts a sobering truth:</p>\n\n<p>The modern Church has lost its fear and dread of God.<br>\nWe\u2019ve lost reverence\u2026 and we\u2019ve lost our fire.</p>\n\n<p>We offer up polluted worship.<br>\nWe withhold our best, our all.<br>\nWe lay part of ourselves on the altar \u2014 but not everything.</p>\n\n<blockquote>\u201cWhen you offer blind animals in sacrifice, is that not evil? \u2026 Present that to your governor; will he accept you or show you favor?\u201d \u2013 Malachi 1:8</blockquote>\n\n<p>We talk of grace, but forget God\u2019s holiness.<br>\nWe speak of love, but neglect surrender.</p>\n\n<p>This isn\u2019t about louder music or better performances \u2014 it\u2019s about laying our lives down in trembling obedience.</p>\n\n<blockquote>\u201cMy covenant was with him, a covenant of life and peace\u2026 a covenant of fear, and he feared Me. He stood in awe of My name.\u201d \u2013 Malachi 2:5</blockquote>\n\n<p>This is not pride shouting \u2014 it\u2019s humility burning.<br>\n<strong>\ud83d\udd25 This is Yirat-Ometz \u2014 reverent boldness.</strong>\n</p>\n"
  },
  {
    title: "Song 1",
    videoUrl: "https://www.youtube.com/embed/video1",
    description: "Description for song 1"
  },
  {
    title: "Song 2",
    videoUrl: "https://www.youtube.com/embed/video2",
    description: "Description for song 2"
  },
  {
    title: "Song 3",
    videoUrl: "https://www.youtube.com/embed/video3",
    description: "Description for song 3"
  },
  {
    title: "Song 4",
    videoUrl: "https://www.youtube.com/embed/video4",
    description: "Description for song 4"
  },
  {
    title: "Song 5",
    videoUrl: "https://www.youtube.com/embed/video5",
    description: "Description for song 5"
  },
  {
    title: "Song 6",
    videoUrl: "https://www.youtube.com/embed/video6",
    description: "Description for song 6"
  },
  {
    title: "Song 7",
    videoUrl: "https://www.youtube.com/embed/video7",
    description: "Description for song 7"
  },
  {
    title: "Song 8",
    videoUrl: "https://www.youtube.com/embed/video8",
    description: "Description for song 8"
  },
  {
    title: "Song 9",
    videoUrl: "https://www.youtube.com/embed/video9",
    description: "Description for song 9"
  },
  {
    title: "Song 10",
    videoUrl: "https://www.youtube.com/embed/video10",
    description: "Description for song 10"
  },
  {
    title: "Song 11",
    videoUrl: "https://www.youtube.com/embed/video11",
    description: "Description for song 11"
  },
  {
    title: "Song 12",
    videoUrl: "https://www.youtube.com/embed/video12",
    description: "Description for song 12"
  },
  {
    title: "Song 13",
    videoUrl: "https://www.youtube.com/embed/video13",
    description: "Description for song 13"
  },
  {
    title: "Song 14",
    videoUrl: "https://www.youtube.com/embed/video14",
    description: "Description for song 14"
  },
  {
    title: "Song 15",
    videoUrl: "https://www.youtube.com/embed/video15",
    description: "Description for song 15"
  },
  {
    title: "Song 16",
    videoUrl: "https://www.youtube.com/embed/video16",
    description: "Description for song 16"
  },
  {
    title: "Song 17",
    videoUrl: "https://www.youtube.com/embed/video17",
    description: "Description for song 17"
  },
  {
    title: "Song 18",
    videoUrl: "https://www.youtube.com/embed/video18",
    description: "Description for song 18"
  },
  {
    title: "Song 19",
    videoUrl: "https://www.youtube.com/embed/video19",
    description: "Description for song 19"
  },
  {
    title: "Song 20",
    videoUrl: "https://www.youtube.com/embed/video20",
    description: "Description for song 20"
  },
  {
    title: "Song 21",
    videoUrl: "https://www.youtube.com/embed/video21",
    description: "Description for song 21"
  },
  {
    title: "Song 22",
    videoUrl: "https://www.youtube.com/embed/video22",
    description: "Description for song 22"
  },
  {
    title: "Song 23",
    videoUrl: "https://www.youtube.com/embed/video23",
    description: "Description for song 23"
  },
  {
    title: "Song 24",
    videoUrl: "https://www.youtube.com/embed/video24",
    description: "Description for song 24"
  },
  {
    title: "Song 25",
    videoUrl: "https://www.youtube.com/embed/video25",
    description: "Description for song 25"
  },
  {
    title: "Song 26",
    videoUrl: "https://www.youtube.com/embed/video26",
    description: "Description for song 26"
  },
  {
    title: "Song 27",
    videoUrl: "https://www.youtube.com/embed/video27",
    description: "Description for song 27"
  },
  {
    title: "Song 28",
    videoUrl: "https://www.youtube.com/embed/video28",
    description: "Description for song 28"
  },
  {
    title: "Song 29",
    videoUrl: "https://www.youtube.com/embed/video29",
    description: "Description for song 29"
  },
  {
    title: "Song 30",
    videoUrl: "https://www.youtube.com/embed/video30",
    description: "Description for song 30"
  }
];


function renderVideos() {
  const container = document.getElementById("video-grid");
  videos.forEach((video, index) => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <h3>${video.title}</h3>
      <iframe src="${video.videoUrl}" allowfullscreen></iframe>
      <button class="toggle-btn" onclick="toggleDescription(${index})">Show Description</button>
      <div class="description" id="desc-${index}">${video.description}</div>
    `;

    container.appendChild(card);
  });
}

function toggleDescription(index) {
  const desc = document.getElementById(`desc-${index}`);
  const button = desc.previousElementSibling;
  const isHidden = desc.style.display === "none" || !desc.style.display;

  desc.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "Hide Description" : "Show Description";
}

renderVideos();

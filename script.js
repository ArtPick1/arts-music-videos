const videos = [
  {
    title: "Faith Unchained",
    videoUrl: "https://www.youtube.com/embed/_m7Ko6mzxd0",
    description: "<p><strong>Faith Unchained</strong> is a gritty rock/metal anthem inspired by Philippians 1:12\u201314 and Matthew 28:18\u201320. \nPaul\u2019s imprisonment became a platform for the Gospel \u2014 and we\u2019re called to live the same way: bold, unashamed, unchained.\nThis song is a wake-up call to believers in a culture of fear and complacency. The Church is not called to sit silent or just bring people to a preacher \u2014 we are commissioned to GO, to proclaim Christ, to live unbound by fear.</p>\n<p><strong>\ud83d\udd17 Key Scriptures:</strong><br>\nPhilippians 1:12\u201314<br>\nMatthew 28:18\u201320</p>"
  },
  {
    title: "Nothing Held Back",
    videoUrl: "https://www.youtube.com/embed/be5UgHGGa4g",
    description: "<p><strong>Nothing Held Back</strong> is a raw, unapologetic rock/metal anthem calling believers to full surrender to Christ...</p>"
  },
  {
    title: "Come and Grow (Rap)",
    videoUrl: "https://www.youtube.com/embed/buws9YQyytU",
    description: "<p><strong>Come and Grow (Rap)</strong> hits hard with raw bars, heavy beats, and a straight-up call to truth...</p>"
  },
  {
    title: "Are You Living a Lie?",
    videoUrl: "https://www.youtube.com/embed/-SrZNafvoio",
    description: "<p>...</p>"
  },
  {
    title: "Not Just Another Pretty Voice",
    videoUrl: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: "<p>...</p>"
  },
  {
    title: "The Temple of the Living God",
    videoUrl: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: "<p>...</p>"
  },
  {
    title: "Why Go to Church?",
    videoUrl: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: "<p>...</p>"
  },
  {
    title: "Come and Grow",
    videoUrl: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: "<p>...</p>"
  },
  {
    title: "Come and Grow Pencil Drawings Blues RB",
    videoUrl: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: "<p>...</p>"
  },
  {
    title: "Jesus and Bocephus",
    videoUrl: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: "<p>...</p>"
  },
  {
    title: "We Can\u2019t Let Go",
    videoUrl: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: "<p>...</p>"
  },
  {
    title: "Depths Of My Distress",
    videoUrl: "https://www.youtube.com/embed/Rh69t81Co9Q",
    description: "<p>...</p>"
  },
  {
    title: "His Holy Call",
    videoUrl: "https://www.youtube.com/embed/GyccPooWTrc",
    description: "<p>...</p>"
  },
  {
    title: "A New Creation (Behold\u2014the New Has Come)",
    videoUrl: "https://www.youtube.com/embed/BZKlUIWSv4E",
    description: "<p>...</p>"
  },
  {
    title: "Are You Truly Born Again Rock",
    videoUrl: "https://www.youtube.com/embed/yK4YxAU5e_E",
    description: "<p>...</p>"
  },
  {
    title: "Are You Truly Born Again Metal",
    videoUrl: "https://www.youtube.com/embed/2DjXCaqsNpk",
    description: "<p>...</p>"
  },
  {
    title: "Sing Hallelujah",
    videoUrl: "https://www.youtube.com/embed/HZYPymgsTNU",
    description: "<p>...</p>"
  },
  {
    title: "Why Do We Go After Worthless Idols",
    videoUrl: "https://www.youtube.com/embed/6DSL94G6Tko",
    description: "<p>...</p>"
  },
  {
    title: "This Ain\u2019t for Awards\u2014It\u2019s for War",
    videoUrl: "https://www.youtube.com/embed/QNN2oaTuWMM",
    description: "<p>...</p>"
  },
  {
    title: "Yet I Will Rejoice",
    videoUrl: "https://www.youtube.com/embed/NfZtq1BN5LU",
    description: "<p>...</p>"
  },
  {
    title: "Does God Revolve Around You?",
    videoUrl: "https://www.youtube.com/embed/Q4_JYGVL8Wo",
    description: "<p>...</p>"
  },
  {
    title: "Dust to Dust",
    videoUrl: "https://www.youtube.com/embed/goYC-AN2Rzs",
    description: "<p>...</p>"
  },
  {
    title: "Disturb the City (Version 2)",
    videoUrl: "https://www.youtube.com/embed/jGJYsMzGUls",
    description: "<p>...</p>"
  },
  {
    title: "Disturb the City (Original)",
    videoUrl: "https://www.youtube.com/embed/QLz4KNQmrAo",
    description: "<p>...</p>"
  },
  {
    title: "Disciple or Fan",
    videoUrl: "https://www.youtube.com/embed/FulLRuDHai0",
    description: "<p>...</p>"
  },
  {
    title: "From Where I Stand",
    videoUrl: "https://www.youtube.com/embed/eOtEThVwtTs",
    description: "<p>...</p>"
  },
  {
    title: "Accident or Design",
    videoUrl: "https://www.youtube.com/embed/kJU5JDUgItY",
    description: "<p>...</p>"
  },
  {
    title: "When Minds Meet Machine",
    videoUrl: "https://www.youtube.com/embed/Q7cg_SLXDm4",
    description: "<p>...</p>"
  },
  {
    title: "Strength in Surrender",
    videoUrl: "https://www.youtube.com/embed/ZHfX1J60YcA",
    description: "<p>...</p>"
  },
  {
    title: "The Cry Unheard",
    videoUrl: "https://www.youtube.com/embed/EAoTEsSZGVE",
    description: "<p>...</p>"
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

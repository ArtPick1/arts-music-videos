const videos = [
  {
    title: "Nothing Held Back",
    videoUrl: "https://www.youtube.com/embed/be5UgHGGa4g",
    description: `<p><strong>Nothing Held Back</strong> is a raw, unapologetic rock/metal anthem calling believers to full surrender to Christ. Inspired by passages like Malachi 1, Acts 5, and Psalm 51, it challenges the halfhearted offerings we bring before the King of kings and calls us to lay everything at His feet.</p>
<p>With gritty guitar riffs, heavy drums, and haunting breakdowns, this song confronts the danger of holding back — whether in worship, obedience, or sacrifice. It's a cry for holiness, repentance, and letting Christ reign over every part of our lives.</p>`
  },
  {
    title: "Are You Living a Lie?",
    videoUrl: "https://www.youtube.com/embed/-SrZNafvoio",
    description: `<p><strong>Are You Living a Lie?</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Not Just Another Pretty Voice",
    videoUrl: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: `<p><strong>Not Just Another Pretty Voice</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "The Temple of the Living God",
    videoUrl: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: `<p><strong>The Temple of the Living God</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Why Go to Church?",
    videoUrl: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: `<p><strong>Why Go to Church?</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Come and Grow",
    videoUrl: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: `<p><strong>Come and Grow</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Come and Grow Pencil Drawings Blues RB",
    videoUrl: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: `<p><strong>Come and Grow Pencil Drawings Blues RB</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Jesus and Bocephus",
    videoUrl: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: `<p><strong>Jesus and Bocephus</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "We Can’t Let Go",
    videoUrl: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: `<p><strong>We Can’t Let Go</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Depths Of My Distress",
    videoUrl: "https://www.youtube.com/embed/Rh69t81Co9Q",
    description: `<p><strong>Depths Of My Distress</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "His Holy Call",
    videoUrl: "https://www.youtube.com/embed/GyccPooWTrc",
    description: `<p><strong>His Holy Call</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    videoUrl: "https://www.youtube.com/embed/BZKlUIWSv4E",
    description: `<p><strong>A New Creation (Behold—the New Has Come)</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Are You Truly Born Again Rock.",
    videoUrl: "https://www.youtube.com/embed/yK4YxAU5e_E",
    description: `<p><strong>Are You Truly Born Again Rock.</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Are You Truly Born Again  Metal",
    videoUrl: "https://www.youtube.com/embed/2DjXCaqsNpk",
    description: `<p><strong>Are You Truly Born Again  Metal</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Sing Hallelujah",
    videoUrl: "https://www.youtube.com/embed/HZYPymgsTNU",
    description: `<p><strong>Sing Hallelujah</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Why Do We Go After Worthless Idols",
    videoUrl: "https://www.youtube.com/embed/6DSL94G6Tko",
    description: `<p><strong>Why Do We Go After Worthless Idols</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    videoUrl: "https://www.youtube.com/embed/QNN2oaTuWMM",
    description: `<p><strong>This Ain’t for Awards—It’s for War</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Yet I Will Rejoice",
    videoUrl: "https://www.youtube.com/embed/NfZtq1BN5LU",
    description: `<p><strong>Yet I Will Rejoice</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Does God Revolve Around You?",
    videoUrl: "https://www.youtube.com/embed/Q4_JYGVL8Wo",
    description: `<p><strong>Does God Revolve Around You?</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Dust to Dust",
    videoUrl: "https://www.youtube.com/embed/goYC-AN2Rzs",
    description: `<p><strong>Dust to Dust</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Disturb the City (Version 2)",
    videoUrl: "https://www.youtube.com/embed/jGJYsMzGUls",
    description: `<p><strong>Disturb the City (Version 2)</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Disturb the City (Original)",
    videoUrl: "https://www.youtube.com/embed/QLz4KNQmrAo",
    description: `<p><strong>Disturb the City (Original)</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Disciple or Fan",
    videoUrl: "https://www.youtube.com/embed/FulLRuDHai0",
    description: `<p><strong>Disciple or Fan</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "From Where I Stand",
    videoUrl: "https://www.youtube.com/embed/eOtEThVwtTs",
    description: `<p><strong>From Where I Stand</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Accident or Design",
    videoUrl: "https://www.youtube.com/embed/kJU5JDUgItY",
    description: `<p><strong>Accident or Design</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "When Minds Meet Machine",
    videoUrl: "https://www.youtube.com/embed/Q7cg_SLXDm4",
    description: `<p><strong>When Minds Meet Machine</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "Strength in Surrender",
    videoUrl: "https://www.youtube.com/embed/ZHfX1J60YcA",
    description: `<p><strong>Strength in Surrender</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
  {
    title: "The Cry Unheard",
    videoUrl: "https://www.youtube.com/embed/EAoTEsSZGVE",
    description: `<p><strong>The Cry Unheard</strong> — full description placeholder. Ready to swap in final version.</p>`
  },
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

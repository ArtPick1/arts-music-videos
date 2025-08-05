const videos = [
  {
    title: "Are You Living a Lie?",
    videoUrl: "https://www.youtube.com/embed/-SrZNafvoio",
    description: `<p><strong>Are You Living a Lie?</strong> explores themes of self-deception, hollow desires, and the need for transformation through Christ.</p><p>The song cuts deep into the heart of cultural Christianity and challenges listeners to examine their lives in light of truth — not convenience. With a gritty, introspective tone, it calls for genuine surrender, not surface-level faith.</p>`
  },
  {
    title: "Not Just Another Pretty Voice",
    videoUrl: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: `<p><strong>Not Just Another Pretty Voice</strong> is a bold declaration that worship isn’t about performance — it’s about truth, surrender, and spiritual warfare.</p><p>Inspired by Psalm 100 and the concept of <em>teruah</em> (a shout of war and worship), this song encourages every believer — no matter how they sound — to praise the Lord with all their might.</p>`
  },
  {
    title: "The Temple of the Living God",
    videoUrl: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: `<p><strong>The Temple of the Living God</strong> is a prophetic cry drawn from 2 Corinthians 6:14–7:1.</p><p>The song challenges the Church to live set apart, rejecting compromise and worldly blending. It calls us to reclaim holiness and live as God’s dwelling place — with reverence, clarity, and courage in an age of spiritual fog.</p>`
  },
  {
    title: "Why Go to Church?",
    videoUrl: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: `<p><strong>Why Go to Church?</strong> confronts the modern drift toward isolated Christianity.</p><p>Rooted in Hebrews 10:25, it reminds believers that the Church — though imperfect — is God’s design for growth, encouragement, correction, and spiritual warfare. The song compassionately but clearly calls us back to biblical community.</p>`
  },
  {
    title: "Come and Grow",
    videoUrl: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: `<p><strong>Come and Grow</strong> is a heartfelt invitation to healing and spiritual growth at Agape Life Fellowship.</p><p>The song highlights the importance of solid teaching, real community, and recovery from past church wounds. With a tone that balances welcome and conviction, it calls the weary and searching to come and be part of something alive and grounded.</p>`
  },
  {
    title: "Come and Grow (Pencil Drawings Blues RB)",
    videoUrl: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: `<p>This version of <strong>Come and Grow</strong> features black and white pencil-style illustrations and a bluesy rhythm and blues vibe.</p><p>It brings a more reflective and raw visual tone to the same message: come, heal, and grow in a Christ-centered fellowship. Ideal for viewers looking for a more stripped-down and soulful presentation of the same truth.</p>`
  },
  {
    title: "Jesus and Bocephus",
    videoUrl: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: `<p><strong>Jesus and Bocephus</strong> is a gritty, blues-rock response to cultural Christianity, inspired by Kid Rock's original but redirected toward repentance.</p><p>The song contrasts patriotic religiosity with true discipleship, asking listeners to move beyond slogans and face the real Jesus — the crucified Savior who calls for surrender, not just admiration.</p>`
  },
  {
    title: "We Can’t Let Go",
    videoUrl: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: `<p><strong>We Can’t Let Go</strong> is a cry of faithfulness in the face of pressure to compromise truth.</p><p>It's about standing firm in the gospel, holding tight to conviction even when it costs something. With a passionate tone and lyrical depth, it speaks to a Church that must remember who it is and Whose it is.</p>`
  },
  {
    title: "Depths Of My Distress",
    videoUrl: "https://www.youtube.com/embed/Rh69t81Co9Q",
    description: `<p><strong>Depths Of My Distress</strong> is a raw, emotional cry from the darkest places of spiritual pain.</p><p>Inspired by Jonah 2 and Psalm 88, this lament gives voice to believers who feel overwhelmed or abandoned — yet still cling to God in hope. A reminder that even in the pit, our cries are heard.</p>`
  }
  // Remaining entries omitted for brevity in this cell (will add next)
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

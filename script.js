const videos = [
  {
    title: "Are You Living a Lie?",
    videoUrl: "https://www.youtube.com/embed/-SrZNafvoio",
    description: `
      <p><strong>Are You Living a Lie?</strong> explores themes of self-deception, hollow desires, and the need for transformation through Christ.</p>
      <p>The song cuts deep into the heart of cultural Christianity and challenges listeners to examine their lives in light of truth — not convenience. With a gritty, introspective tone, it calls for genuine surrender, not surface-level faith.</p>
    `
  },
  {
    title: "Not Just Another Pretty Voice",
    videoUrl: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: `
      <p><strong>Not Just Another Pretty Voice</strong> is a bold declaration that worship isn’t about performance — it’s about truth, surrender, and spiritual warfare.</p>
      <p>Inspired by Psalm 100 and the concept of <em>teruah</em> (a shout of war and worship), this song encourages every believer — no matter how they sound — to praise the Lord with all their might.</p>
    `
  },
  {
    title: "The Temple of the Living God",
    videoUrl: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: `
      <p><strong>The Temple of the Living God</strong> is a prophetic cry drawn from 2 Corinthians 6:14–7:1.</p>
      <p>The song challenges the Church to live set apart, rejecting compromise and worldly blending. It calls us to reclaim holiness and live as God’s dwelling place — with reverence, clarity, and courage in an age of spiritual fog.</p>
    `
  },
  {
    title: "Why Go to Church?",
    videoUrl: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: `
      <p><strong>Why Go to Church?</strong> confronts the modern drift toward isolated Christianity.</p>
      <p>Rooted in Hebrews 10:25, it reminds believers that the Church — though imperfect — is God’s design for growth, encouragement, correction, and spiritual warfare. The song compassionately but clearly calls us back to biblical community.</p>
    `
  },
  // Remaining 23 videos will be added here — each with title, videoUrl, and description.
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

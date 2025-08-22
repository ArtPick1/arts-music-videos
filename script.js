const videos = [
{
    title: 'Faith Unchained',
    videoUrl: 'https://www.youtube.com/embed/_m7Ko6mzxd0',
    description: '<p><strong>Faith Unchained</strong> is a gritty rock/metal anthem inspired by Philippians 1:12–14 and Matthew 28:18–20. \nPaul’s imprisonment became a platform for the Gospel — and we’re called to live the same way: bold, unashamed, unchained.\nThis song is a wake-up call to believers in a culture of fear and complacency. The Church is not called to sit silent or just bring people to a preacher — we are commissioned to GO, to proclaim Christ, to live unbound by fear.</p>\n<p><strong>🔗 Key Scriptures:</strong><br>\nPhilippians 1:12–14<br>\nMatthew 28:18–20</p>'
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

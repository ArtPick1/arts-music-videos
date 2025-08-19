const videos = [
{
    title: "Faith Unchained",
    videoUrl: "https://www.youtube.com/embed/_m7Ko6mzxd0",
    description: `<p><strong>Faith Unchained</strong> is a gritty rock/metal anthem inspired by Philippians 1:12–14 and Matthew 28:18–20.
Paul’s imprisonment became a platform for the Gospel — and we’re called to live the same way: bold, unashamed, unchained.</p>
<p>This song is a wake-up call to believers in a culture of fear and complacency. The Church is not called to sit silent or just bring people to a preacher — we are commissioned to GO, to proclaim Christ, to live unbound by fear.</p>
<p><strong>🔗 Key Scriptures:</strong><br>
Philippians 1:12–14<br>
Matthew 28:18–20</p>`
  }
{
    title: "Song 1",
    videoUrl: "https://www.youtube.com/embed/example1",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 2",
    videoUrl: "https://www.youtube.com/embed/example2",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 3",
    videoUrl: "https://www.youtube.com/embed/example3",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 4",
    videoUrl: "https://www.youtube.com/embed/example4",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 5",
    videoUrl: "https://www.youtube.com/embed/example5",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 6",
    videoUrl: "https://www.youtube.com/embed/example6",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 7",
    videoUrl: "https://www.youtube.com/embed/example7",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 8",
    videoUrl: "https://www.youtube.com/embed/example8",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 9",
    videoUrl: "https://www.youtube.com/embed/example9",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 10",
    videoUrl: "https://www.youtube.com/embed/example10",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 11",
    videoUrl: "https://www.youtube.com/embed/example11",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 12",
    videoUrl: "https://www.youtube.com/embed/example12",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 13",
    videoUrl: "https://www.youtube.com/embed/example13",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 14",
    videoUrl: "https://www.youtube.com/embed/example14",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 15",
    videoUrl: "https://www.youtube.com/embed/example15",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 16",
    videoUrl: "https://www.youtube.com/embed/example16",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 17",
    videoUrl: "https://www.youtube.com/embed/example17",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 18",
    videoUrl: "https://www.youtube.com/embed/example18",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 19",
    videoUrl: "https://www.youtube.com/embed/example19",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 20",
    videoUrl: "https://www.youtube.com/embed/example20",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 21",
    videoUrl: "https://www.youtube.com/embed/example21",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 22",
    videoUrl: "https://www.youtube.com/embed/example22",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 23",
    videoUrl: "https://www.youtube.com/embed/example23",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 24",
    videoUrl: "https://www.youtube.com/embed/example24",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 25",
    videoUrl: "https://www.youtube.com/embed/example25",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 26",
    videoUrl: "https://www.youtube.com/embed/example26",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 27",
    videoUrl: "https://www.youtube.com/embed/example27",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 28",
    videoUrl: "https://www.youtube.com/embed/example28",
    description: `Full description placeholder. Ready to swap in final version.`
  }
{
    title: "Song 29",
    videoUrl: "https://www.youtube.com/embed/example29",
    description: `Full description placeholder. Ready to swap in final version.`
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
const videos = [
  {
    title: "Song 1",
    videoUrl: "https://www.youtube.com/embed/example1",
    description: `<p><strong>Song 1</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 2",
    videoUrl: "https://www.youtube.com/embed/example2",
    description: `<p><strong>Song 2</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 3",
    videoUrl: "https://www.youtube.com/embed/example3",
    description: `<p><strong>Song 3</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 4",
    videoUrl: "https://www.youtube.com/embed/example4",
    description: `<p><strong>Song 4</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 5",
    videoUrl: "https://www.youtube.com/embed/example5",
    description: `<p><strong>Song 5</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 6",
    videoUrl: "https://www.youtube.com/embed/example6",
    description: `<p><strong>Song 6</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 7",
    videoUrl: "https://www.youtube.com/embed/example7",
    description: `<p><strong>Song 7</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 8",
    videoUrl: "https://www.youtube.com/embed/example8",
    description: `<p><strong>Song 8</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 9",
    videoUrl: "https://www.youtube.com/embed/example9",
    description: `<p><strong>Song 9</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 10",
    videoUrl: "https://www.youtube.com/embed/example10",
    description: `<p><strong>Song 10</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 11",
    videoUrl: "https://www.youtube.com/embed/example11",
    description: `<p><strong>Song 11</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 12",
    videoUrl: "https://www.youtube.com/embed/example12",
    description: `<p><strong>Song 12</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 13",
    videoUrl: "https://www.youtube.com/embed/example13",
    description: `<p><strong>Song 13</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 14",
    videoUrl: "https://www.youtube.com/embed/example14",
    description: `<p><strong>Song 14</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 15",
    videoUrl: "https://www.youtube.com/embed/example15",
    description: `<p><strong>Song 15</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 16",
    videoUrl: "https://www.youtube.com/embed/example16",
    description: `<p><strong>Song 16</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 17",
    videoUrl: "https://www.youtube.com/embed/example17",
    description: `<p><strong>Song 17</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 18",
    videoUrl: "https://www.youtube.com/embed/example18",
    description: `<p><strong>Song 18</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 19",
    videoUrl: "https://www.youtube.com/embed/example19",
    description: `<p><strong>Song 19</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 20",
    videoUrl: "https://www.youtube.com/embed/example20",
    description: `<p><strong>Song 20</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 21",
    videoUrl: "https://www.youtube.com/embed/example21",
    description: `<p><strong>Song 21</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 22",
    videoUrl: "https://www.youtube.com/embed/example22",
    description: `<p><strong>Song 22</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 23",
    videoUrl: "https://www.youtube.com/embed/example23",
    description: `<p><strong>Song 23</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 24",
    videoUrl: "https://www.youtube.com/embed/example24",
    description: `<p><strong>Song 24</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 25",
    videoUrl: "https://www.youtube.com/embed/example25",
    description: `<p><strong>Song 25</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 26",
    videoUrl: "https://www.youtube.com/embed/example26",
    description: `<p><strong>Song 26</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
  },
  {
    title: "Song 27",
    videoUrl: "https://www.youtube.com/embed/example27",
    description: `<p><strong>Song 27</strong> full description goes here. This is a placeholder for real lyrics and commentary.</p>`
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

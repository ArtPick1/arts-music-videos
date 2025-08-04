const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/-SrZNafvoio",
    description: "Confronts self-deception and surface-level faith. Inspired by 2 Corinthians 13:5.",
    expanded: "\u201cAre You Living a Lie\u201d presents a musically driven, lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ. While its delivery feels intimate and declarative, it is sung throughout with expressive phrasing\u2014blending poetic lyricism and melodic cadence."
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: "A call to shout in worship\u2014TERUAH style. Loud, raw praise that breaks down walls (Psalm 100:1\u20132).",
    expanded: "This gritty, passionate anthem calls believers to raise a shout of praise\u2014not polished, but powerful. \"Not Just Another Pretty Voice\" embraces the rawness of authentic worship. With echoes of Psalm 100 and the battle cry of Jericho, it reminds us that God doesn't need performance\u2014He wants praise."
  },
  // Continue adding the rest of the 21+ videos with their full data here...
];

function createVideoElement(video) {
  const container = document.createElement('div');
  container.className = 'video';

  const iframe = document.createElement('iframe');
  iframe.src = video.url;
  iframe.allowFullscreen = true;

  const title = document.createElement('h2');
  title.textContent = video.title;

  const desc = document.createElement('p');
  desc.className = 'description';
  desc.textContent = video.description;

  const moreBtn = document.createElement('button');
  moreBtn.textContent = 'More Info';
  moreBtn.className = 'info-button';
  moreBtn.onclick = () => {
    desc.classList.toggle('show');
    if (desc.classList.contains('show')) {
      desc.textContent = video.expanded;
      moreBtn.textContent = 'Show Less';
    } else {
      desc.textContent = video.description;
      moreBtn.textContent = 'More Info';
    }
  };

  container.appendChild(iframe);
  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(moreBtn);

  return container;
}

window.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('video-grid');
  videos.forEach(video => {
    const element = createVideoElement(video);
    grid.appendChild(element);
  });
});

const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/-SrZNafvoio",
    description: `🎭 Are You Living a Lie?

“Are You Living a Lie” presents a musically driven, lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ.

While its delivery feels intimate and declarative, it is sung throughout with expressive phrasing—blending poetic lyricism and melodic cadence.`
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: `📣 Not Just Another Pretty Voice

This song is a raw and unfiltered declaration that worship is more than sounding pretty.

Drawing inspiration from Psalm 100:1–2, it emphasizes shouting to the Lord with joyful praise—not passivity. It invites believers to bring a TERUAH (a Hebrew shout of war and worship) into their praise, breaking down walls with unapologetic volume and zeal.`
  },
  {
    title: "The Temple of the Living God",
    url: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: `🕊 The Temple of the Living God

This song is a bold call to holiness in a compromised age. Drawing directly from 2 Corinthians 6:14–7:1, it challenges believers to be truly set apart from the world — not just in words, but in lifestyle, worship, and witness.

It exposes the spiritual dangers of unequally yoked living, worldly compromise, and halfhearted faith. “The Temple of the Living God” reminds us that we are not our own — we are God’s dwelling place. The lyrics call the Church to reclaim its sacred identity and live in purity, reverence, and power. It’s a prophetic cry for the people of God to stop blending in and start standing out.`
  },
  {
    title: "Why Go to Church?",
    url: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: `⛪ Why Go to Church?

This song addresses one of the most common modern objections to Christian life: “Why do I even need to go to church?”

It’s a heartfelt yet confrontational answer to the rise of isolation, hurt from past church experiences, and the cultural drift toward “just me and Jesus” Christianity.

Rooted in Hebrews 10:25, it affirms the importance of gathering with other believers—not out of obligation, but because it’s essential for encouragement, growth, correction, worship, and spiritual warfare. The tone is compassionate but clear: the Church isn’t perfect, but God still calls us to be part of His Body — together.`
  },
  {
    title: "Come and Grow (Original)",
    url: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: `🎶 Come and Grow (Original)

The original version of “Come and Grow” serves as both a personal testimony and a heartfelt invitation.

It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.

The lyrics affirm that healing happens in healthy fellowship. It’s not about hype or showmanship — it’s about real people growing together under the love and truth of Christ.`
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: `🎵 Come and Grow (Blues R&B)

This soulful R&B arrangement of “Come and Grow” draws listeners into a warm and welcoming worship atmosphere.

It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.

With bluesy guitar riffs and a laid-back groove, the song paints a picture of a place where wounded hearts can find hope again.

It emphasizes the call to grow deeper in God’s Word and to walk together in love, humility, and grace.`
  },
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: `🇺🇸 Jesus and Bocephus

This song offers a Christian critique of cultural Christianity and shallow patriotism in the name of faith.

It contrasts flag-waving religion with true surrender to Christ, confronting empty declarations with gospel truth. A gritty blues-rock duet with soul and edge.`
  },
  {
    title: "We Can't Let Go",
    url: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: `🔥 We Can’t Let Go

“We Can’t Let Go” — a bold and urgent anthem calling believers to awaken from spiritual passivity.

Inspired by Acts 17 and Ezekiel 33, the song issues a wake-up call to Christians who’ve grown silent in a dark and idol-filled world. It challenges the Church to be lightbearers, watchmen, and vocal heralds of truth—emphasizing that silence equals complicity and lost souls. It’s not just musical; it’s missional.`
  },
  {
    title: "The Cry Unheard",
    url: "https://www.youtube.com/embed/lZyDvOS5iIQ",
    description: `📷 The Cry Unheard

The Cry Unheard was inspired by a photo I took back in 2009, on the southern edge of Bricktown in Oklahoma City.

That image stuck with me — then this scripture, Proverbs 21:13 (ESV): “Whoever closes his ear to the cry of the poor will himself call out and not be answered,” hit home in my soul.`
  }
  // You can continue adding the rest of the songs here in the same format
];

// Render videos
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('video-grid');
  if (!container) return;

  videos.forEach(video => {
    const div = document.createElement('div');
    div.className = 'video-item';
    div.innerHTML = `
      <h2>${video.title}</h2>
      <iframe src="${video.url}" allowfullscreen></iframe>
      <button class="info-btn" onclick="this.nextElementSibling.classList.toggle('show')">
        Show More
      </button>
      <p class="description">${video.description}</p>
    `;
    container.appendChild(div);
  });
});

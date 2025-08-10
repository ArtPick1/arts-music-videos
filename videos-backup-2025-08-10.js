const videos = [
  {
    title: "Are You Living a Lie?",
    videoUrl: "https://www.youtube.com/embed/-SrZNafvoio",
    description: `<p><strong>Are You Living a Lie?</strong> explores themes of self-deception, hollow desires, and the need for transformation through Christ. The song cuts deep into the heart of cultural Christianity and challenges listeners to examine their lives in light of truth — not convenience. With a gritty, introspective tone, it calls for genuine surrender, not surface-level faith.</p>`
  },
  {
    title: "Not Just Another Pretty Voice",
    videoUrl: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: `<p><strong>Not Just Another Pretty Voice</strong> is a bold declaration that worship isn’t about performance — it’s about truth, surrender, and spiritual warfare. Inspired by Psalm 100 and the concept of teruah (a shout of war and worship), this song encourages every believer — no matter how they sound — to praise the Lord with all their might.</p>`
  },
  {
    title: "The Temple of the Living God",
    videoUrl: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: `<p><strong>The Temple of the Living God</strong> is a prophetic cry drawn from 2 Corinthians 6:14–7:1. The song challenges the Church to live set apart, rejecting compromise and worldly blending. It calls us to reclaim holiness and live as God’s dwelling place — with reverence, clarity, and courage in an age of spiritual fog.</p>`
  },
  {
    title: "Why Go to Church?",
    videoUrl: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: `<p><strong>Why Go to Church?</strong> confronts the modern drift toward isolated Christianity. Rooted in Hebrews 10:25, it reminds believers that the Church — though imperfect — is God’s design for growth, encouragement, correction, and spiritual warfare. The song compassionately but clearly calls us back to biblical community.</p>`
  },
  {
    title: "Come and Grow",
    videoUrl: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: `<p><strong>Come and Grow</strong> is a heartfelt invitation to healing and spiritual growth at Agape Life Fellowship. The song highlights the importance of solid teaching, real community, and recovery from past church wounds. With a tone that balances welcome and conviction, it calls the weary and searching to come and be part of something alive and grounded.</p>`
  },
  {
    title: "Come and Grow Pencil Drawings Blues RB",
    videoUrl: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: `<p><strong>Come and Grow Pencil Drawings Blues RB</strong> features black and white pencil-style illustrations and a bluesy rhythm and blues vibe. It brings a more reflective and raw visual tone to the same message: come, heal, and grow in a Christ-centered fellowship. Ideal for viewers looking for a more stripped-down and soulful presentation of the same truth.</p>`
  },
  {
    title: "Jesus and Bocephus",
    videoUrl: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: `<p><strong>Jesus and Bocephus</strong> is a gritty, blues-rock response to cultural Christianity, inspired by Kid Rock's original but redirected toward repentance. The song contrasts patriotic religiosity with true discipleship, asking listeners to move beyond slogans and face the real Jesus — the crucified Savior who calls for surrender, not just admiration.</p>`
  },
  {
    title: "We Can’t Let Go",
    videoUrl: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: `<p><strong>We Can’t Let Go</strong> is a cry of faithfulness in the face of pressure to compromise truth. It's about standing firm in the gospel, holding tight to conviction even when it costs something. With a passionate tone and lyrical depth, it speaks to a Church that must remember who it is and Whose it is.</p>`
  },
  {
    title: "Depths Of My Distress",
    videoUrl: "https://www.youtube.com/embed/Rh69t81Co9Q",
    description: `<p><strong>Depths Of My Distress</strong> is a raw, emotional cry from the darkest places of spiritual pain. Inspired by Jonah 2 and Psalm 88, this lament gives voice to believers who feel overwhelmed or abandoned — yet still cling to God in hope. A reminder that even in the pit, our cries are heard.</p>`
  },
  {
    title: "His Holy Call",
    videoUrl: "https://www.youtube.com/embed/GyccPooWTrc",
    description: `<p><strong>His Holy Call</strong> is a compelling invitation to surrender everything to the Lord’s purpose. With a tone that blends urgency and tenderness, the song explores what it means to answer God’s call — not just to believe, but to follow. It reflects themes of obedience, sacrifice, and the cost of discipleship.</p>`
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    videoUrl: "https://www.youtube.com/embed/BZKlUIWSv4E",
    description: `<p><strong>A New Creation (Behold—the New Has Come)</strong> celebrates the radical transformation that takes place in Christ, drawn from 2 Corinthians 5:17. It’s a victorious anthem about leaving the old life behind and stepping into the freedom of God's grace. In Jesus, we are not just improved — we are made new.</p>`
  },
  {
    title: "Are You Truly Born Again Rock.",
    videoUrl: "https://www.youtube.com/embed/yK4YxAU5e_E",
    description: `<p><strong>Are You Truly Born Again Rock.</strong> delivers a bold question with a more melodic and accessible sound. It invites reflection, asking believers to examine whether their faith is rooted in real transformation or just routine. Based on John 3 and Romans 12.</p>`
  },
  {
    title: "Are You Truly Born Again  Metal",
    videoUrl: "https://www.youtube.com/embed/2DjXCaqsNpk",
    description: `<p><strong>Are You Truly Born Again  Metal</strong> brings urgency with its blistering edge and piercing lyrics. It cuts through religious games to ask if true spiritual rebirth has taken place. It challenges cultural Christianity with unapologetic boldness.</p>`
  },
  {
    title: "Sing Hallelujah",
    videoUrl: "https://www.youtube.com/embed/HZYPymgsTNU",
    description: `<p><strong>Sing Hallelujah</strong> is inspired by Revelation 15:3–4 and 19:1–10, celebrating God’s majesty and righteous judgment. The song encourages lifting your voice in worship — whether in victory or hardship — echoing the eternal praises of heaven.</p>`
  },
  {
    title: "Why Do We Go After Worthless Idols",
    videoUrl: "https://www.youtube.com/embed/6DSL94G6Tko",
    description: `<p><strong>Why Do We Go After Worthless Idols</strong> is a prophetic lament rooted in Jeremiah 2:5 and Romans 1. It confronts the Church’s pursuit of empty things — image, comfort, success — and calls for a return to the fountain of living water.</p>`
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    videoUrl: "https://www.youtube.com/embed/QNN2oaTuWMM",
    description: `<p><strong>This Ain’t for Awards—It’s for War</strong> is a gritty battle cry for spiritual warriors, inspired by 2 Timothy 2:3–4. It rejects shallow recognition and performance-based faith in favor of bold obedience and spiritual warfare. This is a song for soldiers of Christ — not spectators.</p>`
  },
  {
    title: "Yet I Will Rejoice",
    videoUrl: "https://www.youtube.com/embed/NfZtq1BN5LU",
    description: `<p><strong>Yet I Will Rejoice</strong> is a declaration of faith based on Habakkuk 3:17–18. Even when everything falls apart, the song proclaims trust and praise to God. It’s an anthem of hope in the dark — not because of circumstances, but because of who God is.</p>`
  },
  {
    title: "Does God Revolve Around You?",
    videoUrl: "https://www.youtube.com/embed/Q4_JYGVL8Wo",
    description: `<p><strong>Does God Revolve Around You?</strong> challenges the self-centered theology creeping into modern faith. It asks hard questions about whether we’ve reshaped God in our image. With sharp lyrics and a driving rhythm, it calls for a Christ-centered surrender — not a me-centered gospel.</p>`
  },
  {
    title: "Dust to Dust",
    videoUrl: "https://www.youtube.com/embed/goYC-AN2Rzs",
    description: `<p><strong>Dust to Dust</strong> reflects on the reality of mortality and the eternal significance of our choices. With a solemn yet stirring tone, it reminds listeners that from dust we came and to dust we’ll return — so how will we spend the life between?</p>`
  },
  {
    title: "Disturb the City (Version 2)",
    videoUrl: "https://www.youtube.com/embed/jGJYsMzGUls",
    description: `<p><strong>Disturb the City (Version 2)</strong> is a reimagined cry for revival, inspired by Acts 17:6. It calls believers to shake up the spiritual status quo and boldly proclaim Christ. With edgier sound and sharpened urgency, it pushes the Church to be a disruptive force for the Kingdom — not with noise, but truth.</p>`
  },
  {
    title: "Disturb the City (Original)",
    videoUrl: "https://www.youtube.com/embed/QLz4KNQmrAo",
    description: `<p><strong>Disturb the City (Original)</strong> is a raw cry for revival, based on Acts 17:6. This version is an unfiltered call for believers to rise up, shake spiritual complacency, and cause holy disruption in a dark world. It’s time to turn the city upside down for Christ.</p>`
  },
  {
    title: "Disciple or Fan",
    videoUrl: "https://www.youtube.com/embed/FulLRuDHai0",
    description: `<p><strong>Disciple or Fan</strong> asks a piercing question at the heart of true Christianity: Are we truly following Jesus, or just cheering from a distance? With a challenging tone, the song contrasts casual admiration with costly discipleship. Inspired by Luke 9:23 and John 6, it calls us to leave comfort and follow Christ fully.</p>`
  },
  {
    title: "From Where I Stand",
    videoUrl: "https://www.youtube.com/embed/eOtEThVwtTs",
    description: `<p><strong>From Where I Stand</strong> is a reflective, blues-tinged anthem that speaks from a place of tested faith. Drawing from Jonah 2 and Psalm 88, it wrestles with feelings of abandonment and longing to be heard — yet clings to hope, knowing no cry is ever truly lost when lifted to the Lord.</p>`
  },
  {
    title: "Accident or Design",
    videoUrl: "https://www.youtube.com/embed/kJU5JDUgItY",
    description: `<p><strong>Accident or Design</strong> confronts the question of human purpose in a skeptical age. It contrasts the empty logic of evolutionary chance with the truth of being fearfully and wonderfully made. A call to see yourself as an intentional creation — not a random product.</p>`
  },
  {
    title: "When Minds Meet Machine",
    videoUrl: "https://www.youtube.com/embed/Q7cg_SLXDm4",
    description: `<p><strong>When Minds Meet Machine</strong> explores the spiritual tension between artificial intelligence and God’s design for humanity. It questions where the line is between created and Creator, and reminds us that technology must always submit to truth — not the other way around.</p>`
  },
  {
    title: "Strength in Surrender",
    videoUrl: "https://www.youtube.com/embed/ZHfX1J60YcA",
    description: `<p><strong>Strength in Surrender</strong> is about finding power in laying everything down at the feet of Christ. With a message of humility and trust, the song reveals that true strength isn’t in fighting harder, but in surrendering deeper. It’s a quiet anthem of spiritual victory.</p>`
  },
  {
    title: "The Cry Unheard",
    videoUrl: "https://www.youtube.com/embed/EAoTEsSZGVE",
    description: `<p><strong>The Cry Unheard</strong> is a sobering reminder of Proverbs 21:13 — that ignoring the cry of the poor has spiritual consequences. Inspired by an image from Bricktown and the haunting silence of neglect, it calls the Church to listen, respond, and love sacrificially. We must not close our ears to the hurting.</p>`
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

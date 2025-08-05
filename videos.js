const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://youtu.be/QeJjDoVv158",
    description: "A piercing reflection on spiritual authenticity and the cost of discipleship.",
    moreInfo: "“Are You Living a Lie” presents a musically driven, lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ. While its delivery feels intimate and declarative, it is sung throughout with expressive phrasing—blending poetic lyricism and melodic cadence."
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://youtu.be/owr6JmLMEss",
    description: "Rejects shallow Christian performance in favor of genuine, Spirit-led worship.",
    moreInfo: "“Not Just Another Pretty Voice” is a confrontation of superficial worship culture. It exposes the temptation to perform instead of truly praise and reminds the listener that God is not impressed with our polish — He desires our surrender."
  },
  {
    title: "The Temple of the Living God",
    url: "https://youtu.be/b6cS0O_dq3U",
    description: "A bold call to holiness in a compromised age.",
    moreInfo: "This song is a bold call to holiness in a compromised age. Drawing directly from 2 Corinthians 6:14–7:1, it challenges believers to be truly set apart from the world — not just in words, but in lifestyle, worship, and witness. It exposes the spiritual dangers of unequally yoked living, worldly compromise, and halfhearted faith. “The Temple of the Living God” reminds us that we are not our own — we are God’s dwelling place. The lyrics call the Church to reclaim its sacred identity and live in purity, reverence, and power. It’s a prophetic cry for the people of God to stop blending in and start standing out."
  },
  {
    title: "Why Go to Church?",
    url: "https://youtu.be/n1HtEbFRSWQ",
    description: "Answers the common question: 'Why bother with church?'",
    moreInfo: "This song addresses one of the most common modern objections to Christian life: “Why do I even need to go to church?” It’s a heartfelt yet confrontational answer to the rise of isolation, hurt from past church experiences, and the cultural drift toward “just me and Jesus” Christianity. Rooted in Hebrews 10:25, it affirms the importance of gathering with other believers—not out of obligation, but because it’s essential for encouragement, growth, correction, worship, and spiritual warfare. The tone is compassionate but clear: the Church isn’t perfect, but God still calls us to be part of His Body — together."
  },
  {
    title: "Come and Grow (Original)",
    url: "https://youtu.be/8JGBLmRi14M",
    description: "Invitation to healing and growth in Christ-centered fellowship.",
    moreInfo: "🎶 Come and Grow (Original)\nThe original version of “Come and Grow” serves as both a personal testimony and a heartfelt invitation.\nIt was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.\nThe lyrics affirm that healing happens in healthy fellowship.\nIt’s not about hype or showmanship — it’s about real people growing together under the love and truth of Christ."
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://youtu.be/skXVC7SjMIg",
    description: "A bluesy reimagining of the invitation to healing and discipleship.",
    moreInfo: "🎵 Come and Grow (Blues R&B)\nThis soulful R&B arrangement of “Come and Grow” draws listeners into a warm and welcoming worship atmosphere.\nIt’s a celebration of God’s healing work in community — especially for those who have been hurt or disillusioned by church in the past.\nWith bluesy guitar riffs and a laid-back groove, the song paints a picture of a place where wounded hearts can find hope again.\nIt was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.\nIt emphasizes the call to grow deeper in God’s Word and to walk together in love, humility, and grace."
  },
  {
    title: "Jesus and Bocephus",
    url: "https://youtu.be/9OQmrhu7UPY",
    description: "A gritty gospel-rock reply to cultural Christianity.",
    moreInfo: "“Jesus and Bocephus” offers a Christian response to Kid Rock’s song, challenging cultural Christianity and patriotism masquerading as faith. With alternating male and female vocals and blues-rock grit, it contrasts empty religion with true surrender to Christ."
  },
  {
    title: "We Can’t Let Go",
    url: "https://youtu.be/0lBXQ7u8Z6g",
    description: "A bold anthem calling the Church to spiritual urgency.",
    moreInfo: "“We Can’t Let Go” — a bold and urgent anthem calling believers to awaken from spiritual passivity.\nInspired by Acts 17 and Ezekiel 33, the song issues a wake-up call to Christians who’ve grown silent in a dark and idol-filled world. It challenges the Church to be lightbearers, watchmen, and vocal heralds of truth—emphasizing that silence equals complicity and lost souls. It’s not just musical; it’s missional."
  },
  {
    title: "Depths Of My Distress",
    url: "https://youtu.be/Rh69t81Co9Q",
    description: "A lament-style cry from the darkest spiritual places.",
    moreInfo: "Drawing inspiration from Jonah 2 and Psalm 88, “Depths Of My Distress” is a raw, emotional cry from the darkest places of spiritual pain.\nThe song gives voice to the believer who feels abandoned, overwhelmed, or silenced — yet still clings to hope.\nWith haunting tones and lament-style lyrics, it echoes the reality that God hears even our most broken prayers and meets us in the pit."
  },
  {
    title: "His Holy Call",
    url: "https://youtu.be/GyccPooWTrc",
    description: "An invitation to surrender fully to God’s purpose.",
    moreInfo: "“His Holy Call” is a compelling invitation to surrender everything to the Lord’s purpose.\nWith a tone that blends urgency and tenderness, the song explores what it means to answer God’s call — not just to believe, but to follow.\nIt reflects themes of obedience, sacrifice, and the cost of discipleship, urging listeners to respond to God’s voice with wholehearted devotion."
  },
  // PART 2 will continue from here
];

function renderVideos(videoList) {
  const container = document.getElementById("video-grid");
  container.innerHTML = "";

  videoList.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.className = "video";

    const iframe = document.createElement("iframe");
    iframe.src = video.url.replace("watch?v=", "embed/");
    iframe.allowFullscreen = true;

    const title = document.createElement("div");
    title.className = "video-title";
    title.textContent = video.title;

    const description = document.createElement("div");
    description.className = "video-description";
    description.textContent = video.description;

    const moreInfo = document.createElement("div");
    moreInfo.className = "more-info";
    moreInfo.textContent = video.moreInfo;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-button";
    toggleBtn.textContent = "Click for more about this song";
    toggleBtn.onclick = () => {
      moreInfo.style.display =
        moreInfo.style.display === "block" ? "none" : "block";
    };

    videoDiv.appendChild(iframe);
    videoDiv.appendChild(title);
    videoDiv.appendChild(description);
    videoDiv.appendChild(toggleBtn);
    videoDiv.appendChild(moreInfo);
    container.appendChild(videoDiv);
  });
}

renderVideos(videos);

videos.push(
  {
    title: "A New Creation (Behold—the New Has Come)",
    url: "https://youtu.be/BZKlUIWSv4E",
    description: "Celebrates transformation in Christ from 2 Corinthians 5:17.",
    moreInfo: "Rooted in 2 Corinthians 5:17, “A New Creation” celebrates the radical transformation that takes place in Christ.\nIt’s a victorious anthem about leaving the old life behind and stepping into the freedom of God's grace.\nThe lyrics reflect themes of identity, redemption, and renewal — affirming that in Jesus, we are not just improved — we are made new."
  },
  {
    title: "Are You Truly Born Again (Metal)",
    url: "https://youtu.be/2DjXCaqsNpk",
    description: "A metal confrontation of superficial faith.",
    moreInfo: "With a blistering metal edge and piercing lyrics, this version of “Are You Truly Born Again?” confronts the listener with one of the most important spiritual questions.\nIt cuts through religious games and superficial faith to ask whether real transformation has taken place.\nThis song draws from John 3 and challenges cultural Christianity with unapologetic boldness."
  },
  {
    title: "Are You Truly Born Again (Rock)",
    url: "https://youtu.be/yK4YxAU5e_E",
    description: "Same urgent message with a more melodic sound.",
    moreInfo: "This rock version of “Are You Truly Born Again?” delivers the same urgent message with a more melodic and accessible sound.\nIt invites reflection without losing intensity, asking believers to examine whether their faith is rooted in real transformation or just routine.\nDrawing from John 3 and Romans 12, the song confronts spiritual complacency and calls for genuine rebirth through Christ."
  },
  {
    title: "Sing Hallelujah",
    url: "https://youtu.be/HZYPymgsTNU",
    description: "A simple, joyful call to praise from Revelation 15 & 19.",
    moreInfo: "Inspired by Revelation 15:3–4, Revelation 19:1–5, and Revelation 19:6–10, “Sing Hallelujah” blends worshipful simplicity with an upbeat spirit, encouraging listeners to lift their voices in response to God's majesty and righteous judgment.\nWhether in victory or hardship, the lyrics remind us that our hallelujah is always welcome before the throne — echoing the eternal praises of the saints and angels in glory."
  },
  {
    title: "Why Do We Go After Worthless Idols",
    url: "https://youtu.be/6DSL94G6Tko",
    description: "A lament drawn from Jeremiah 2 and Romans 1.",
    moreInfo: "Rooted in Jeremiah 2:5 and Romans 1, “Why Do We Go After Worthless Idols” is a prophetic lament over the Church’s pursuit of empty things.\nThe song questions why we trade the glory of God for things that cannot satisfy.\nWith gritty honesty and raw instrumentation, it exposes the idols we tolerate — success, comfort, image — and calls believers to return to the fountain of living water."
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    url: "https://youtu.be/QNN2oaTuWMM",
    description: "Rejects shallow recognition in favor of spiritual battle.",
    moreInfo: "“This Ain’t for Awards—It’s for War” is a gritty battle cry for spiritual warriors.\nThe song rejects shallow recognition and performance-based Christianity in favor of bold obedience and spiritual warfare.\nInspired by 2 Timothy 2:3–4, it calls believers to endure hardship as good soldiers of Christ, fighting for souls — not applause."
  },
  {
    title: "Yet I Will Rejoice",
    url: "https://youtu.be/NfZtq1BN5LU",
    description: "Faith that worships even through loss (Habakkuk 3).",
    moreInfo: "“Yet I Will Rejoice” is a declaration of faith in the face of loss, disappointment, or hardship.\nDrawing from Habakkuk 3:17–18, the song echoes the biblical prophet’s resolve to praise God even when circumstances offer no reason to.\nWith stripped-down honesty and a steady build, it calls believers to cling to hope and choose worship — not because of what we see, but because of who God is."
  },
  {
    title: "Does God Revolve Around You?",
    url: "https://youtu.be/Q4_JYGVL8Wo",
    description: "Confronts self-centered faith with truth.",
    moreInfo: "“Does God Revolve Around You?” challenges the self-centeredness that has crept into modern faith.\nIt asks hard questions about whether our view of God is truly biblical — or just an idol shaped in our own image.\nWith sharp lyrics and driving rhythm, the song confronts the idea that God exists to serve our desires, and instead calls listeners to a Christ-centered life of surrender."
  },
  {
    title: "Dust to Dust",
    url: "https://youtu.be/goYC-AN2Rzs",
    description: "A somber meditation on mortality and meaning.",
    moreInfo: "“Dust to Dust” reflects on the reality of mortality and the eternal significance of our choices.\nIt explores the tension between fleeting earthly life and the call to live for what truly matters — Christ and eternity.\nWith a solemn yet stirring tone, the song reminds listeners that from dust we came, and to dust we’ll return — so how will we spend the life between?"
  },
  {
    title: "Disturb the City (Version 2)",
    url: "https://youtu.be/jGJYsMzGUls",
    description: "An edgier cry for revival, based on Acts 17:6.",
    moreInfo: "“Disturb the City (Version 2)” is a reimagined cry for revival, drawing from Acts 17:6.\nThe lyrics call believers to shake up the spiritual status quo and boldly proclaim Christ in a darkened world.\nWith an edgier sound and sharpened message, this version intensifies the urgency to be a disruptive force for the Kingdom — not with noise, but with truth."
  },
  {
    title: "Disturb the City (Original)",
    url: "https://youtu.be/QLz4KNQmrAo",
    description: "A raw cry for believers to turn the world upside down.",
    moreInfo: "“Disturb the City (Original)” is a bold declaration drawn from Acts 17:6, where early Christians were accused of turning the world upside down.\nThis version brings a raw, unfiltered cry for believers to rise up, shake spiritual complacency, and cause holy disruption in a sleeping world.\nIt’s a charge to stand firm, speak truth, and stir the city with the gospel of Christ."
  },
  {
    title: "Disciple or Fan",
    url: "https://youtu.be/FulLRuDHai0",
    description: "Asks whether you’re following Jesus or just admiring Him.",
    moreInfo: "“Disciple or Fan” asks a piercing question at the heart of true Christianity: Are we truly following Jesus, or just cheering Him on from a distance?\nThe song contrasts casual admiration with costly discipleship, drawing from Luke 9:23 and John 6.\nWith a challenging tone and rhythmic drive, it calls listeners to move beyond comfort and into real, surrendered obedience."
  },
  {
    title: "From Where I Stand",
    url: "https://youtu.be/eOtEThVwtTs",
    description: "A reflective blues-tinged anthem from the depths of faith.",
    moreInfo: "“From Where I Stand” is a reflective, blues-tinged anthem that speaks from a place of spiritual survival and tested faith.\nInspired by Jonah 2 and Psalm 88, the song wrestles with feelings of abandonment, darkness, and the longing to be heard by God.\nYet even in the depths, it holds to a sliver of hope — expressing that no cry is ever truly lost when it’s lifted to the Lord."
  },
  {
    title: "The Taxman's Shadow",
    url: "https://youtu.be/fmOYVL3evvY",
    description: "A gritty parable about corruption, repentance, and redemption.",
    moreInfo: "This song explores themes of justice, guilt, and transformation through the eyes of a repentant tax collector. Echoing Luke 18:9–14, it paints the internal struggle between pride and humility, asking: Will we justify ourselves — or cry for mercy?"
  },
  {
    title: "Accident or Design",
    url: "https://youtu.be/kJU5JDUgItY",
    description: "A challenge to the worldview of random evolution.",
    moreInfo: "“Accident or Design” confronts the question of human purpose in a skeptical age.\nIt contrasts the empty logic of evolutionary chance with the profound truth of being fearfully and wonderfully made.\nWith a sharp lyrical edge, the song challenges listeners to see themselves not as random products of time and matter, but as intentional creations with eternal value in the eyes of God."
  },
  {
    title: "When Minds Meet Machine",
    url: "https://youtu.be/Q7cg_SLXDm4",
    description: "Explores faith in the age of AI and automation.",
    moreInfo: "A futuristic track questioning the nature of humanity, soul, and salvation when technology tries to replace truth.\nThe song warns against spiritual apathy in a world where machines echo our desires but not our need for redemption."
  },
  {
    title: "Strength in Surrender",
    url: "https://youtu.be/ZHfX1J60YcA",
    description: "A gentle yet powerful call to lay down your strength at His feet.",
    moreInfo: "This song reflects on the paradox of Christian strength: that true power comes not from self-effort, but from surrender.\nInspired by 2 Corinthians 12:9–10, it encourages weary hearts to find rest and victory through yielding to God's grace."
  },
  {
    title: "The Cry Unheard",
    url: "https://youtu.be/lZyDvOS5iIQ",
    description: "A cry for justice inspired by Proverbs 21:13 and a 2009 photo.",
    moreInfo: "“The Cry Unheard” was inspired by a photo I took back in 2009, on the southern edge of Bricktown in Oklahoma City. That image stuck with me, then this scripture hit home in my soul:\nProverbs 21:13 (ESV) — 'Whoever closes his ear to the cry of the poor will himself call out and not be answered.'"
  }
);



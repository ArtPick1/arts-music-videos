const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/1tZf4Zy-6nU",
    description: "“Are You Living a Lie” presents a musically driven, lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ. While its delivery feels intimate and declarative, it is sung throughout with expressive phrasing—blending poetic lyricism and melodic cadence."
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/fcGoNwAzElU",
    description: "This song challenges shallow performance-based faith with a raw, blues-infused sound. “Not Just Another Pretty Voice” is a bold declaration that following Jesus isn’t about image or applause — it’s about truth, surrender, and authentic witness. The lyrics reflect the cost of carrying the gospel when popularity fades, and Christ remains."
  },
  {
    title: "The Temple of the Living God",
    url: "https://www.youtube.com/embed/NdZBKoYhgl0",
    description: "This song is a bold call to holiness in a compromised age. Drawing directly from 2 Corinthians 6:14–7:1, it challenges believers to be truly set apart from the world — not just in words, but in lifestyle, worship, and witness. It exposes the spiritual dangers of unequally yoked living, worldly compromise, and halfhearted faith. “The Temple of the Living God” reminds us that we are not our own — we are God’s dwelling place. The lyrics call the Church to reclaim its sacred identity and live in purity, reverence, and power. It’s a prophetic cry for the people of God to stop blending in and start standing out."
  },
  {
    title: "Why Go to Church?",
    url: "https://www.youtube.com/embed/Dlu7EsDeFQ0",
    description: "This song addresses one of the most common modern objections to Christian life: “Why do I even need to go to church?” It’s a heartfelt yet confrontational answer to the rise of isolation, hurt from past church experiences, and the cultural drift toward “just me and Jesus” Christianity. Rooted in Hebrews 10:25, it affirms the importance of gathering with other believers—not out of obligation, but because it’s essential for encouragement, growth, correction, worship, and spiritual warfare. The tone is compassionate but clear: the Church isn’t perfect, but God still calls us to be part of His Body — together."
  },
  {
    title: "Come and Grow (Original)",
    url: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: "🎶 Come and Grow (Original)\nThe original version of “Come and Grow” serves as both a personal testimony and a heartfelt invitation. It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds. The lyrics affirm that healing happens in healthy fellowship. It’s not about hype or showmanship — it’s about real people growing together under the love and truth of Christ."
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: "🎵 Come and Grow (Blues R&B)\nThis soulful R&B arrangement of “Come and Grow” draws listeners into a warm and welcoming worship atmosphere. It’s a celebration of God’s healing work in community — especially for those who have been hurt or disillusioned by church in the past. With bluesy guitar riffs and a laid-back groove, the song paints a picture of a place where wounded hearts can find hope again. It emphasizes the call to grow deeper in God’s Word and to walk together in love, humility, and grace. It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds."
  },
  // ✂️ CONTINUED…
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: "Written in response to cultural Christianity and influenced by Kid Rock’s themes, this song contrasts empty religious symbolism with true surrender to Christ. With alternating male and female vocals and blues-rock grit, the song cuts through the noise of Americanized Christianity and points listeners to the real Jesus — not just a patriotic symbol, but a crucified Savior."
  },
  {
    title: "We Can’t Let Go",
    url: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: "“We Can’t Let Go” — a bold and urgent anthem calling believers to awaken from spiritual passivity. Inspired by Acts 17 and Ezekiel 33, the song issues a wake-up call to Christians who’ve grown silent in a dark and idol-filled world. It challenges the Church to be lightbearers, watchmen, and vocal heralds of truth—emphasizing that silence equals complicity and lost souls. It’s not just musical; it’s missional."
  },
  {
    title: "Depths Of My Distress",
    url: "https://www.youtube.com/embed/Rh69t81Co9Q",
    description: "Drawing inspiration from Jonah 2 and Psalm 88, “Depths Of My Distress” is a raw, emotional cry from the darkest places of spiritual pain. The song gives voice to the believer who feels abandoned, overwhelmed, or silenced — yet still clings to hope. With haunting tones and lament-style lyrics, it echoes the reality that God hears even our most broken prayers and meets us in the pit."
  },
  {
    title: "His Holy Call",
    url: "https://www.youtube.com/embed/GyccPooWTrc",
    description: "“His Holy Call” is a compelling invitation to surrender everything to the Lord’s purpose. With a tone that blends urgency and tenderness, the song explores what it means to answer God’s call — not just to believe, but to follow. It reflects themes of obedience, sacrifice, and the cost of discipleship, urging listeners to respond to God’s voice with wholehearted devotion."
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    url: "https://www.youtube.com/embed/BZKlUIWSv4E",
    description: "Rooted in 2 Corinthians 5:17, “A New Creation” celebrates the radical transformation that takes place in Christ. It’s a victorious anthem about leaving the old life behind and stepping into the freedom of God's grace. The lyrics reflect themes of identity, redemption, and renewal — affirming that in Jesus, we are not just improved — we are made new."
  },
  {
    title: "Are You Truly Born Again? (Rock Version)",
    url: "https://www.youtube.com/embed/yK4YxAU5e_E",
    description: "This rock version of “Are You Truly Born Again?” delivers the same urgent message with a more melodic and accessible sound. It invites reflection without losing intensity, asking believers to examine whether their faith is rooted in real transformation or just routine. Drawing from John 3 and Romans 12, the song confronts spiritual complacency and calls for genuine rebirth through Christ."
  },
  {
    title: "Are You Truly Born Again? (Metal Version)",
    url: "https://www.youtube.com/embed/2DjXCaqsNpk",
    description: "With a blistering metal edge and piercing lyrics, this version of “Are You Truly Born Again?” confronts the listener with one of the most important spiritual questions. It cuts through religious games and superficial faith to ask whether real transformation has taken place. This song draws from John 3 and challenges cultural Christianity with unapologetic boldness."
  },
  {
    title: "Sing Hallelujah",
    url: "https://www.youtube.com/embed/HZYPymgsTNU",
    description: "Inspired by Revelation 15:3–4, 19:1–5, and 19:6–10, “Sing Hallelujah” blends worshipful simplicity with an upbeat spirit, encouraging listeners to lift their voices in response to God's majesty and righteous judgment. Whether in victory or hardship, the lyrics remind us that our hallelujah is always welcome before the throne — echoing the eternal praises of the saints and angels in glory."
  },
  {
    title: "Why Do We Go After Worthless Idols",
    url: "https://www.youtube.com/embed/6DSL94G6Tko",
    description: "Rooted in Jeremiah 2:5 and Romans 1, “Why Do We Go After Worthless Idols” is a prophetic lament over the Church’s pursuit of empty things. The song questions why we trade the glory of God for things that cannot satisfy. With gritty honesty and raw instrumentation, it exposes the idols we tolerate — success, comfort, image — and calls believers to return to the fountain of living water."
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    url: "https://www.youtube.com/embed/QNN2oaTuWMM",
    description: "“This Ain’t for Awards—It’s for War” is a gritty battle cry for spiritual warriors. The song rejects shallow recognition and performance-based Christianity in favor of bold obedience and spiritual warfare. Inspired by 2 Timothy 2:3–4, it calls believers to endure hardship as good soldiers of Christ, fighting for souls — not applause."
  },
  {
    title: "Yet I Will Rejoice",
    url: "https://www.youtube.com/embed/NfZtq1BN5LU",
    description: "“Yet I Will Rejoice” is a declaration of faith in the face of loss, disappointment, or hardship. Drawing from Habakkuk 3:17–18, the song echoes the biblical prophet’s resolve to praise God even when circumstances offer no reason to. With stripped-down honesty and a steady build, it calls believers to cling to hope and choose worship — not because of what we see, but because of who God is."
  },
  {
    title: "Does God Revolve Around You?",
    url: "https://www.youtube.com/embed/Q4_JYGVL8Wo",
    description: "“Does God Revolve Around You?” challenges the self-centeredness that has crept into modern faith. It asks hard questions about whether our view of God is truly biblical — or just an idol shaped in our own image. With sharp lyrics and driving rhythm, the song confronts the idea that God exists to serve our desires, and instead calls listeners to a Christ-centered life of surrender."
  },
  {
    title: "Dust to Dust",
    url: "https://www.youtube.com/embed/goYC-AN2Rzs",
    description: "“Dust to Dust” reflects on the reality of mortality and the eternal significance of our choices. It explores the tension between fleeting earthly life and the call to live for what truly matters — Christ and eternity. With a solemn yet stirring tone, the song reminds listeners that from dust we came, and to dust we’ll return — so how will we spend the life between?"
  }
];

];



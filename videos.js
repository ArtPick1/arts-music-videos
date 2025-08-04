// videos.js

const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/-SrZNafvoio",
    description: "\"Are You Living a Lie\" presents a musically driven, lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ. While its delivery feels intimate and declarative, it is sung throughout with expressive phrasing—blending poetic lyricism and melodic cadence."
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: "A call to shout in worship—TERUAH style. Loud, raw praise that breaks down walls (Psalm 100:1–2)."
  },
  {
    title: "The Temple of the Living God",
    url: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: "This song is a bold call to holiness in a compromised age. Drawing directly from 2 Corinthians 6:14–7:1, it challenges believers to be truly set apart from the world — not just in words, but in lifestyle, worship, and witness. It exposes the spiritual dangers of unequally yoked living, worldly compromise, and halfhearted faith. \"The Temple of the Living God\" reminds us that we are not our own — we are God’s dwelling place."
  },
  {
    title: "Why Go to Church?",
    url: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: "This song addresses one of the most common modern objections to Christian life: \"Why do I even need to go to church?\" Rooted in Hebrews 10:25, it affirms the importance of gathering with other believers—not out of obligation, but because it’s essential for encouragement, growth, correction, worship, and spiritual warfare."
  },
  {
    title: "Come and Grow (Original)",
    url: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: "The original version of “Come and Grow” serves as both a personal testimony and a heartfelt invitation. It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds. The lyrics affirm that healing happens in healthy fellowship. It’s not about hype or showmanship — it’s about real people growing together under the love and truth of Christ."
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: "This soulful R&B arrangement of “Come and Grow” draws listeners into a warm and welcoming worship atmosphere. It’s a celebration of God’s healing work in community — especially for those who have been hurt or disillusioned by church in the past. With bluesy guitar riffs and a laid-back groove, the song paints a picture of a place where wounded hearts can find hope again. It emphasizes the call to grow deeper in God’s Word and to walk together in love, humility, and grace. It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds."
  },
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: "A bluesy gospel critique of cultural Christianity that challenges listeners to follow the real Jesus — not just an American symbol."
  },
  {
    title: "We Can't Let Go",
    url: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: "“We Can’t Let Go” — a bold and urgent anthem calling believers to awaken from spiritual passivity. Inspired by Acts 17 and Ezekiel 33, it challenges the Church to be lightbearers, watchmen, and vocal heralds of truth—emphasizing that silence equals complicity and lost souls."
  },
  {
    title: "The Cry Unheard",
    url: "https://www.youtube.com/embed/lZyDvOS5iIQ",
    description: "The Cry Unheard was inspired by a photo I took back in 2009 on the southern edge of Bricktown in Oklahoma City. Later, Proverbs 21:13 hit home: \"Whoever closes his ear to the cry of the poor will himself call out and not be answered.\""
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    url: "https://www.youtube.com/embed/BZKlUIWSv4E",
    description: "Rooted in 2 Corinthians 5:17, “A New Creation” celebrates the radical transformation that takes place in Christ. It’s a victorious anthem about leaving the old life behind and stepping into the freedom of God's grace. The lyrics reflect themes of identity, redemption, and renewal — affirming that in Jesus, we are not just improved — we are made new."
  },
  {
    title: "Are You Truly Born Again? (Metal Version)",
    url: "https://www.youtube.com/embed/2DjXCaqsNpk",
    description: "With a blistering metal edge and piercing lyrics, this version of “Are You Truly Born Again?” confronts the listener with one of the most important spiritual questions. It cuts through religious games and superficial faith to ask whether real transformation has taken place. This song draws from John 3 and challenges cultural Christianity with unapologetic boldness."
  },
  {
    title: "Are You Truly Born Again? (Rock Version)",
    url: "https://www.youtube.com/embed/yK4YxAU5e_E",
    description: "This rock version of “Are You Truly Born Again?” delivers the same urgent message with a more melodic and accessible sound. It invites reflection without losing intensity, asking believers to examine whether their faith is rooted in real transformation or just routine. Drawing from John 3 and Romans 12, the song confronts spiritual complacency and calls for genuine rebirth through Christ."
  },
  {
    title: "Sing Hallelujah",
    url: "https://www.youtube.com/embed/HZYPymgsTNU",
    description: "Inspired by Revelation 15:3–4, Revelation 19:1–5, and Revelation 19:6–10. This song blends worshipful simplicity with an upbeat spirit, encouraging listeners to lift their voices in response to God's majesty and righteous judgment. Whether in victory or hardship, the lyrics remind us that our hallelujah is always welcome before the throne — echoing the eternal praises of the saints and angels in glory."
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
  },
  {
    title: "Disturb the City (Version 2)",
    url: "https://www.youtube.com/embed/jGJYsMzGUls",
    description: "“Disturb the City (Version 2)” is a reimagined cry for revival, drawing from Acts 17:6. The lyrics call believers to shake up the spiritual status quo and boldly proclaim Christ in a darkened world. With an edgier sound and sharpened message, this version intensifies the urgency to be a disruptive force for the Kingdom — not with noise, but with truth."
  },
  {
    title: "Disturb the City (Original)",
    url: "https://www.youtube.com/embed/QLz4KNQmrAo",
    description: "“Disturb the City (Original)” is a bold declaration drawn from Acts 17:6, where early Christians were accused of turning the world upside down. This version brings a raw, unfiltered cry for believers to rise up, shake spiritual complacency, and cause holy disruption in a sleeping world. It’s a charge to stand firm, speak truth, and stir the city with the gospel of Christ."
  },
  {
    title: "Disciple or Fan",
    url: "https://www.youtube.com/embed/FulLRuDHai0",
    description: "“Disciple or Fan” asks a piercing question at the heart of true Christianity: Are we truly following Jesus, or just cheering Him on from a distance? The song contrasts casual admiration with costly discipleship, drawing from Luke 9:23 and John 6. With a challenging tone and rhythmic drive, it calls listeners to move beyond comfort and into real, surrendered obedience."
  },
  {
    title: "From Where I Stand",
    url: "https://www.youtube.com/embed/eOtEThVwtTs",
    description: "“From Where I Stand” is a reflective, blues-tinged anthem that speaks from a place of spiritual survival and tested faith. Inspired by Jonah 2 and Psalm 88, the song wrestles with feelings of abandonment, darkness, and the longing to be heard by God. Yet even in the depths, it holds to a sliver of hope — expressing that no cry is ever truly lost when it’s lifted to the Lord."
  },
  {
    title: "Accident or Design",
    url: "https://www.youtube.com/embed/kJU5JDUgItY",
    description: "“Accident or Design” confronts the question of human purpose in a skeptical age. It contrasts the empty logic of evolutionary chance with the profound truth of being fearfully and wonderfully made. With a sharp lyrical edge, the song challenges listeners to see themselves not as random products of time and matter, but as intentional creations with eternal value in the eyes of God."
  },
  {
    title: "When Minds Meet Machine",
    url: "https://www.youtube.com/embed/Q7cg_SLXDm4",
    description: "Explores the tension between human identity and AI-driven culture. A call to discernment and grounded faith."
  },
  {
    title: "Strength in Surrender",
    url: "https://www.youtube.com/embed/ZHfX1J60YcA",
    description: "A worshipful anthem about laying down our strength and pride to find power in trusting Christ alone."
  }
];

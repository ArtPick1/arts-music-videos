// videos.js

const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/-SrZNafvoio",
    description: "“Are You Living a Lie” presents a lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ. Expressive phrasing blends poetic lyricism and melodic cadence."
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: "A call to shout in worship—TERUAH style. Loud, raw praise that breaks down walls (Psalm 100:1–2)."
  },
  {
    title: "The Temple of the Living God",
    url: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: "A bold call to holiness. Drawn from 2 Corinthians 6:14–7:1, it exposes the dangers of compromise and urges the Church to reclaim its sacred identity as God's dwelling place."
  },
  {
    title: "Why Go to Church?",
    url: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: "This song answers the modern drift from church with Hebrews 10:25. The Church isn’t perfect—but we need each other to grow, correct, and worship together in Christ."
  },
  {
    title: "Come and Grow (Original)",
    url: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: "Testimony and invitation to Agape Life Fellowship. Emphasizes biblical teaching, midweek discipleship, and healing through fellowship—not hype, but real growth in Christ."
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: "A soulful version with bluesy guitar riffs and warmth. Celebrates healing in community and emphasizes Agape Life’s focus on midweek discipleship and growing in God’s Word together."
  },
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: "A gospel-blues critique of cultural Christianity. It challenges listeners to follow the real Jesus—not just a patriotic symbol."
  },
  {
    title: "We Can't Let Go",
    url: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: "A bold anthem inspired by Acts 17 and Ezekiel 33. Calls the Church to awaken from silence and speak truth—because silence equals lost souls."
  },
  {
    title: "The Cry Unheard",
    url: "https://www.youtube.com/embed/lZyDvOS5iIQ",
    description: "Inspired by a 2009 photo and Proverbs 21:13 — a reflection on listening to the cry of the poor and not turning away from those in need."
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    url: "https://www.youtube.com/embed/BZKlUIWSv4E",
    description: "Rooted in 2 Corinthians 5:17. A victorious anthem about leaving the old life behind and embracing new identity in Christ."
  },
  {
    title: "Are You Truly Born Again? (Metal Version)",
    url: "https://www.youtube.com/embed/2DjXCaqsNpk",
    description: "Heavy and piercing. Confronts religious games with John 3. A challenge to cultural Christianity with unapologetic boldness."
  },
  {
    title: "Are You Truly Born Again? (Rock Version)",
    url: "https://www.youtube.com/embed/yK4YxAU5e_E",
    description: "A melodic take on the same message: Is your faith real or just routine? Draws from John 3 and Romans 12."
  },
  {
    title: "Sing Hallelujah",
    url: "https://www.youtube.com/embed/HZYPymgsTNU",
    description: "Inspired by Revelation 15:3–4, 19:1–10. Worshipful yet upbeat. Reminds us that our hallelujah is always welcome before the throne."
  },
  {
    title: "Why Do We Go After Worthless Idols",
    url: "https://www.youtube.com/embed/6DSL94G6Tko",
    description: "From Jeremiah 2:5 and Romans 1. A lament for how we trade God’s glory for empty things. A prophetic call back to the living water."
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    url: "https://www.youtube.com/embed/QNN2oaTuWMM",
    description: "Inspired by 2 Timothy 2:3–4. A gritty battle cry for spiritual warriors fighting for souls—not applause."
  },
  {
    title: "Yet I Will Rejoice",
    url: "https://www.youtube.com/embed/NfZtq1BN5LU",
    description: "From Habakkuk 3:17–18. A raw, faithful declaration: Even in loss, I will worship. Not for what I see, but for who God is."
  },
  {
    title: "Does God Revolve Around You?",
    url: "https://www.youtube.com/embed/Q4_JYGVL8Wo",
    description: "Challenges self-centered faith. Do we serve God—or expect Him to orbit our desires? Sharp and urgent."
  },
  {
    title: "Dust to Dust",
    url: "https://www.youtube.com/embed/goYC-AN2Rzs",
    description: "A sober reflection on mortality and purpose. From dust we came and return—but what will we do with the life between?"
  },
  {
    title: "Disturb the City (Version 2)",
    url: "https://www.youtube.com/embed/jGJYsMzGUls",
    description: "Reimagined cry for revival from Acts 17:6. Shakes the status quo with bold truth and urgency."
  },
  {
    title: "Disturb the City (Original)",
    url: "https://www.youtube.com/embed/QLz4KNQmrAo",
    description: "The raw version of the above — an unfiltered call to stir spiritual complacency and disrupt with the gospel."
  },
  {
    title: "Disciple or Fan",
    url: "https://www.youtube.com/embed/FulLRuDHai0",
    description: "Are you truly following Jesus or just cheering from the stands? Based on Luke 9:23 and John 6."
  },
  {
    title: "From Where I Stand",
    url: "https://www.youtube.com/embed/eOtEThVwtTs",
    description: "Reflects on spiritual survival from Jonah 2 and Psalm 88. Even in silence and darkness, God hears."
  },
  {
    title: "Accident or Design",
    url: "https://www.youtube.com/embed/kJU5JDUgItY",
    description: "Is life random or intentional? This song challenges evolution’s emptiness and affirms we are fearfully and wonderfully made."
  },
  {
    title: "When Minds Meet Machine",
    url: "https://www.youtube.com/embed/Q7cg_SLXDm4",
    description: "Tension between human identity and AI culture. A call to stay grounded in truth while technology evolves."
  },
  {
    title: "Strength in Surrender",
    url: "https://www.youtube.com/embed/ZHfX1J60YcA",
    description: "A worshipful anthem about laying down our pride and finding power in trusting Christ alone."
  }
];

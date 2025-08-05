const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/-SrZNafvoio",
    short: "Confronts self-deception and surface-level faith. Inspired by 2 Corinthians 13:5.",
    long: "“Are You Living a Lie” presents a musically driven, lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ. While its delivery feels intimate and declarative, it is sung throughout with expressive phrasing—blending poetic lyricism and melodic cadence."
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/Imp4sM4-7g0",
    short: "A call to shout in worship—TERUAH style. Loud, raw praise that breaks down walls (Psalm 100:1–2).",
    long: "“Not Just Another Pretty Voice” is a passionate declaration that worship isn’t about vocal polish — it’s about power. Drawing from the biblical idea of 'teruah' (a loud, joyful noise), the song urges believers to lift up a raw, authentic cry of praise that breaks chains and ushers in spiritual breakthrough."
  },
  {
    title: "The Temple of the Living God",
    url: "https://www.youtube.com/embed/93E1lOJSq6I",
    short: "A challenge to live holy and set apart. Based on 2 Corinthians 6:14–7:1.",
    long: "This song is a bold call to holiness in a compromised age. Drawing directly from 2 Corinthians 6:14–7:1, it challenges believers to be truly set apart from the world — not just in words, but in lifestyle, worship, and witness. It exposes the spiritual dangers of unequally yoked living, worldly compromise, and halfhearted faith. “The Temple of the Living God” reminds us that we are not our own — we are God’s dwelling place. The lyrics call the Church to reclaim its sacred identity and live in purity, reverence, and power."
  },
  {
    title: "Why Go to Church?",
    url: "https://www.youtube.com/embed/KIF8zRQWsis",
    short: "Answers common objections and gives biblical reasons for gathering with believers (Hebrews 10:25).",
    long: "This song addresses one of the most common modern objections to Christian life: “Why do I even need to go to church?” It’s a heartfelt yet confrontational answer to the rise of isolation, hurt from past church experiences, and the cultural drift toward “just me and Jesus” Christianity. Rooted in Hebrews 10:25, it affirms the importance of gathering with other believers—not out of obligation, but because it’s essential for encouragement, growth, correction, worship, and spiritual warfare. The tone is compassionate but clear: the Church isn’t perfect, but God still calls us to be part of His Body — together."
  },
  {
    title: "Come and Grow (Agape Life Fellowship)",
    url: "https://www.youtube.com/embed/8JGBLmRi14M",
    short: "An invitation to heal and grow in biblical community. Written for Agape Life Fellowship.",
    long: "🎶 Come and Grow (Original)\nThe original version of “Come and Grow” serves as both a personal testimony and a heartfelt invitation.\nIt was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.\nThe lyrics affirm that healing happens in healthy fellowship.\nIt’s not about hype or showmanship — it’s about real people growing together under the love and truth of Christ."
  },
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/9OQmrhu7UPY",
    short: "A bluesy call to examine cultural Christianity and find the real Jesus.",
    long: "This song contrasts empty religion with true faith and challenges listeners to examine whether they’re following Christ or just waving a flag. With alternating male and female vocals and blues-rock grit, the song cuts through the noise of Americanized Christianity and points listeners to the real Jesus — not just a patriotic symbol, but a crucified Savior."
  },
  {
    title: "We Can’t Let Go",
    url: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    short: "A bold, urgent call for believers to wake up and speak truth.",
    long: "“We Can’t Let Go” — a bold and urgent anthem calling believers to awaken from spiritual passivity.\nInspired by Acts 17 and Ezekiel 33, the song issues a wake-up call to Christians who’ve grown silent in a dark and idol-filled world. It challenges the Church to be lightbearers, watchmen, and vocal heralds of truth—emphasizing that silence equals complicity and lost souls. It’s not just musical; it’s missional."
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://www.youtube.com/embed/skXVC7SjMIg",
    short: "A soulful version of 'Come and Grow' with a bluesy invitation to healing community.",
    long: "🎵 Come and Grow (Blues R&B)\nThis soulful R&B arrangement of “Come and Grow” draws listeners into a warm and welcoming worship atmosphere.\nIt’s a celebration of God’s healing work in community — especially for those who have been hurt or disillusioned by church in the past.\nWith bluesy guitar riffs and a laid-back groove, the song paints a picture of a place where wounded hearts can find hope again.\nIt emphasizes the call to grow deeper in God’s Word and to walk together in love, humility, and grace.\nIt was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds."
  },

  // ➡️ I will continue with the next batch of songs in the following message (this list is long and we’re printing it cleanly)
];

{
  title: "The Temple of the Living God",
  url: "https://www.youtube.com/embed/93E1lOJSq6I",
  shortDescription: "A challenge to live holy and set apart. Based on 2 Corinthians 6:14–7:1.",
  longDescription: `This song is a bold call to holiness in a compromised age. Drawing directly from 2 Corinthians 6:14–7:1,
it challenges believers to be truly set apart from the world — not just in words, but in lifestyle, worship, and witness.
It exposes the spiritual dangers of unequally yoked living, worldly compromise, and halfhearted faith. “The Temple of the Living God”
reminds us that we are not our own — we are God’s dwelling place. The lyrics call the Church to reclaim its sacred identity
and live in purity, reverence, and power. It’s a prophetic cry for the people of God to stop blending in and start standing out.`
},
{
  title: "Why Go to Church?",
  url: "https://www.youtube.com/embed/KIF8zRQWsis",
  shortDescription: "Answers common objections and gives biblical reasons for gathering with believers (Hebrews 10:25).",
  longDescription: `This song addresses one of the most common modern objections to Christian life: “Why do I even need to go to church?”
It’s a heartfelt yet confrontational answer to the rise of isolation, hurt from past church experiences, and the cultural drift toward
“just me and Jesus” Christianity. Rooted in Hebrews 10:25, it affirms the importance of gathering with other believers—not out of obligation,
but because it’s essential for encouragement, growth, correction, worship, and spiritual warfare. The tone is compassionate but clear:
the Church isn’t perfect, but God still calls us to be part of His Body — together.`
},
  {
    title: "Come and Grow (Original)",
    url: "https://www.youtube.com/embed/8JGBLmRi14M",
    shortDescription: "An invitation to grow in Christ through community. Written for Agape Life Fellowship.",
    longDescription: `🎶 Come and Grow (Original)
The original version of “Come and Grow” serves as both a personal testimony and a heartfelt invitation.
It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.
The lyrics affirm that healing happens in healthy fellowship.
It’s not about hype or showmanship — it’s about real people growing together under the love and truth of Christ.`
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://www.youtube.com/embed/skXVC7SjMIg",
    shortDescription: "A soulful R&B version celebrating healing in community. For Agape Life Fellowship.",
    longDescription: `🎵 Come and Grow (Blues R&B)
This soulful R&B arrangement of “Come and Grow” draws listeners into a warm and welcoming worship atmosphere.
It’s a celebration of God’s healing work in community — especially for those who have been hurt or disillusioned by church in the past.
With bluesy guitar riffs and a laid-back groove, the song paints a picture of a place where wounded hearts can find hope again.
It emphasizes the call to grow deeper in God’s Word and to walk together in love, humility, and grace.
It was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.`
  },
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/9OQmrhu7UPY",
    shortDescription: "A blues-rock critique of cultural Christianity and call to true surrender.",
    longDescription: `🎸 Jesus and Bocephus
“Jesus and Bocephus” is a gritty response to cultural Christianity and empty patriotism.
The song contrasts hollow religious symbolism with the real call to follow Christ — not just wave a flag.
With alternating male and female vocals, it cuts through Americanized Christianity and calls listeners to surrender to the crucified Savior.
It’s a challenge to ask: Are we really following Jesus, or just using His name?`
  },
  {
    title: "We Can’t Let Go",
    url: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    shortDescription: "A wake-up call for the Church to rise and speak truth in a dark world.",
    longDescription: `🔥 We Can’t Let Go
“We Can’t Let Go” — a bold and urgent anthem calling believers to awaken from spiritual passivity.
Inspired by Acts 17 and Ezekiel 33, the song issues a wake-up call to Christians who’ve grown silent in a dark and idol-filled world.
It challenges the Church to be lightbearers, watchmen, and vocal heralds of truth — emphasizing that silence equals complicity and lost souls.
It’s not just musical; it’s missional.`
  },
  {
    title: "Depths Of My Distress",
    url: "https://www.youtube.com/embed/Rh69t81Co9Q",
    shortDescription: "A raw, emotional cry from the darkest places of spiritual pain.",
    longDescription: `🕳 Depths Of My Distress
Drawing inspiration from Jonah 2 and Psalm 88, “Depths Of My Distress” is a raw, emotional cry from the darkest places of spiritual pain.
The song gives voice to the believer who feels abandoned, overwhelmed, or silenced — yet still clings to hope.
With haunting tones and lament-style lyrics, it echoes the reality that God hears even our most broken prayers and meets us in the pit.`
  },
  {
    title: "His Holy Call",
    url: "https://www.youtube.com/embed/GyccPooWTrc",
    shortDescription: "A compelling invitation to surrender everything to the Lord’s purpose.",
    longDescription: `📯 His Holy Call
“His Holy Call” is a compelling invitation to surrender everything to the Lord’s purpose.
With a tone that blends urgency and tenderness, the song explores what it means to answer God’s call — not just to believe, but to follow.
It reflects themes of obedience, sacrifice, and the cost of discipleship, urging listeners to respond to God’s voice with wholehearted devotion.`
  },
  {
    title: "Depths Of My Distress",
    url: "https://www.youtube.com/embed/Rh69t81Co9Q",
    shortDescription: "A raw, emotional cry from the darkest places of spiritual pain.",
    longDescription: `🕳 Depths Of My Distress
Drawing inspiration from Jonah 2 and Psalm 88, “Depths Of My Distress” is a raw, emotional cry from the darkest places of spiritual pain.
The song gives voice to the believer who feels abandoned, overwhelmed, or silenced — yet still clings to hope.
With haunting tones and lament-style lyrics, it echoes the reality that God hears even our most broken prayers and meets us in the pit.`
  },
  {
    title: "His Holy Call",
    url: "https://www.youtube.com/embed/GyccPooWTrc",
    shortDescription: "A compelling invitation to surrender everything to the Lord’s purpose.",
    longDescription: `📯 His Holy Call
“His Holy Call” is a compelling invitation to surrender everything to the Lord’s purpose.
With a tone that blends urgency and tenderness, the song explores what it means to answer God’s call — not just to believe, but to follow.
It reflects themes of obedience, sacrifice, and the cost of discipleship, urging listeners to respond to God’s voice with wholehearted devotion.`
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    url: "https://www.youtube.com/embed/BZKlUIWSv4E",
    shortDescription: "A victorious anthem about transformation through Christ.",
    longDescription: `✨ A New Creation (Behold—the New Has Come)
Rooted in 2 Corinthians 5:17, “A New Creation” celebrates the radical transformation that takes place in Christ.
It’s a victorious anthem about leaving the old life behind and stepping into the freedom of God's grace.
The lyrics reflect themes of identity, redemption, and renewal — affirming that in Jesus, we are not just improved — we are made new.`
  },
  {
    title: "Are You Truly Born Again? (Metal Version)",
    url: "https://www.youtube.com/embed/2DjXCaqsNpk",
    shortDescription: "A blistering metal track that confronts superficial faith.",
    longDescription: `🔥 Are You Truly Born Again? (Metal Version)
With a blistering metal edge and piercing lyrics, this version of “Are You Truly Born Again?” confronts the listener with one of the most important spiritual questions.
It cuts through religious games and superficial faith to ask whether real transformation has taken place.
This song draws from John 3 and challenges cultural Christianity with unapologetic boldness.`
  },
  {
    title: "Are You Truly Born Again? (Rock Version)",
    url: "https://www.youtube.com/embed/yK4YxAU5e_E",
    shortDescription: "A melodic challenge to examine real transformation in Christ.",
    longDescription: `🎸 Are You Truly Born Again? (Rock Version)
This rock version of “Are You Truly Born Again?” delivers the same urgent message with a more melodic and accessible sound.
It invites reflection without losing intensity, asking believers to examine whether their faith is rooted in real transformation or just routine.
Drawing from John 3 and Romans 12, the song confronts spiritual complacency and calls for genuine rebirth through Christ.`
  },
  {
    title: "Sing Hallelujah",
    url: "https://www.youtube.com/embed/HZYPymgsTNU",
    shortDescription: "An upbeat and worshipful response to God’s majesty.",
    longDescription: `🙌 Sing Hallelujah
Inspired by Revelation 15:3–4, Revelation 19:1–5, and Revelation 19:6–10, “Sing Hallelujah” blends worshipful simplicity with an upbeat spirit.
The song encourages listeners to lift their voices in response to God's majesty and righteous judgment.
Whether in victory or hardship, the lyrics remind us that our hallelujah is always welcome before the throne — echoing the eternal praises of the saints and angels in glory.`
  },
  {
    title: "Why Do We Go After Worthless Idols",
    url: "https://www.youtube.com/embed/6DSL94G6Tko",
    shortDescription: "A prophetic lament over the Church’s pursuit of empty things.",
    longDescription: `🪞 Why Do We Go After Worthless Idols
Rooted in Jeremiah 2:5 and Romans 1, “Why Do We Go After Worthless Idols” is a prophetic lament over the Church’s pursuit of empty things.
The song questions why we trade the glory of God for things that cannot satisfy.
With gritty honesty and raw instrumentation, it exposes the idols we tolerate — success, comfort, image — and calls believers to return to the fountain of living water.`
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    url: "https://www.youtube.com/embed/QNN2oaTuWMM",
    shortDescription: "A gritty battle cry for spiritual warriors.",
    longDescription: `⚔️ This Ain’t for Awards—It’s for War
“This Ain’t for Awards—It’s for War” is a gritty battle cry for spiritual warriors.
The song rejects shallow recognition and performance-based Christianity in favor of bold obedience and spiritual warfare.
Inspired by 2 Timothy 2:3–4, it calls believers to endure hardship as good soldiers of Christ, fighting for souls — not applause.`
  },
  {
    title: "Yet I Will Rejoice",
    url: "https://www.youtube.com/embed/NfZtq1BN5LU",
    shortDescription: "A declaration of faith in the face of loss and hardship.",
    longDescription: `🌾 Yet I Will Rejoice
“Yet I Will Rejoice” is a declaration of faith in the face of loss, disappointment, or hardship.
Drawing from Habakkuk 3:17–18, the song echoes the biblical prophet’s resolve to praise God even when circumstances offer no reason to.
With stripped-down honesty and a steady build, it calls believers to cling to hope and choose worship — not because of what we see, but because of who God is.`
  },
  {
    title: "Does God Revolve Around You?",
    url: "https://www.youtube.com/embed/Q4_JYGVL8Wo",
    shortDescription: "Challenges self-centered faith with a call to surrender.",
    longDescription: `🌀 Does God Revolve Around You?
“Does God Revolve Around You?” challenges the self-centeredness that has crept into modern faith.
It asks hard questions about whether our view of God is truly biblical — or just an idol shaped in our own image.
With sharp lyrics and driving rhythm, the song confronts the idea that God exists to serve our desires, and instead calls listeners to a Christ-centered life of surrender.`
  },

  {
    title: "Dust to Dust",
    url: "https://www.youtube.com/embed/goYC-AN2Rzs",
    shortDescription: "Reflects on mortality and eternal purpose.",
    longDescription: `🌫 Dust to Dust
“Dust to Dust” reflects on the reality of mortality and the eternal significance of our choices.
It explores the tension between fleeting earthly life and the call to live for what truly matters — Christ and eternity.
With a solemn yet stirring tone, the song reminds listeners that from dust we came, and to dust we’ll return — so how will we spend the life between?`
  },
  {
    title: "Disturb the City (Version 2)",
    url: "https://www.youtube.com/embed/jGJYsMzGUls",
    shortDescription: "A reimagined cry for revival from Acts 17:6.",
    longDescription: `🚨 Disturb the City (Version 2)
“Disturb the City (Version 2)” is a reimagined cry for revival, drawing from Acts 17:6.
The lyrics call believers to shake up the spiritual status quo and boldly proclaim Christ in a darkened world.
With an edgier sound and sharpened message, this version intensifies the urgency to be a disruptive force for the Kingdom — not with noise, but with truth.`
  },
  {
    title: "Disturb the City (Original)",
    url: "https://www.youtube.com/embed/QLz4KNQmrAo",
    shortDescription: "Original version inspired by Acts 17:6.",
    longDescription: `🔥 Disturb the City (Original)
“Disturb the City (Original)” is a bold declaration drawn from Acts 17:6, where early Christians were accused of turning the world upside down.
This version brings a raw, unfiltered cry for believers to rise up, shake spiritual complacency, and cause holy disruption in a sleeping world.
It’s a charge to stand firm, speak truth, and stir the city with the gospel of Christ.`
  },
  {
    title: "Disciple or Fan",
    url: "https://www.youtube.com/embed/FulLRuDHai0",
    shortDescription: "Asks whether we’re truly following Jesus—or just watching.",
    longDescription: `👣 Disciple or Fan
“Disciple or Fan” asks a piercing question at the heart of true Christianity: Are we truly following Jesus, or just cheering Him on from a distance?
The song contrasts casual admiration with costly discipleship, drawing from Luke 9:23 and John 6.
With a challenging tone and rhythmic drive, it calls listeners to move beyond comfort and into real, surrendered obedience.`
  },
  {
    title: "Disturb the City (Original)",
    url: "https://www.youtube.com/embed/QLz4KNQmrAo",
    shortDescription: "Original version inspired by Acts 17:6.",
    longDescription: `🔥 Disturb the City (Original)
“Disturb the City (Original)” is a bold declaration drawn from Acts 17:6, where early Christians were accused of turning the world upside down.
This version brings a raw, unfiltered cry for believers to rise up, shake spiritual complacency, and cause holy disruption in a sleeping world.
It’s a charge to stand firm, speak truth, and stir the city with the gospel of Christ.`
  },
  {
    title: "Disciple or Fan",
    url: "https://www.youtube.com/embed/FulLRuDHai0",
    shortDescription: "Asks whether we’re truly following Jesus—or just watching.",
    longDescription: `👣 Disciple or Fan
“Disciple or Fan” asks a piercing question at the heart of true Christianity: Are we truly following Jesus, or just cheering Him on from a distance?
The song contrasts casual admiration with costly discipleship, drawing from Luke 9:23 and John 6.
With a challenging tone and rhythmic drive, it calls listeners to move beyond comfort and into real, surrendered obedience.`
  },

  {
    title: "From Where I Stand",
    url: "https://www.youtube.com/embed/eOtEThVwtTs",
    shortDescription: "Reflective blues-tinged cry from spiritual survival.",
    longDescription: `🪞 From Where I Stand
“From Where I Stand” is a reflective, blues-tinged anthem that speaks from a place of spiritual survival and tested faith.
Inspired by Jonah 2 and Psalm 88, the song wrestles with feelings of abandonment, darkness, and the longing to be heard by God.
Yet even in the depths, it holds to a sliver of hope — expressing that no cry is ever truly lost when it’s lifted to the Lord.`
  },
  {
    title: "The Taxman's Shadow",
    url: "https://www.youtube.com/embed/your-url-here", // Replace with correct URL
    shortDescription: "Explores tension between duty, conscience, and faith.",
    longDescription: `💰 The Taxman's Shadow
“The Taxman's Shadow” explores the complex tension between civic duty and spiritual conviction.
Drawing inspiration from Jesus’ words in Matthew 22:21, the song considers what it means to live faithfully in a world that demands allegiance to systems, yet calls us to seek first the Kingdom of God.
It’s a reminder that while we live in this world, we are not of it — and must weigh our loyalties with discernment and courage.`
  },

  {
    title: "Accident or Design",
    url: "https://www.youtube.com/embed/kJU5JDUgItY",
    shortDescription: "Challenges evolution with purpose in Christ.",
    longDescription: `🧬 Accident or Design
“Accident or Design” confronts the question of human purpose in a skeptical age.
It contrasts the empty logic of evolutionary chance with the profound truth of being fearfully and wonderfully made.
With a sharp lyrical edge, the song challenges listeners to see themselves not as random products of time and matter, but as intentional creations with eternal value in the eyes of God.`
  },
  {
    title: "When Minds Meet Machine",
    url: "https://www.youtube.com/embed/Q7cg_SLXDm4",
    shortDescription: "Explores AI, humanity, and spiritual boundaries.",
    longDescription: `🤖 When Minds Meet Machine
“When Minds Meet Machine” explores the collision of artificial intelligence and the human soul.
It raises questions about what it means to be human in a technological age and warns of the spiritual risks of forgetting our divine origin.
The song wrestles with themes of identity, control, and the blurring line between creation and Creator — calling believers to anchor their minds in the mind of Christ.`
  },

  {
    title: "The Cry Unheard",
    url: "https://www.youtube.com/embed/lZyDvOS5iIQ",
    shortDescription: "A lament for the unheard cries of the poor.",
    longDescription: `💔 The Cry Unheard
“The Cry Unheard” was inspired by a photo I took back in 2009, on the southern edge of Bricktown in Oklahoma City.
That image stuck with me, and then this scripture struck a deep chord in my soul:
Proverbs 21:13 (ESV) — “Whoever closes his ear to the cry of the poor will himself call out and not be answered.”
This song gives voice to that cry — a musical lament and a spiritual wake-up call not to ignore the broken, the voiceless, or the forgotten.`
  }

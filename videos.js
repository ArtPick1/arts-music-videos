// videos.js – Part 1 of 2 (Songs 1–14)

const videos = [
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/-SrZNafvoio",
    description: "Confronts self-deception and surface-level faith. Inspired by 2 Corinthians 13:5.",
    moreInfo: `“Are You Living a Lie” presents a musically driven, lyrical reflection on spiritual identity, the emptiness of worldly pursuits, and the invitation to surrender fully to Christ. While its delivery feels intimate and declarative, it is sung throughout with expressive phrasing—blending poetic lyricism and melodic cadence.`
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/Imp4sM4-7g0",
    description: "A call to shout in worship—TERUAH style. Loud, raw praise that breaks down walls (Psalm 100:1–2).",
    moreInfo: `“Not Just Another Pretty Voice” calls worshippers to a raw and unfiltered praise rooted in the biblical concept of *teruah* — a shout of triumph and spiritual war cry. This isn’t about polished performance; it’s about breakthrough. Drawing on Psalm 100:1–2, the song dares listeners to worship with abandon — not for show, but as a spiritual weapon that tears down walls.`
  },
  {
    title: "The Temple of the Living God",
    url: "https://www.youtube.com/embed/93E1lOJSq6I",
    description: "A challenge to live holy and set apart. Based on 2 Corinthians 6:14–7:1.",
    moreInfo: `This song is a bold call to holiness in a compromised age. Drawing directly from 2 Corinthians 6:14–7:1, it challenges believers to be truly set apart from the world — not just in words, but in lifestyle, worship, and witness. It exposes the spiritual dangers of unequally yoked living, worldly compromise, and halfhearted faith. “The Temple of the Living God” reminds us that we are not our own — we are God’s dwelling place. The lyrics call the Church to reclaim its sacred identity and live in purity, reverence, and power. It’s a prophetic cry for the people of God to stop blending in and start standing out.`
  },
  {
    title: "Why Go to Church?",
    url: "https://www.youtube.com/embed/KIF8zRQWsis",
    description: "Answers common objections and gives biblical reasons for gathering with believers (Hebrews 10:25).",
    moreInfo: `This song addresses one of the most common modern objections to Christian life: “Why do I even need to go to church?” It’s a heartfelt yet confrontational answer to the rise of isolation, hurt from past church experiences, and the cultural drift toward “just me and Jesus” Christianity. Rooted in Hebrews 10:25, it affirms the importance of gathering with other believers—not out of obligation, but because it’s essential for encouragement, growth, correction, worship, and spiritual warfare. The tone is compassionate but clear: the Church isn’t perfect, but God still calls us to be part of His Body — together.`
  },
  {
    title: "Come and Grow (Original)",
    url: "https://www.youtube.com/embed/8JGBLmRi14M",
    description: "An invitation to grow in biblical fellowship. Written for Agape Life Fellowship.",
    moreInfo: `🎶 Come and Grow (Original)\nThe original version of “Come and Grow” serves as both a personal testimony and a heartfelt invitation.\nIt was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.\nThe lyrics affirm that healing happens in healthy fellowship.\nIt’s not about hype or showmanship — it’s about real people growing together under the love and truth of Christ.`
  },
  {
    title: "Come and Grow (Blues R&B)",
    url: "https://www.youtube.com/embed/skXVC7SjMIg",
    description: "A soulful, bluesy version celebrating healing through fellowship and grace.",
    moreInfo: `🎵 Come and Grow (Blues R&B)\nThis soulful R&B arrangement of “Come and Grow” draws listeners into a warm and welcoming worship atmosphere.\nIt’s a celebration of God’s healing work in community — especially for those who have been hurt or disillusioned by church in the past.\nWith bluesy guitar riffs and a laid-back groove, the song paints a picture of a place where wounded hearts can find hope again.\nIt emphasizes the call to grow deeper in God’s Word and to walk together in love, humility, and grace.\nIt was written for Agape Life Fellowship and highlights the church’s focus on biblical teaching, midweek discipleship, and spiritual recovery from church wounds.`
  },
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/9OQmrhu7UPY",
    description: "A blues-rock confrontation of cultural Christianity and the real Jesus.",
    moreInfo: `“Jesus and Bocephus” is a gritty response to cultural Christianity and the confusion of patriotism with true discipleship. This blues-rock song challenges listeners to examine whether they’re following Christ — or just waving a flag. With alternating male and female vocals, it calls out hollow religion and points to the crucified Savior who demands more than lip service.`
  },
  {
    title: "We Can’t Let Go",
    url: "https://www.youtube.com/embed/0lBXQ7u8Z6g",
    description: "A bold and urgent anthem calling believers to awaken from spiritual passivity.",
    moreInfo: `“We Can’t Let Go” — a bold and urgent anthem calling believers to awaken from spiritual passivity.\nInspired by Acts 17 and Ezekiel 33, the song issues a wake-up call to Christians who’ve grown silent in a dark and idol-filled world. It challenges the Church to be lightbearers, watchmen, and vocal heralds of truth—emphasizing that silence equals complicity and lost souls.\nIt’s not just musical; it’s missional.`
  },
  {
    title: "Depths Of My Distress",
    url: "https://www.youtube.com/embed/Rh69t81Co9Q",
    description: "A raw cry from spiritual darkness — inspired by Jonah 2 and Psalm 88.",
    moreInfo: `Drawing inspiration from Jonah 2 and Psalm 88, “Depths Of My Distress” is a raw, emotional cry from the darkest places of spiritual pain.\nThe song gives voice to the believer who feels abandoned, overwhelmed, or silenced — yet still clings to hope.\nWith haunting tones and lament-style lyrics, it echoes the reality that God hears even our most broken prayers and meets us in the pit.`
  },
  {
    title: "His Holy Call",
    url: "https://www.youtube.com/embed/GyccPooWTrc",
    description: "An urgent and tender call to follow Christ in full surrender.",
    moreInfo: `“His Holy Call” is a compelling invitation to surrender everything to the Lord’s purpose.\nWith a tone that blends urgency and tenderness, the song explores what it means to answer God’s call — not just to believe, but to follow.\nIt reflects themes of obedience, sacrifice, and the cost of discipleship, urging listeners to respond to God’s voice with wholehearted devotion.`
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    url: "https://www.youtube.com/embed/BZKlUIWSv4E",
    description: "A victorious anthem of identity and transformation in Christ.",
    moreInfo: `Rooted in 2 Corinthians 5:17, “A New Creation” celebrates the radical transformation that takes place in Christ.\nIt’s a victorious anthem about leaving the old life behind and stepping into the freedom of God's grace.\nThe lyrics reflect themes of identity, redemption, and renewal — affirming that in Jesus, we are not just improved — we are made new.`
  },
  {
    title: "Are You Truly Born Again? (Metal Version)",
    url: "https://www.youtube.com/embed/2DjXCaqsNpk",
    description: "A blistering challenge to superficial faith, drawn from John 3.",
    moreInfo: `With a blistering metal edge and piercing lyrics, this version of “Are You Truly Born Again?” confronts the listener with one of the most important spiritual questions.\nIt cuts through religious games and superficial faith to ask whether real transformation has taken place.\nThis song draws from John 3 and challenges cultural Christianity with unapologetic boldness.`
  },
  {
    title: "Are You Truly Born Again? (Rock Version)",
    url: "https://www.youtube.com/embed/yK4YxAU5e_E",
    description: "A melodic rock take on spiritual rebirth and authentic faith.",
    moreInfo: `This rock version of “Are You Truly Born Again?” delivers the same urgent message with a more melodic and accessible sound.\nIt invites reflection without losing intensity, asking believers to examine whether their faith is rooted in real transformation or just routine.\nDrawing from John 3 and Romans 12, the song confronts spiritual complacency and calls for genuine rebirth through Christ.`
  },
  {
    title: "Sing Hallelujah",
    url: "https://www.youtube.com/embed/HZYPymgsTNU",
    description: "A vibrant call to praise — inspired by Revelation 15 and 19.",
    moreInfo: `Inspired by Revelation 15:3–4, Revelation 19:1–5, and Revelation 19:6–10, “Sing Hallelujah” blends worshipful simplicity with an upbeat spirit.\nIt encourages listeners to lift their voices in response to God's majesty and righteous judgment.\nWhether in victory or hardship, the lyrics remind us that our hallelujah is always welcome before the throne — echoing the eternal praises of the saints and angels in glory.`
  }
];

videos.push(
  {
    title: "Why Do We Go After Worthless Idols",
    url: "https://www.youtube.com/embed/6DSL94G6Tko",
    description: "A prophetic lament over idolatry in the modern Church.",
    moreInfo: `Rooted in Jeremiah 2:5 and Romans 1, “Why Do We Go After Worthless Idols” is a prophetic lament over the Church’s pursuit of empty things.\nThe song questions why we trade the glory of God for things that cannot satisfy.\nWith gritty honesty and raw instrumentation, it exposes the idols we tolerate — success, comfort, image — and calls believers to return to the fountain of living water.`
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    url: "https://www.youtube.com/embed/QNN2oaTuWMM",
    description: "A gritty battle cry for bold obedience and spiritual warfare.",
    moreInfo: `“This Ain’t for Awards—It’s for War” is a gritty battle cry for spiritual warriors.\nThe song rejects shallow recognition and performance-based Christianity in favor of bold obedience and spiritual warfare.\nInspired by 2 Timothy 2:3–4, it calls believers to endure hardship as good soldiers of Christ, fighting for souls — not applause.`
  },
  {
    title: "Yet I Will Rejoice",
    url: "https://www.youtube.com/embed/NfZtq1BN5LU",
    description: "A declaration of faith in the midst of loss or hardship (Habakkuk 3:17–18).",
    moreInfo: `“Yet I Will Rejoice” is a declaration of faith in the face of loss, disappointment, or hardship.\nDrawing from Habakkuk 3:17–18, the song echoes the biblical prophet’s resolve to praise God even when circumstances offer no reason to.\nWith stripped-down honesty and a steady build, it calls believers to cling to hope and choose worship — not because of what we see, but because of who God is.`
  },
  {
    title: "Does God Revolve Around You?",
    url: "https://www.youtube.com/embed/Q4_JYGVL8Wo",
    description: "Challenges self-centered faith and calls for a Christ-centered life.",
    moreInfo: `“Does God Revolve Around You?” challenges the self-centeredness that has crept into modern faith.\nIt asks hard questions about whether our view of God is truly biblical — or just an idol shaped in our own image.\nWith sharp lyrics and driving rhythm, the song confronts the idea that God exists to serve our desires, and instead calls listeners to a Christ-centered life of surrender.`
  },
  {
    title: "Dust to Dust",
    url: "https://www.youtube.com/embed/goYC-AN2Rzs",
    description: "Reflects on mortality and living for eternal purpose.",
    moreInfo: `“Dust to Dust” reflects on the reality of mortality and the eternal significance of our choices.\nIt explores the tension between fleeting earthly life and the call to live for what truly matters — Christ and eternity.\nWith a solemn yet stirring tone, the song reminds listeners that from dust we came, and to dust we’ll return — so how will we spend the life between?`
  },
  {
    title: "Disturb the City (Version 2)",
    url: "https://www.youtube.com/embed/jGJYsMzGUls",
    description: "A reimagined cry for revival and holy disruption (Acts 17:6).",
    moreInfo: `“Disturb the City (Version 2)” is a reimagined cry for revival, drawing from Acts 17:6.\nThe lyrics call believers to shake up the spiritual status quo and boldly proclaim Christ in a darkened world.\nWith an edgier sound and sharpened message, this version intensifies the urgency to be a disruptive force for the Kingdom — not with noise, but with truth.`
  },
  {
    title: "Disturb the City (Original)",
    url: "https://www.youtube.com/embed/QLz4KNQmrAo",
    description: "A bold declaration to rise up and shake complacency (Acts 17:6).",
    moreInfo: `“Disturb the City (Original)” is a bold declaration drawn from Acts 17:6, where early Christians were accused of turning the world upside down.\nThis version brings a raw, unfiltered cry for believers to rise up, shake spiritual complacency, and cause holy disruption in a sleeping world.\nIt’s a charge to stand firm, speak truth, and stir the city with the gospel of Christ.`
  },
  {
    title: "Disciple or Fan",
    url: "https://www.youtube.com/embed/FulLRuDHai0",
    description: "Asks whether you're truly following Jesus or just admiring Him.",
    moreInfo: `“Disciple or Fan” asks a piercing question at the heart of true Christianity: Are we truly following Jesus, or just cheering Him on from a distance?\nThe song contrasts casual admiration with costly discipleship, drawing from Luke 9:23 and John 6.\nWith a challenging tone and rhythmic drive, it calls listeners to move beyond comfort and into real, surrendered obedience.`
  },
  {
    title: "From Where I Stand",
    url: "https://www.youtube.com/embed/eOtEThVwtTs",
    description: "A blues-tinged cry of survival and tested faith (Jonah 2, Psalm 88).",
    moreInfo: `“From Where I Stand” is a reflective, blues-tinged anthem that speaks from a place of spiritual survival and tested faith.\nInspired by Jonah 2 and Psalm 88, the song wrestles with feelings of abandonment, darkness, and the longing to be heard by God.\nYet even in the depths, it holds to a sliver of hope — expressing that no cry is ever truly lost when it’s lifted to the Lord.`
  },
  {
    title: "The Taxman's Shadow",
    url: "https://www.youtube.com/embed/RANDOMID01",
    description: "Explores the tension of wealth, conviction, and surrender in light of Christ’s call.",
    moreInfo: `“The Taxman's Shadow” draws from the story of Zacchaeus and the spiritual wrestling of one who profited from corruption.\nIt explores themes of greed, guilt, and grace — with conviction that Jesus sees through every mask.\nThe song urges listeners to come down from the tree of false security and surrender to Christ’s redemptive call.`
  },
  {
    title: "Accident or Design",
    url: "https://www.youtube.com/embed/kJU5JDUgItY",
    description: "Confronts the lie of chance with the truth of intentional creation.",
    moreInfo: `“Accident or Design” confronts the question of human purpose in a skeptical age.\nIt contrasts the empty logic of evolutionary chance with the profound truth of being fearfully and wonderfully made.\nWith a sharp lyrical edge, the song challenges listeners to see themselves not as random products of time and matter, but as intentional creations with eternal value in the eyes of God.`
  },
  {
    title: "When Minds Meet Machine",
    url: "https://www.youtube.com/embed/Q7cg_SLXDm4",
    description: "A prophetic warning about AI, identity, and what it means to be human.",
    moreInfo: `“When Minds Meet Machine” explores the rise of artificial intelligence and the threat of dehumanization.\nWith eerie tones and searching lyrics, it asks what happens when we trade image-bearing dignity for digital imitation.\nThe song is a wake-up call to reclaim what it means to be truly human — made in God’s image and called to truth.`
  },
  {
    title: "Strength in Surrender",
    url: "https://www.youtube.com/embed/ZHfX1J60YcA",
    description: "Powerful testimony of finding strength in yielding to God’s will.",
    moreInfo: `“Strength in Surrender” uncovers the paradox of biblical strength.\nThe song reflects on personal battles and the breakthrough that comes not from striving but from yielding.\nIt’s an anthem of trust, reminding believers that surrender to God is not defeat — it’s the only path to victory.`
  },
  {
    title: "The Cry Unheard",
    url: "https://www.youtube.com/embed/lZyDvOS5iIQ",
    description: "A lament for the ignored and unseen, inspired by Proverbs 21:13.",
    moreInfo: `“The Cry Unheard” was inspired by a photo I took back in 2009 on the southern edge of Bricktown in Oklahoma City.\nThat image stuck with me, and then this scripture — Proverbs 21:13 (ESV): “Whoever closes his ear to the cry of the poor will himself call out and not be answered.” — hit home in my soul.`
  }
);




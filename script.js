const videos = [
  {
    title: "Pit of Destruction (Psalm 40)",
    url: "https://www.youtube.com/embed/ZxMgrDx3_V8",
    description: "A gritty Christian rock anthem inspired by Psalm 40:1–3, Proverbs 28:13, and Hebrews 11:24–26 — a battle-cry of deliverance: “Out of the pit of destruction… Feet on the Rock — I will not fall!”",
    date: "2025-08-10"
  },
  {
    title: "Are You Living a Lie?",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A gritty and confrontational anthem calling out self-deception and hollow desires, urging transformation through Christ.",
    date: "2025-08-01"
  },
  {
    title: "Not Just Another Pretty Voice",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A bold statement that worship is about more than appearance or talent — it's about heart and truth before God.",
    date: "2025-07-28"
  },
  {
    title: "The Temple of the Living God",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A prophetic call to holiness, drawn from 2 Corinthians 6:14–7:1, urging the Church to live set apart for Christ.",
    date: "2025-07-25"
  },
  {
    title: "Why Go to Church?",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A compassionate yet direct song addressing why gathering with believers matters, rooted in Hebrews 10:25.",
    date: "2025-07-21"
  },
  {
    title: "Come and Grow (Agape Life Fellowship Promotional Song)",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "An invitation to join a community where God’s Word is taught, fellowship is strong, and healing happens.",
    date: "2025-07-17"
  },
  {
    title: "Jesus and Bocephus",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A soulful, blues-rock response to cultural Christianity, calling for genuine surrender to Christ.",
    date: "2025-07-14"
  },
  {
    title: "We Can’t Let Go",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "An urgent call to hold fast to the truth and the mission of the Gospel in a world of compromise.",
    date: "2025-07-06"
  },
  {
    title: "Depths Of My Distress",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A lament drawn from Jonah 2 and Psalm 88, crying out from the darkest places while clinging to hope.",
    date: "2025-07-05"
  },
  {
    title: "His Holy Call",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A call to surrender fully to God's purpose, following Him with wholehearted devotion.",
    date: "2025-07-02"
  },
  {
    title: "A New Creation (Behold—the New Has Come)",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "An anthem of transformation, celebrating the new life found in Christ (2 Corinthians 5:17).",
    date: "2025-06-30"
  },
  {
    title: "Are You Truly Born Again? (Metal Version)",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A blistering metal challenge to cultural Christianity, rooted in John 3.",
    date: "2025-06-28"
  },
  {
    title: "Are You Truly Born Again? (Rock Version)",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A melodic yet intense rock call for genuine transformation through Christ.",
    date: "2025-06-28"
  },
  {
    title: "Sing Hallelujah",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A worshipful celebration inspired by Revelation 15 and 19, echoing heaven’s song.",
    date: "2025-06-26"
  },
  {
    title: "Why Do We Go After Worthless Idols",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A prophetic lament over the Church’s pursuit of empty things instead of God’s glory.",
    date: "2025-06-23"
  },
  {
    title: "This Ain’t for Awards—It’s for War",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A battle cry for spiritual warriors, rejecting shallow recognition for Kingdom mission.",
    date: "2025-06-22"
  },
  {
    title: "Yet I Will Rejoice",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A declaration of praise in hardship, inspired by Habakkuk 3:17–18.",
    date: "2025-06-19"
  },
  {
    title: "Does God Revolve Around You?",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A sharp challenge to self-centered faith, calling for surrender to Christ’s lordship.",
    date: "2025-06-17"
  },
  {
    title: "Dust to Dust",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A sobering reflection on life’s brevity and the call to live for what matters eternally.",
    date: "2025-06-15"
  },
  {
    title: "Disturb the City (Version 2)",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A reimagined cry for revival, inspired by Acts 17:6.",
    date: "2025-06-14"
  },
  {
    title: "Disturb the City (Original)",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A raw call to shake spiritual complacency and proclaim Christ boldly.",
    date: "2025-06-13"
  },
  {
    title: "Disciple or Fan",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A challenge to move beyond casual admiration into real discipleship (Luke 9:23).",
    date: "2025-06-12"
  },
  {
    title: "From Where I Stand",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A blues-tinged reflection from a place of tested faith, inspired by Jonah 2 and Psalm 88.",
    date: "2025-06-11"
  },
  {
    title: "Accident or Design",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A lyrical confrontation of purposelessness, affirming God’s intentional creation.",
    date: "2025-06-09"
  },
  {
    title: "The Taxman's Shadow",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A storytelling song about sin, greed, and redemption.",
    date: "2025-06-09"
  },
  {
    title: "When Minds Meet Machine",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A rock reflection on the rise of AI and the call to keep our humanity rooted in Christ.",
    date: "2025-06-07"
  },
  {
    title: "Strength in Surrender",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A reminder that true strength is found in yielding to God’s will.",
    date: "2025-06-04"
  },
  {
    title: "The Cry Unheard",
    url: "https://www.youtube.com/embed/[VIDEO_ID]",
    description: "A convicting call to hear and respond to the needs of the poor (Proverbs 21:13).",
    date: "2025-06-03"
  }
];

export default videos;

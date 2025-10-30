
// videos.js (vA57) — Add new song at the top
// If you still have an older file with your full catalog loaded before this (as PREV_VIDEOS),
// this script will merge it so nothing is lost.

(function () {
  const NEW_VIDEOS = [
    {
      id: "B9J8fk7WRsA",
      title: "Lonesome Valley",
      date: "2025-10-30",
      tags: ["acoustic", "blues-rock", "testimony"],
      descriptionShort: "A rewrite and rebuttal to the traditional “You Got to Walk That Lonesome Valley”—from isolation to companionship in Christ.",
      descriptionLong: [
        "As I was searching YouTube for harmonica lessons, I ran across this song and listened to it. Immediately I realized how wrong theologically it was. I understood what they were trying to say, but it just wasn’t right—so I had to rewrite it.",
        "The earliest known version of “You Got to Walk That Lonesome Valley” comes from early 20th‑century American folk and gospel tradition. It appeared in hymnals like American Folk Songs for Religious Use (c. 1900–1915), and later was popularized by artists such as the Monroe Brothers and Woody Guthrie. The Million Dollar Quartet (Elvis Presley, Carl Perkins, Jerry Lee Lewis, Johnny Cash) also recorded “Jesus Walked That Lonesome Valley” with an extra verse.",
        "Because it’s public domain, the lyrics appear with small variations, but here’s the most commonly referenced traditional version:",
        "You Got to Walk That Lonesome Valley (Traditional Spiritual, Public Domain)\nYou got to walk that lonesome valley,\nYou got to walk it by yourself.\nAin’t nobody else can walk it for you,\nYou got to walk it by yourself.\n\nMy mother had to walk that lonesome valley,\nShe had to walk it by herself.\nAin’t nobody else could walk it for her,\nShe had to walk it by herself.\n\nMy father had to walk that lonesome valley,\nHe had to walk it by himself.\nAin’t nobody else could walk it for him,\nHe had to walk it by himself.\n\nJesus walked this lonesome valley,\nHe had to walk it by Himself.\nOh, nobody else could walk it for Him,\nHe had to walk it by Himself.\n\nYou got to walk that lonesome valley,\nYou got to walk it by yourself.\nAin’t nobody else can walk it for you,\nYou got to walk it by yourself.",
        "That’s the root lyric my version rewrites. The key difference is the message: the original says “you gotta walk it by yourself” (complete isolation before God). My rewrite transforms it into “you don’t walk it by yourself” — turning a lament into a testimony of Christ’s companionship and redemption."
      ].join("\n\n")
    }
  ];

  // Merge hook: if previous catalog is present, append it after the new song(s)
  const merged = Array.isArray(window.PREV_VIDEOS) ? [...NEW_VIDEOS, ...window.PREV_VIDEOS] : NEW_VIDEOS;

  // Expose globally for index.html and watch.html
  window.VIDEOS = merged;
})();

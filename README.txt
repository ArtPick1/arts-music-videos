ART — ONE-CLICK FIX (vA31)

This bundle ensures ALL of the following at once:
1) Visible banner on the page (top of header)
2) Full long description for “Alive in Christ”
3) Archive shows two items (“Voices in Your Head”, “No Looking Back”)
4) Facebook/Twitter previews show a correctly sized banner (banner-social.png)
5) Cache-busted manifest so you don’t see stale content

Deploy steps (please do all 4):
A) Upload/replace ALL files in this ZIP to your site repo/folder.
B) Open your site and hard refresh (Ctrl+F5 or Cmd+Shift+R).
C) Visit /videos.js?vA31 on your domain and confirm it lists THREE videos.
D) In Facebook Sharing Debugger, paste your homepage URL and click “Scrape Again”.

Troubleshooting:
- If the homepage still shows only one previous video, your live site is using an old manifest. The ?vA31 cache-buster in index.html/watch.html should fix this once uploaded.
- If Facebook still won’t show the banner image, open /banner-social.png directly in your browser on your domain to confirm it’s there. Then Scrape Again.
- Filenames are case sensitive. Keep “Website Banner.png” and “banner-social.png” exactly as-is.
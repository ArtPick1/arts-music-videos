// scripture.js

document.addEventListener("DOMContentLoaded", () => {
  const scriptureText = document.getElementById("scripture-text");

  fetch("verse.txt")
    .then(response => {
      if (!response.ok) {
        throw new Error("Verse file not found.");
      }
      return response.text();
    })
    .then(data => {
      const verses = data
        .split("\n")
        .map(v => v.trim())
        .filter(v => v.length > 0); // Remove empty lines

      if (verses.length === 0) {
        scriptureText.textContent = "No verses found.";
        return;
      }

      const randomIndex = Math.floor(Math.random() * verses.length);
      scriptureText.textContent = verses[randomIndex];
    })
    .catch(error => {
      scriptureText.textContent = "Error loading scripture.";
      console.error("Scripture load error:", error);
    });
});

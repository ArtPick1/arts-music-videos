document.addEventListener("DOMContentLoaded", () => {
  fetch("verse.txt")
    .then(response => {
      if (!response.ok) {
        throw new Error("Verse file not found.");
      }
      return response.text();
    })
    .then(text => {
      const lines = text.trim().split(/\r?\n/).filter(line => line.trim() !== "");
      const uniqueLines = [...new Set(lines)];
      const verse = uniqueLines.length > 0 ? uniqueLines[0] : "Verse not found.";
      document.getElementById("scripture-text").textContent = verse;
    })
    .catch(error => {
      document.getElementById("scripture-text").textContent = "Verse not found.";
      console.error("Error loading verse:", error);
    });
});

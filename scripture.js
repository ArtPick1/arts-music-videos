document.addEventListener("DOMContentLoaded", () => {
  fetch("verse.txt")
    .then(response => {
      if (!response.ok) {
        throw new Error("Verse not found.");
      }
      return response.text();
    })
    .then(text => {
      document.getElementById("scripture-text").textContent = text.trim();
    })
    .catch(error => {
      document.getElementById("scripture-text").textContent = "Verse not found.";
      console.error(error);
    });
});

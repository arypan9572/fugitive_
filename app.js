let xp = localStorage.getItem("xp") || 0;
localStorage.setItem("xp", xp);

function hostGame() {
  window.location.href = "game.html?role=cop";
}

function joinGame() {
  window.location.href = "game.html?role=fugitive";
}

function openInventory() {
  alert("XP: " + xp + "\n(Charms coming soon)");
}

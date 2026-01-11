// Roles
function hostGame() {
  document.getElementById("roleDisplay").innerText = "🚓 COP - Hosting Game";
  alert("Hosting Game (map and ping logic coming soon)");
}

function joinGame() {
  document.getElementById("roleDisplay").innerText = "🏃 FUGITIVE - Joining Game";
  alert("Joining Game (map and ping logic coming soon)");
}

// Inventory panel
function openInventory() {
  document.getElementById("inventory").classList.remove("hidden");
}
function closeInventory() {
  document.getElementById("inventory").classList.add("hidden");
}

// Fake Ping Timer
let pingSeconds = 20*60;
setInterval(() => {
  if (pingSeconds > 0) pingSeconds--;
  const min = Math.floor(pingSeconds/60).toString().padStart(2,'0');
  const sec = (pingSeconds%60).toString().padStart(2,'0');
  document.getElementById("ping-count").innerText = `${min}:${sec}`;
}, 1000);

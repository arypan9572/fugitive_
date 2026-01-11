function hostGame() {
  document.getElementById("roleDisplay").innerText = "🚓 COP - Hosting Game";
  alert("Hosting Game - map and mechanics coming next!");
}

function joinGame() {
  document.getElementById("roleDisplay").innerText = "🏃 FUGITIVE - Joining Game";
  alert("Joining Game - map and mechanics coming next!");
}

function openInventory() {
  document.getElementById("inventory").classList.remove("hidden");
}

function closeInventory() {
  document.getElementById("inventory").classList.add("hidden");
}

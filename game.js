const params = new URLSearchParams(window.location.search);
const role = params.get("role");

document.getElementById("roleText").innerText =
  role === "cop" ? "🚓 COP" : "🏃 FUGITIVE";

let totalTime = 120 * 60;
let pingTime = 20 * 60;

setInterval(() => {
  totalTime--;
  pingTime--;

  if (pingTime <= 0) {
    alert("📍 LOCATION PING!");
    pingTime = 20 * 60;
  }

  document.getElementById("time").innerText =
    Math.floor(totalTime / 60) + ":" + (totalTime % 60).toString().padStart(2, "0");

  document.getElementById("ping").innerText =
    Math.floor(pingTime / 60) + ":" + (pingTime % 60).toString().padStart(2, "0");

}, 1000);

function giveUp() {
  if (!confirm("Are you sure?")) return;
  if (!confirm("Are you REALLY sure?")) return;
  alert("You gave up.");
  window.location.href = "index.html";
}

// filename: script.js

/* ---------- Mobile menu ---------- */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

/* ---------- Live IST clock in footer ---------- */
const clock = document.querySelector("#clock");

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit",
    second: "2-digit", hour12: false
  }) + " IST";
}

updateClock();
setInterval(updateClock, 1000);

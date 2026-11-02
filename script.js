/* ===== YOUR INFORMATION ===== */
const myInfo = {
  name: "Darneil Jake B. Padaco",
  course: "Computer Science",
  yearLevel: "1st-Year",
  tagline: "Future Software Developer / Software Engineer",
  location: "Virac, Itogon, Benguet",
  email: "darneiljakepadaco@gmail.com",
  phone: "09765606176",
  github: "deji-28",

  // YOUR BIOGRAPHY: change the text between the quotation marks.
  // Keep it on one line and avoid typing a double quote (") inside it.
  bio: "I'm on a mission to master Java and Python. Right now I'm building foundational coding habits, writing clean scripts, and solving logic puzzles. I love the thrill of fixing a bug and seeing my code run successfully."
};

/* ===== FILL IN THE PAGE (no need to edit below) ===== */
document.querySelectorAll("[data-fill]").forEach(function (el) {
  el.textContent = myInfo[el.dataset.fill];
});

document.title = myInfo.name + " | " + myInfo.course + " Student";
document.getElementById("profilePhoto").alt = "Profile photo of " + myInfo.name;
document.getElementById("year").textContent = new Date().getFullYear();

const githubUrl = "https://github.com/" + myInfo.github;
["githubButton", "githubIcon"].forEach(function (id) {
  document.getElementById(id).href = githubUrl;
});

const mailUrl = "mailto:" + myInfo.email;
["emailButton", "emailIcon"].forEach(function (id) {
  document.getElementById(id).href = mailUrl;
});
document.getElementById("phoneLink").href = "tel:" + myInfo.phone;

/* ===== RED / BLUE THEME BUTTON ===== */
const themeButton = document.getElementById("themeButton");
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  const other = theme === "red" ? "blue" : "red";
  themeButton.textContent = other === "blue" ? "Blue" : "Red";
  themeButton.setAttribute("aria-label", "Switch to " + other + " theme");
  try { localStorage.setItem("theme", theme); } catch (error) {}
}

let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (error) {}
setTheme(savedTheme === "blue" ? "blue" : "red");

themeButton.addEventListener("click", function () {
  setTheme(root.getAttribute("data-theme") === "red" ? "blue" : "red");
});

/* ===== PROFILE PHOTO ===== */
// The placeholder stays until images/profile.jpg loads successfully
const profilePhoto = document.getElementById("profilePhoto");
const heroPhoto = document.getElementById("heroPhoto");
function showPhoto() { heroPhoto.classList.add("has-photo"); }
profilePhoto.addEventListener("load", showPhoto);
if (profilePhoto.complete && profilePhoto.naturalWidth > 0) { showPhoto(); }
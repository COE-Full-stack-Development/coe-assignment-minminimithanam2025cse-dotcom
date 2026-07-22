
const profileCard = document.getElementById("profile-card");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const skillsList = document.getElementById("skills-list");
const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill-btn");

toggleThemeBtn.addEventListener("click", function () {
  profileCard.classList.toggle("dark-theme");
});

addSkillBtn.addEventListener("click", function () {
  const skill = skillInput.value.trim();

  if (skill !== "") {
    const newSkill = document.createElement("li");
    newSkill.textContent = skill;
    skillsList.appendChild(newSkill);

    skillInput.value = "";
  }
});
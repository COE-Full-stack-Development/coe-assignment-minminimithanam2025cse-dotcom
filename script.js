const profileCard = document.getElementById('profile-card');
const skillsList = document.getElementById('skills-list');
const skillInput = document.getElementById('skill-input');
const skillCount = document.getElementById('skill-count');

function updateCount() {
  skillCount.textContent = `Total Skills: ${skillsList.children.length}`;
}

function addSkillItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  skillsList.appendChild(li);
  updateCount();
}

document.getElementById('toggle-theme-btn').addEventListener('click', () => {
  profileCard.classList.toggle('dark-theme');
});

document.getElementById('add-skill-btn').addEventListener('click', () => {
  const text = skillInput.value.trim();
  if (text) {
    addSkillItem(text);
    skillInput.value = '';
  }
});

skillInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const text = skillInput.value.trim();
    if (text) {
      addSkillItem(text);
      skillInput.value = '';
    }
  }
});
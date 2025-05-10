document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }

  const ageSpan = document.getElementById("age");
  if (ageSpan) {
    ageSpan.textContent = calculateAge("2001-03-21"); 
  }
});


function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}


function toggleSection(id) {
  const section = document.getElementById(id);
  if (section) {
    const isHidden = section.style.display === "none";
    section.style.display = isHidden ? "block" : "none";
  }
}

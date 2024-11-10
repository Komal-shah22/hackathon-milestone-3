
document.addEventListener("DOMContentLoaded", () => {
    const openResumeBtn = document.getElementById("openResumeBtn");
    const openFormBtn = document.getElementById("openFormBtn"); 

    if (openResumeBtn) {
        openResumeBtn.addEventListener("click", () => {
            window.open("resume.html", "_blank");
        });
    }
    if (openFormBtn) { 
        openFormBtn.addEventListener("click", () => {
            window.open("form.html", "_blank"); 
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle") as HTMLElement;
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });
    const toggleButton = document.getElementById("toggle-skills-button") as HTMLButtonElement;
    const skillsContent = document.getElementById("skills-content") as HTMLElement;

    toggleButton.addEventListener("click", () => {
        skillsContent.classList.toggle("hidden");
        toggleButton.textContent = skillsContent.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle") as HTMLElement;
    const body = document.body;
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
        themeToggle.classList.add("rotate-animation");
        setTimeout(() => themeToggle.classList.remove("rotate-animation"), 500); 
    });

    const toggleSkillsButton = document.getElementById("toggle-skills-button") as HTMLButtonElement;
    const skillsContent = document.getElementById("skills-content") as HTMLElement;

    toggleSkillsButton.addEventListener("click", () => {
        skillsContent.classList.toggle("hidden");
        toggleSkillsButton.textContent = skillsContent.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});
(() => {
    const themeToggle = document.querySelector('.theme-toggle') as HTMLElement | null;
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme');
            themeToggle.classList.add('rotate-animation');
            setTimeout(() => themeToggle.classList.remove('rotate-animation'), 500);
        });
    }
    const toggleSkillsButton = document.getElementById('toggle-skills-button') as HTMLButtonElement | null;
    const skillsContent = document.getElementById('skills-content') as HTMLElement | null;

    if (toggleSkillsButton && skillsContent) {
        toggleSkillsButton.addEventListener('click', () => {
            skillsContent.classList.toggle('hidden');
            toggleSkillsButton.textContent = skillsContent.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
        });
    }
})();

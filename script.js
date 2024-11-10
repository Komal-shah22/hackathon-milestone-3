document.addEventListener("DOMContentLoaded", function () {
    var openResumeBtn = document.getElementById("openResumeBtn");
    var openFormBtn = document.getElementById("openFormBtn");
    if (openResumeBtn) {
        openResumeBtn.addEventListener("click", function () {
            window.open("resume.html", "_blank");
        });
    }
    if (openFormBtn) {
        openFormBtn.addEventListener("click", function () {
            window.open("form.html", "_blank");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var themeToggle = document.querySelector(".theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });
    var toggleButton = document.getElementById("toggle-skills-button");
    var skillsContent = document.getElementById("skills-content");
    toggleButton.addEventListener("click", function () {
        skillsContent.classList.toggle("hidden");
        toggleButton.textContent = skillsContent.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var themeToggle = document.querySelector(".theme-toggle");
    var body = document.body;
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
        themeToggle.classList.add("rotate-animation");
        setTimeout(function () { return themeToggle.classList.remove("rotate-animation"); }, 500);
    });
    var toggleSkillsButton = document.getElementById("toggle-skills-button");
    var skillsContent = document.getElementById("skills-content");
    toggleSkillsButton.addEventListener("click", function () {
        skillsContent.classList.toggle("hidden");
        toggleSkillsButton.textContent = skillsContent.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
    });
});
(function () {
    var themeToggle = document.querySelector('.theme-toggle');
    var body = document.body;
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme');
            themeToggle.classList.add('rotate-animation');
            setTimeout(function () { return themeToggle.classList.remove('rotate-animation'); }, 500);
        });
    }
    var toggleSkillsButton = document.getElementById('toggle-skills-button');
    var skillsContent = document.getElementById('skills-content');
    if (toggleSkillsButton && skillsContent) {
        toggleSkillsButton.addEventListener('click', function () {
            skillsContent.classList.toggle('hidden');
            toggleSkillsButton.textContent = skillsContent.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
        });
    }
})();

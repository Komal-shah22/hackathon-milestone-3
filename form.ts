
document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement)?.value || "";
    const title = (document.getElementById("title") as HTMLInputElement)?.value || "";
    const location = (document.getElementById("location") as HTMLInputElement)?.value || "";
    const contact = (document.getElementById("contact") as HTMLInputElement)?.value || "";
    const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
    const skills = (document.getElementById("skills") as HTMLInputElement)?.value || "";
    const bio = (document.getElementById("bio") as HTMLTextAreaElement)?.value || "";
    const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value || "";
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || "";
    const languages = (document.getElementById("languages") as HTMLInputElement)?.value || "";
    const interests = (document.getElementById("interests") as HTMLInputElement)?.value || "";

    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    let profilePictureURL = "";
    if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
        const file = profilePictureInput.files[0];
        profilePictureURL = URL.createObjectURL(file);
    }
    const resumeContent = `
        <div class="left-panel-preview">
            <img src="${profilePictureURL}" alt="Profile Picture">
            <h2>${name}</h2>
            <p><strong>${title}</strong></p>
            <p>${location}</p>
            <p>${contact}</p>
            <p>${email}</p>
            <h3>Skills</h3>
            <ul>${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        </div>
        <div class="right-panel-preview">
            <h3>Bio</h3>
            <p>${bio}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Languages</h3>
            <p>${languages}</p>
            <h3>Interests</h3>
            <p>${interests}</p>
        </div>
    `;

    const resumeContentElement = document.getElementById("resumeContent");
    if (resumeContentElement) {
        resumeContentElement.innerHTML = resumeContent;
    }

    const generatedResumeElement = document.getElementById("generatedResume");
    if (generatedResumeElement) {
        generatedResumeElement.style.display = "block";
    }
    const btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener("click", function() {
            window.location.href = "option.html";
        });
    }
});




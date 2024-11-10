var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    event.preventDefault();
    var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || "";
    var title = ((_b = document.getElementById("title")) === null || _b === void 0 ? void 0 : _b.value) || "";
    var location = ((_c = document.getElementById("location")) === null || _c === void 0 ? void 0 : _c.value) || "";
    var contact = ((_d = document.getElementById("contact")) === null || _d === void 0 ? void 0 : _d.value) || "";
    var email = ((_e = document.getElementById("email")) === null || _e === void 0 ? void 0 : _e.value) || "";
    var skills = ((_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value) || "";
    var bio = ((_g = document.getElementById("bio")) === null || _g === void 0 ? void 0 : _g.value) || "";
    var experience = ((_h = document.getElementById("experience")) === null || _h === void 0 ? void 0 : _h.value) || "";
    var education = ((_j = document.getElementById("education")) === null || _j === void 0 ? void 0 : _j.value) || "";
    var languages = ((_k = document.getElementById("languages")) === null || _k === void 0 ? void 0 : _k.value) || "";
    var interests = ((_l = document.getElementById("interests")) === null || _l === void 0 ? void 0 : _l.value) || "";
    var profilePictureInput = document.getElementById("profilePicture");
    var profilePictureURL = "";
    if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
        var file = profilePictureInput.files[0];
        profilePictureURL = URL.createObjectURL(file);
    }
    var resumeContent = "\n        <div class=\"left-panel-preview\">\n            <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\">\n            <h2>").concat(name, "</h2>\n            <p><strong>").concat(title, "</strong></p>\n            <p>").concat(location, "</p>\n            <p>").concat(contact, "</p>\n            <p>").concat(email, "</p>\n            <h3>Skills</h3>\n            <ul>").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n        </div>\n        <div class=\"right-panel-preview\">\n            <h3>Bio</h3>\n            <p>").concat(bio, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Languages</h3>\n            <p>").concat(languages, "</p>\n            <h3>Interests</h3>\n            <p>").concat(interests, "</p>\n        </div>\n    ");
    var resumeContentElement = document.getElementById("resumeContent");
    if (resumeContentElement) {
        resumeContentElement.innerHTML = resumeContent;
    }
    var generatedResumeElement = document.getElementById("generatedResume");
    if (generatedResumeElement) {
        generatedResumeElement.style.display = "block";
    }
    var btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener("click", function () {
            window.location.href = "option.html";
        });
    }
});

function skillsMember() {
    var skills = ["HTML", "CSS", "JavaScript", "React", "Node", "Python"];
    var skillsList = document.getElementById("skills-list");
    for (var i = 0; i < skills.length; i++) {
        var skill = document.createElement("li");
        skill.textContent = skills[i];
        skillsList.appendChild(skill);
    }
}
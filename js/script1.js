// ================================
// LIGHT / DARK MODE
// ================================

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeButton.textContent = "🌙";

    } else {

        themeButton.textContent = "☀";

    }

});


// ================================
// VIEW PROJECT DETAILS
// ================================

function toggleProject(projectId, button) {

    const project =
        document.getElementById(projectId);


    project.classList.toggle("show");


    if (project.classList.contains("show")) {

        button.textContent = "Hide Details";

    } else {

        button.textContent = "View Project";

    }

}
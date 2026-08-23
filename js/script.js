// ================================
// LIGHT / DARK MODE
// ================================

const themeButton = document.getElementById("themeButton");


// Check if the theme button exists
if (themeButton) {

    themeButton.addEventListener("click", function () {

        // Change between dark and light theme
        document.body.classList.toggle("light");


        // Change the icon
        if (document.body.classList.contains("light")) {

            themeButton.textContent = "🌙";

            themeButton.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );

            themeButton.setAttribute(
                "title",
                "Switch to dark theme"
            );

        } else {

            themeButton.textContent = "☀";

            themeButton.setAttribute(
                "aria-label",
                "Switch to light theme"
            );

            themeButton.setAttribute(
                "title",
                "Switch to light theme"
            );

        }

    });

}


// ================================
// VIEW PROJECT DETAILS
// ================================

function toggleProject(projectId, button) {

    const project =
        document.getElementById(projectId);


    // Make sure the project exists
    if (!project || !button) {
        return;
    }


    // Show or hide project details
    project.classList.toggle("show");


    // Change button text
    if (project.classList.contains("show")) {

        button.textContent = "Hide Details";

    } else {

        button.textContent = "View Project";

    }

}
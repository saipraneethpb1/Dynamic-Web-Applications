let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

themeUserInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let theme = themeUserInput.value;

        if (theme === "Light") {
            bgContainer.style.backgroundImage =
                "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            heading.style.color = "#014d40";
        } else if (theme === "Dark") {
            bgContainer.style.backgroundImage =
                "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            heading.style.color = "#ffffff";
        } else {
            alert("Enter the valid theme");
        }
    }
});
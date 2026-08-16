let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainer = document.getElementById("profileContainer");

// Create image
let profileImage = document.createElement("img");
profileImage.src = profileDetails.imgSrc;
profileContainer.appendChild(profileImage);

// Create heading
let nameElement = document.createElement("h1");
nameElement.textContent = profileDetails.name;
profileContainer.appendChild(nameElement);

// Create paragraph
let ageElement = document.createElement("p");
ageElement.textContent = "Age : " + profileDetails.age;
profileContainer.appendChild(ageElement);

profileContainer.classList.add(
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
);

profileImage.style.width = "200px";
profileImage.style.borderRadius = "100px";
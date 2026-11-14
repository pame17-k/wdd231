const spotlightContainer = document.querySelector("#spotlight-container");

async function getSpotlights() {

    const response = await fetch("data/members.json");

    const members = await response.json();

    const premiumMembers = members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    premiumMembers.sort(() => Math.random() - 0.5);

    const selectedMembers = premiumMembers.slice(0, 3);

    displaySpotlights(selectedMembers);
}

function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("article");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="images/${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p>
                <strong>Website:</strong>
                <a href="${member.url}" target="_blank">
                    Visit Site
                </a>
            </p>

            <p>
                <strong>Membership:</strong>
                ${member.membership}
            </p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();
import { places } from "../data/discover.mjs";

const cardsContainer = document.querySelector("#discover-cards");

places.forEach((place, index) => {
    const card = document.createElement("section");

    card.classList.add("card");
    card.classList.add(`card${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img
                src="${place.image}"
                alt="${place.name}"
                loading="lazy"
                width="300"
                height="200"
            >
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;
    cardsContainer.appendChild(card);
});

const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = 
        "Welcome! Let us know if you have any questions.";
} else {
    const millisecondsBetweenVisits =
        currentVisit - Number(lastVisit);
    const daysBetweenVisits = 
        Math.floor(millisecondsBetweenVisits / 86400000);
    if (daysBetweenVisits < 1) {
        visitMessage.textContent = 
            "Back so soon! Awesome!";
    } else if (daysBetweenVisits === 1) {
        visitMessage.textContent =
            "You last visited 1 day ago.";
    } else {
        visitMessage.textContent =
            `You last visited ${daysBetweenVisits} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);
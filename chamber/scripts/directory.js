const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);
}

getMembers();

//Mostrar las tarjetas
function displayMembers(members) {

    members.forEach(member => {

        let card = document.createElement("section");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
        `;

        cards.appendChild(card);
    });
}

// Crear grid and list view buttons
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
    cards.classList.add("grid-view");
    cards.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
    cards.classList.add("list-view");
    cards.classList.remove("grid-view");
});
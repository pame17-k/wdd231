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
        card.classList.add("member-card");
            card.innerHTML = `
                <h2>${member.name}</h2>
                <div class="member-content">
                    <img src="images/${member.image}" alt="${member.name}">
                    <div class="member-info">
                        <p><strong>Email:</strong> ${member.email}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>URL:</strong></p>
                        <a href="${member.url}" target="_blank">
                            Visit Website
                        </a>
                        <p>Membership: ${member.membership}</p>
                    </div>
                </div>
            `;
//        card.innerHTML = `
//            <img src="images/${member.image}" alt="${member.name}">
//            <h2>${member.name}</h2>
//            <p>${member.address}</p>
//            <p>${member.email}</p>
//            <p>${member.phone}</p>
//            <a href="${member.url}" target="_blank">
//                Visit Website
//            </a>
//            <p>Membership: ${member.membership}</p>
//        `;

        cards.appendChild(card);
    });
}

// Crear grid and list view buttons
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});
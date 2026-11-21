// TIMESTAMP
document.querySelector("#timestamp").value = 
    new Date().toISOString();

// OPEN MODALS
const modalLinks = document.querySelectorAll("[data-modal]");
modalLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const modalId = link.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});

// CLOSE MODALS 
const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});
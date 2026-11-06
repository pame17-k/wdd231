const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // request
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json(); // parse the JSON data
        displayProphets(data.prophets); // call the function to display the prophets
    } catch (error) {
        console.error(error); // temp output test of data response
    }
}
getProphetData();
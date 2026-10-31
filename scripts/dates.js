const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

// Mostrar la fecha de última modificación del documento en el segundo párrafo
document.getElementById("lastModified").textContent = document.lastModified;
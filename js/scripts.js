// Function to show a specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section'); // Select all sections
    sections.forEach(section => {
        section.classList.remove('active'); // Hide all sections
    });
    document.getElementById(sectionId).classList.add('active'); // Show the selected section
}

// Function to redirect to WhatsApp
function orderWhatsApp() {
    const phone = "6282165493901"; // WhatsApp number
    const message = encodeURIComponent("Halo, saya tertarik untuk membeli Opak Gurih.");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}

// Function to show a specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section'); // Select all sections
    sections.forEach(section => {
        section.classList.remove('active'); // Hide all sections
    });
    document.getElementById(sectionId).classList.add('active'); // Show the selected section

    // Toggle footer visibility
    const footer = document.getElementById('footer');
    if (sectionId === 'contact') {
        footer.style.display = 'block'; // Show footer
    } else {
        footer.style.display = 'none'; // Hide footer
    }
}
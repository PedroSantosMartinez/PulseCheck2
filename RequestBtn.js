const modal = document.getElementById('featureRequestModal');
const openButton = document.getElementById('openFormBtn');
const closeButton = document.querySelector('.close');

// Show the modal when clicking the button
openButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Hide the modal when clicking the close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

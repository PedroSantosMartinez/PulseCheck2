document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.frame img');
    const overlay = document.getElementById('overlay');

    images.forEach(image => {
        image.addEventListener('click', function() {
            // Toggle fullscreen class on the parent frame when an image is clicked
            const frame = this.parentElement;

            if (frame.classList.contains('fullscreen')) {
                frame.classList.remove('fullscreen');
                overlay.style.display = 'none';
            } else {
                // Remove fullscreen from any other frames
                document.querySelectorAll('.frame').forEach(f => f.classList.remove('fullscreen'));
                frame.classList.add('fullscreen');
                overlay.style.display = 'block';
            }
        });
    });

    // Hide fullscreen on clicking the overlay
    overlay.addEventListener('click', function() {
        document.querySelectorAll('.frame').forEach(frame => frame.classList.remove('fullscreen'));
        overlay.style.display = 'none';
    });
});

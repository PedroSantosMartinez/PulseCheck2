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
                overlay.style.opacity = 1; // Ensure the overlay is fully visable
            }
        });
    });

    // Hide fullscreen on clicking the overlay
    overlay.addEventListener('click', function() {
        document.querySelectorAll('.frame').forEach(frame => frame.classList.remove('fullscreen'));
        overlay.style.opacity = 0; // Fade out effect
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300); // Match this duration with the transition in the CSS
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Like button functionality
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('You liked this picture!');
        });
    });

    // Dislike button functionality
    document.querySelectorAll('.dislike-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('You disliked this picture!');
        });
    });

    // Hide button functionality
    document.querySelectorAll('.hide-btn').forEach(button => {
        button.addEventListener('click', function() {
            const frame = this.closest('.frame');
            frame.style.display = 'none';
        });
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
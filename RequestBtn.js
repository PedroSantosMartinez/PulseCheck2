document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("featureModal");
    const btn = document.getElementById("openFormBtn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("featureForm");
    const toast = document.getElementById("toast");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;

        // Here you would typically send this data to your backend
        console.log('Feature request:', { title, description });

        // Clear the form
        form.reset();

        // Close the modal
        modal.style.display = "none";

        // Show the toast
        toast.className = "toast show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    }
});

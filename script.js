// DOM elements
const form = document.getElementById('contact-form');
const formStatus = document.createElement('p');

// Form submission event listener
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Validate form data
    if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.className = 'error';
        form.appendChild(formStatus);
        return;
    }

    // Simulate form submission (replace with actual backend submission)
    setTimeout(() => {
        formStatus.textContent = 'Message sent! Let’s make magic happen!';
        formStatus.className = 'success';
        form.appendChild(formStatus);
        form.reset();
        setTimeout(() => {
            form.removeChild(formStatus);
        }, 5000); // Remove status message after 5 seconds
    }, 1000); // Simulate a delay for submission
});

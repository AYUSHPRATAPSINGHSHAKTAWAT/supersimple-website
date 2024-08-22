document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formStatus = document.getElementById('form-status');

    emailjs.sendForm('service_z2esejm', 'template_hx6pbr6', this)
        .then(function () {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = 'green';
        }, function (error) {
            formStatus.textContent = 'Failed to send message. Please try again later.';
            formStatus.style.color = 'red';
        });

    // Optionally clear the form after submission
    this.reset();
});

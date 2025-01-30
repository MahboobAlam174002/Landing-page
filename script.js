document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // You can implement additional logic here, like sending the form data to a server
    } else {
        alert('Please fill in all the fields.');
    }
});

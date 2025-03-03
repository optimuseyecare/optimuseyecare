// Purpose: To send the inquiry form to the emailjs service.
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted');
  emailjs.sendForm('service_lv6wc26', 'template_yuouklm', this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('SUCCESS!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('FAILED...', error);
    });
});

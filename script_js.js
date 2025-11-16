// Basic script for SpecStation demo

// Handle contact form submission
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting SpecStation! We will respond within 1 business day.');
    contactForm.reset();
  });
}

// Handle build order buttons
const orderButtons = document.querySelectorAll('.build-card .btn-primary');
orderButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Thank you! Your order request has been received. Our team will contact you for confirmation.');
  });
});
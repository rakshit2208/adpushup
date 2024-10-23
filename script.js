// Get the form element
const form = document.getElementById('demo-form');

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = new FormData(form);

  // Simulate a successful form submission
  alert('Form submitted successfully!');

  // Reset the form
  form.reset();
});


// Intersection Observer for scroll-based zoom effect
const cards = document.querySelectorAll('.zoom-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('zoomed');
    } else {
      entry.target.classList.remove('zoomed');
    }
  });
}, { threshold: 0.5 }); // Zooms when 50% of the card is in view

cards.forEach(card => {
  observer.observe(card);
});


// Get the back-to-top <p> tag element
const backToTopElement = document.getElementById('back-to-top');

// Show or hide the "Back to Top" text based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopElement.style.display = "block";  // Show the text
  } else {
    backToTopElement.style.display = "none";   // Hide the text
  }
};

// Scroll smoothly back to the top when the <p> tag is clicked
backToTopElement.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Select the dropdown toggle and dropdown list
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownList = document.getElementById('dropdown-list');

// Toggle the display of the dropdown when the arrow is clicked
dropdownToggle.addEventListener('click', () => {
  const isVisible = dropdownList.style.display === 'block';
  dropdownList.style.display = isVisible ? 'none' : 'block';
});

// Optionally, close the dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!dropdownToggle.contains(event.target) && !dropdownList.contains(event.target)) {
    dropdownList.style.display = 'none';
  }
});


const arrowIcon = toggle.querySelector('.arrow');
toggle.addEventListener('click', () => {
  // Toggle the display of the dropdown list
  const isOpen = dropdownList.style.display === 'block';
  dropdownList.style.display = isOpen ? 'none' : 'block';

  // Toggle the arrow direction
  if (isOpen) {
    arrowIcon.classList.remove('down');
  } else {
    arrowIcon.classList.add('down');
  }
});


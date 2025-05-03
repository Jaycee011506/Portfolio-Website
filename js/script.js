// AOS Init
AOS.init();

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  const form = e.target;
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  form.classList.add('was-validated');
});

// Back to Top Button
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Back to Top button functionality
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.className = "text-danger";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.className = "text-success";
    this.reset();
  }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if the fields are not empty
  if (name && email && message) {
    // Here you can implement a service or API to send the email.
    // For now, we'll just show a simple alert
    alert("Message Sent Successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
    
    // Clear the form after submission
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
  this.textContent = body.classList.contains("dark-mode") ? "🌙" : "🌞";
});


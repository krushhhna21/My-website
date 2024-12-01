// Display a welcome alert when the page loads
alert("Welcome to My First Website!");

// Button Click Interaction
document.addEventListener("DOMContentLoaded", () => {
  // Add an event listener for the button click
  const button = document.querySelector("#customButton");
  if (button) {
    button.addEventListener("click", () => {
      alert("You clicked the button! Thanks for exploring my site.");
    });
  }

  // Dynamic Time Display
  const timeElement = document.querySelector("#timeDisplay");
  if (timeElement) {
    function updateTime() {
      const now = new Date();
      timeElement.textContent = now.toLocaleString(); // Display current date and time
    }
    setInterval(updateTime, 1000); // Update time every second
    updateTime(); // Set initial time
  }

  // Hover Effect on Navigation Links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "red"; // Change color on hover
    });
    link.addEventListener("mouseout", () => {
      link.style.color = ""; // Reset color when not hovering
    });
  });
});



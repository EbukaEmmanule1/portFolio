const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('toggle');
});

// Animate elements when the page loads
document.addEventListener("DOMContentLoaded", function() {
  const profileText = document.querySelector('.profile-text');
  const profileImage = document.querySelector('.profile-image img');
  const socialIcons = document.querySelectorAll('.social-icons a');

  // Animation for text section
  profileText.style.opacity = '0';
  profileText.style.transform = 'translateX(-50px)';
  setTimeout(() => {
      profileText.style.transition = 'all 0.6s ease';
      profileText.style.opacity = '1';
      profileText.style.transform = 'translateX(0)';
  }, 100);

  // Animation for profile image
  profileImage.style.opacity = '0';
  profileImage.style.transform = 'scale(0.8)';
  setTimeout(() => {
      profileImage.style.transition = 'all 0.6s ease';
      profileImage.style.opacity = '1';
      profileImage.style.transform = 'scale(1)';
  }, 300);

  // Animation for social icons
  socialIcons.forEach((icon, index) => {
      icon.style.opacity = '0';
      icon.style.transform = 'translateY(20px)';
      setTimeout(() => {
          icon.style.transition = 'all 0.6s ease';
          icon.style.opacity = '1';
          icon.style.transform = 'translateY(0)';
      }, 400 + index * 100);
  });
});

// Animate progress bars when the page loads
document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(progress => {
      const width = progress.style.width;
      progress.style.width = '0';

      setTimeout(() => {
          progress.style.width = width;
      }, 500);
  });
});


// Animate service cards on load
document.addEventListener("DOMContentLoaded", function() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';

      setTimeout(() => {
          card.style.transition = 'all 0.6s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
      }, index * 200); // Delay the animation for each card
  });
});

const projects = document.querySelectorAll('.project-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Function to show the current project with a fade-in effect
function showProject(index) {
    // Remove 'active' class from all projects
    projects.forEach(project => {
        project.classList.remove('active');
    });
    
    // Add 'active' class to the current project
    projects[index].classList.add('active');
}

// Event listener for the 'Next' button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length; // Loop back to the first project
    showProject(currentIndex);
});

// Event listener for the 'Previous' button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length; // Loop back to the last project
    showProject(currentIndex);
});

// Initialize the first project to show
showProject(currentIndex);

const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn1 = document.querySelector('.prev-btn1');
const nextBtn2 = document.querySelector('.next-btn2');
let currentCard = 0;

function showCard(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) {
      card.classList.add('active');
    }
  });
}

nextBtn2.addEventListener('click', () => {
  currentCard = (currentCard + 1) % testimonialCards.length;
  showCard(currentCard);
});

prevBtn1.addEventListener('click', () => {
  currentCard = (currentCard - 1 + testimonialCards.length) % testimonialCards.length;
  showCard(currentCard);
});

// Show the first card on load
showCard(currentCard);



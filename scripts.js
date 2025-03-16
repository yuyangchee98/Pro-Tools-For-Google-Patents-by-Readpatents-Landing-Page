// Main JavaScript for Readpatents landing page
document.addEventListener("DOMContentLoaded", function () {
  // Navigation smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });

  // Sticky header effect
  const header = document.querySelector('nav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });

  // Add animation on scroll
  const animateElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate__animated');
        
        // Add specific animation based on data attribute
        const animation = element.dataset.animation || 'animate__fadeIn';
        element.classList.add(animation);
      }
    });
  };

  // Add animate-on-scroll class to elements we want to animate
  document.querySelectorAll('.grid > div').forEach(element => {
    element.classList.add('animate-on-scroll');
    element.dataset.animation = 'animate__fadeInUp';
  });

  // Run animation check on load and scroll
  animateElements();
  window.addEventListener('scroll', animateElements);

  // Feature tab functionality (if implemented)
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show the corresponding content
      const targetId = this.dataset.target;
      document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
      });
      
      if (targetId) {
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Add some parallax effect to hero section
  const heroSection = document.querySelector('section.pt-24');
  if (heroSection) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 600) { // Only apply parallax effect when near the top
        const translateY = scrollPosition * 0.2;
        heroSection.style.backgroundPosition = `50% ${translateY}px`;
      }
    });
  }
  
  // Add subtle floating animation to screenshot
  const screenshotContainer = document.querySelector('.screenshot-container');
  if (screenshotContainer) {
    let animationDirection = 1;
    let currentPosition = 0;
    const animationSpeed = 0.05;
    const maxMovement = 10;
    
    function animateScreenshot() {
      if (currentPosition > maxMovement) {
        animationDirection = -1;
      } else if (currentPosition < -maxMovement) {
        animationDirection = 1;
      }
      
      currentPosition += animationSpeed * animationDirection;
      screenshotContainer.style.transform = `translateY(${currentPosition}px)`;
      
      requestAnimationFrame(animateScreenshot);
    }
    
    animateScreenshot();
  }
});

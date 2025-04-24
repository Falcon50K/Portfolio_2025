// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector(".theme-toggle")
    const body = document.body
  
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      body.classList.add("dark-theme")
    }
  
    // Toggle theme when the button is clicked
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme")
  
      // Save theme preference to localStorage
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
    })
  
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Scroll to top button
    const scrollToTopBtn = document.querySelector(".scroll-to-top")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("active")
      } else {
        scrollToTopBtn.classList.remove("active")
      }
    })
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Animate skill bars on scroll
    const skillSection = document.querySelector(".skills")
    const skillBars = document.querySelectorAll(".skill-progress")
  
    // Set initial width to 0
    skillBars.forEach((bar) => {
      bar.style.width = "0"
    })
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
    }
  
    // Function to animate skill bars
    function animateSkillBars() {
      if (isInViewport(skillSection)) {
        skillBars.forEach((bar) => {
          const width = bar.parentElement.previousElementSibling.lastElementChild.textContent
          bar.style.width = width
        })
        // Remove event listener once animation is triggered
        window.removeEventListener("scroll", animateSkillBars)
      }
    }
  
    // Add scroll event listener
    window.addEventListener("scroll", animateSkillBars)
    // Check on initial load
    animateSkillBars()
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message (in a real application)
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  })
  
document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  const preloader = document.getElementById("preloader")
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500) // Fade out duration
    })
  }

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn")
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        // Show button after scrolling 300px
        scrollToTopBtn.classList.remove("hidden")
        setTimeout(() => {
          scrollToTopBtn.style.opacity = "1"
          scrollToTopBtn.style.transform = "translateY(0)"
        }, 10) // Small delay to trigger transition
      } else {
        scrollToTopBtn.style.opacity = "0"
        scrollToTopBtn.style.transform = "translateY(20px)"
        setTimeout(() => {
          scrollToTopBtn.classList.add("hidden")
        }, 300) // Hide after transition
      }
    })

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Section reveal on scroll (for index.html sections)
  const sections = document.querySelectorAll(".section-hidden")
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15, // Trigger when 15% of the section is visible
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("section-hidden")
        entry.target.classList.add("section-visible")
        entry.target.classList.add("animate-slideInUp") // Apply animation
        observer.unobserve(entry.target) // Stop observing once visible
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })

  // Smooth scroll for internal links (e.g., #about, #skills)
  document.querySelectorAll('a[href^="index.html#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").split("#")[1]
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - (document.querySelector("header")?.offsetHeight || 0), // Adjust for fixed header
          behavior: "smooth",
        })
      }
    })
  })
})

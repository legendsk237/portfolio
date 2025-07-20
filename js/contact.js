document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const formMessage = document.getElementById("formMessage")

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault() // Prevent default form submission

      // Simulate form submission
      formMessage.classList.remove("hidden", "text-green-600", "text-red-600")
      formMessage.classList.add("text-gray-600")
      formMessage.textContent = "Sending message..."

      setTimeout(() => {
        const success = true // Simulate success or failure
        if (success) {
          formMessage.classList.remove("text-gray-600", "text-red-600")
          formMessage.classList.add("text-green-600")
          formMessage.textContent = "Message sent successfully! I will get back to you soon."
          contactForm.reset() // Clear the form
        } else {
          formMessage.classList.remove("text-gray-600", "text-green-600")
          formMessage.classList.add("text-red-600")
          formMessage.textContent = "Failed to send message. Please try again."
        }
      }, 1500) // Simulate delay
    })
  }
})

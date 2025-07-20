document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects-container")

  // Project data directly in JavaScript (no server needed)
  const projects = [
    {
      id: 1,
      title: "Architectural Dynamics LLT",
      description:
        "A full-featured e-commerce site with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: [""],
      image: "./assets/images/archi.jpg",
      link: "https://legendsk237.github.io/Achitecture/",
    },
    {
      id: 2,
      title: "Akims-resturant",
      description:
        "A responsive web application for managing tasks, with features like task creation, editing, deletion, and status tracking.",
      technologies: [""],
      image: "./assets/images/akimsrestu.jpg",
      link: "https://legendsk237.github.io/Akims-restu/",
    },
    {
      id: 3,
      title: "Transport and Logistics Web App",
      description:
        "A real-time chat application using WebSockets, allowing users to send and receive messages instantly.",
      technologies: [""],
      image: "./assets/images/transport.jpg",
      link: "https://elite-transportlogictics.com/",
    },
    {
      id: 4,
      title: "SmartPrepIQ Windows App",
      description:
        "A content management system for blogging, featuring user roles, post creation, and comment sections.",
      technologies: [""],
      image: "./assets/images/smartprepiq.png",
      link: "https://legendsk237.github.io/smartprepiq/",
    },
    {
      id: 5,
      title: "Minibikers Shop",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: [""],
      image: "./assets/images/minibikers.jpg",
      link: "https://minibikesxpress.com/",
    },
  ]

  // Function to render projects
  const renderProjects = (projectsToRender) => {
    projectsContainer.innerHTML = "" // Clear any existing content
    projectsToRender.forEach((project, index) => {
      const projectCard = `
                <div class="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp" style="animation-delay: ${0.1 * index}s;">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">${project.title}</h3>
                        <p class="text-gray-700 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            ${project.technologies.map((tech) => `<span class="bg-gray-200 text-gray-700 text-sm px-4 py-1 rounded-full font-medium">${tech}</span>`).join("")}
                        </div>
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            `
      projectsContainer.insertAdjacentHTML("beforeend", projectCard)
    })
  }

  // Render projects immediately if on the projects.html page
  if (window.location.pathname.includes("projects.html")) {
    renderProjects(projects)
  }
})

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Load featured projects dynamically
    loadFeaturedProjects();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Project data - you'll expand this
const projects = [
    {
        id: 1,
        title: "Urban Heat Island Analysis",
        description: "GIS analysis of temperature variations using Landsat data and Python scripting",
        image: "images/projects/heat-island.jpg",
        tags: ["GIS", "Python", "Remote Sensing", "Climate"],
        link: "projects/urban-heat-island.html"
    },
    {
        id: 2,
        title: "Water Quality Dashboard",
        description: "Interactive dashboard for monitoring river water quality using R Shiny",
        image: "images/projects/water-quality.jpg",
        tags: ["Data Visualization", "R", "Environmental", "Dashboard"],
        link: "projects/water-quality-dashboard.html"
    },
    {
        id: 3,
        title: "Habitat Suitability Model",
        description: "Species distribution modeling using MaxEnt and geospatial analysis",
        image: "images/projects/habitat-model.jpg",
        tags: ["Ecological Modeling", "GIS", "Conservation", "Python"],
        link: "projects/habitat-model.html"
    }
];

function loadFeaturedProjects() {
    const container = document.getElementById('featured-projects');
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn btn-secondary" style="margin-top: 1rem;">View Details</a>
            </div>
        </div>
    `).join('');
}

// Project template generator for future projects
function createProjectPage(projectData) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectData.title} | Your Name</title>
    <link rel="stylesheet" href="../css/style.css">
    <style>
        .project-detail {
            padding: 4rem 0;
        }
        .project-meta {
            display: flex;
            gap: 2rem;
            margin: 2rem 0;
        }
        .tech-stack {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 10px;
        }
        .project-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        .project-gallery img {
            width: 100%;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <!-- Include navigation from main site -->
    
    <main class="project-detail">
        <div class="container">
            <a href="../projects/index.html" class="btn btn-secondary">← Back to Projects</a>
            <h1>${projectData.title}</h1>
            <p class="tagline">${projectData.description}</p>
            
            <div class="project-meta">
                <div><strong>Date:</strong> ${projectData.date}</div>
                <div><strong>Category:</strong> ${projectData.category}</div>
            </div>
            
            <img src="${projectData.featuredImage}" alt="${projectData.title}" style="width: 100%; border-radius: 10px;">
            
            <div class="tech-stack">
                <h3>Technologies Used</h3>
                <div class="project-tags">
                    ${projectData.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-content">
                ${projectData.content}
            </div>
            
            ${projectData.gallery ? `
            <div class="project-gallery">
                ${projectData.gallery.map(img => `<img src="${img}" alt="Project visualization">`).join('')}
            </div>
            ` : ''}
            
            ${projectData.github ? `<a href="${projectData.github}" class="btn btn-primary" target="_blank">View on GitHub</a>` : ''}
        </div>
    </main>
</body>
</html>`;
}
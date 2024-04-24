

document.addEventListener('DOMContentLoaded', function() { 

    const projects = [
        { title: "Personal Portfolio", 
        description: "This personal web portfolio is a dynamic and interactive web application developed using HTML, CSS, and JavaScript. The project combines front-end technologies to create a responsive and engaging user experience. ",
        repository: "https://github.com/ComfortN/CodeTribe_Bootcamp/tree/intro-to-javascript/Portfolio_project" 
    },
        { title: "Reimagining Netflix: HTML/CSS Edition",
        description: "Explore my rendition of the Netflix website, recreated entirely using HTML and CSS. This project showcases front-end development skills, featuring responsive design elements and components similar to the popular streaming platform.",
        repository: "https://github.com/ComfortN/netflix_project"
        },
        
        { title: "ATM System", 
        description: "The project demonstrates fundamental concepts of object-oriented programming, including class design, encapsulation, and method invocation. It serves as a basic example of how ATM systems can be implemented using Java classes and methods.",
        repository: "https://github.com/ComfortN/CODSOFT/tree/main/codsoftProjects/src/main/java/org/example/ATM"

        },

    ];

            
        const projectsContainer = document.querySelector('.projects-container');
        projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    const titleElement = document.createElement('h3');
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;

    const repositoryButton = document.createElement('a');
    repositoryButton.textContent = "View Repository";
    repositoryButton.href = project.repository;
    repositoryButton.classList.add('btnr', 'btn-primary');


    projectCard.appendChild(titleElement);
    projectCard.appendChild(descriptionElement);
    projectCard.appendChild(repositoryButton);

    projectsContainer.appendChild(projectCard);
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        const aboutTextElement = document.getElementById('aboutText');
    
        const aboutContent = `As a young professional thriving in
                               the world of technology, I bring with 
                               me 2 years of valuable experience in the
                               retail industry, where I honed my skills
                               in delivering exceptional customer
                               service. With a passion for effective
                               communication, both written and 
                               verbal, I consistently strive to
                               exceed expectations.<br><br>
                               
                               Furthermore, I possess intermediate skills
                               in HTML5, Object-Oriented Programming (OOP),
                               and CSS. These technical competencies allow
                               me to create engaging web experiences and
                               contribute to the development of innovative
                               digital solutions.
                               
                               I am committed to continuous growth and
                               eagerly seek opportunities to expand my
                               knowledge and expertise in the technology
                               sector.`;
    
        
        aboutTextElement.innerHTML = aboutContent;
    
    });
    
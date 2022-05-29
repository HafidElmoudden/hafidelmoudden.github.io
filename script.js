var about = document.getElementsByClassName("about");
var education = document.getElementsByClassName("education");
var skills = document.getElementsByClassName("skills");
var hobbys = document.getElementsByClassName("hobbys");
var projects = document.getElementsByClassName("projects");
var lis = document.getElementsByClassName("lis");
var items = document.getElementsByClassName("items");
var title = document.getElementById("tech-title");
var experience = document.getElementById("experience");
var description = document.getElementById("description");
var duration = document.getElementById("duration");
var informations = document.getElementsByClassName("informations");
var c = document.getElementById('c');
var cpp = document.getElementById('cpp');
var html = document.getElementById('html');
var css = document.getElementById('css');
var javascript = document.getElementById('javascript');
var react = document.getElementById('react');
var next = document.getElementById('nextjs');
var tailwind = document.getElementById('tailwind');
var sql = document.getElementById('sql');

Array.from(lis).forEach(element => {
    element.addEventListener("click", () => {
        for (let lim in Array.from(lis))
          if (Array.from(lis)[lim].classList.contains("liactive")) {
            Array.from(lis)[lim].classList.remove("liactive");
          }
        element.classList.add("liactive");
        switch (element.textContent) {
            case 'ABOUT':
                for (let lim in Array.from(items))
                if (Array.from(items)[lim].classList.contains("active")) {
                  Array.from(items)[lim].classList.remove("active");
                }
                Array.from(about)[0].classList.add("active");
                break;
            case 'EDUCATION':
                for (let lim in Array.from(items))
                if (Array.from(items)[lim].classList.contains("active")) {
                  Array.from(items)[lim].classList.remove("active");
                }
                Array.from(education)[0].classList.add("active");
                break;
            case 'SKILLS':
                for (let lim in Array.from(items))
                if (Array.from(items)[lim].classList.contains("active")) {
                  Array.from(items)[lim].classList.remove("active");
                }
                Array.from(skills)[0].classList.add("active");
                break;
            case 'HOBBYS':
                for (let lim in Array.from(items))
                if (Array.from(items)[lim].classList.contains("active")) {
                  Array.from(items)[lim].classList.remove("active");
                }
                Array.from(hobbys)[0].classList.add("active");
                break;
            case 'PROJECTS':
                for (let lim in Array.from(items))
                if (Array.from(items)[lim].classList.contains("active")) {
                  Array.from(items)[lim].classList.remove("active");
                }
                Array.from(projects)[0].classList.add("active");
                break;
            
            default:
                break;
        }
      });
});

c.addEventListener("mouseover",() => {
  title.textContent = 'C Programming Language';
  experience.textContent = "EXPERT";
  experience.style.color = "red";
  duration.textContent = "7 months";
  description.innerHTML = `C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie to create UNIX operating system.`;
})

cpp.addEventListener("mouseover",() => {
  title.textContent = 'C++ Programming Language';
  experience.textContent = "BEGINNER";
  experience.style.color = "green";
  duration.textContent = "3 months";
  description.innerHTML = `C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with classes". `;
})

html.addEventListener("mouseover",() => {
  title.textContent = 'HTML (HyperText Markup Language)';
  experience.textContent = "EXPERT";
  experience.style.color = "red";
  duration.textContent = "9 months";
  description.innerHTML = `HTML is the most basic building block of the Web. It defines the meaning and structure of web content.`;
})

css.addEventListener("mouseover",() => {
  title.textContent = 'CSS (Cascading Style Sheets)';
  experience.textContent = "EXPERT";
  experience.style.color = "red";
  duration.textContent = "9 months";
  description.innerHTML = `CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.`;
})

javascript.addEventListener("mouseover",() => {
  title.textContent = 'JavaScript';
  experience.textContent = "MEDIUM";
  experience.style.color = "yellow";
  duration.textContent = "4 months";
  description.innerHTML = `Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.`;
})

react.addEventListener("mouseover",() => {
  title.textContent = 'React';
  experience.textContent = "MEDIUM";
  experience.style.color = "yellow";
  duration.textContent = "3 months";
  description.innerHTML = `React is a JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.`;
})

next.addEventListener("mouseover",() => {
  title.textContent = 'NextJS';
  experience.textContent = "BEGINNER";
  experience.style.color = "green";
  duration.textContent = "1.5 months";
  description.innerHTML = `Next.js is a JavaScript framework used to build server-side rendering and static web applications using React.`;
})

tailwind.addEventListener("mouseover",() => {
  title.textContent = 'Tailwind CSS';
  experience.textContent = "MEDIUM";
  experience.style.color = "yellow";
  duration.textContent = "2 months";
  description.innerHTML = `Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.`;
})

sql.addEventListener("mouseover",() => {
  title.textContent = 'MySQL';
  experience.textContent = "MEDIUM";
  experience.style.color = "yellow";
  duration.textContent = "3 months";
  description.innerHTML = `MySQL is an open source relational database management system (RDBMS).`;
})








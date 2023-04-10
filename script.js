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
// var c = document.getElementById('c');
// var cpp = document.getElementById('cpp');
var flutter = document.getElementById('flutter');
var html = document.getElementById('html');
var css = document.getElementById('css');
var javascript = document.getElementById('javascript');
var react = document.getElementById('react');
var reactNative = document.getElementById('react-native');
var next = document.getElementById('nextjs');
var tailwind = document.getElementById('tailwind');
var sql = document.getElementById('sql');
var express = document.getElementById('express');
var prisma = document.getElementById('prisma');
var java = document.getElementById('java');
var php = document.getElementById('php');
var sqlserver = document.getElementById('sqlserver');

var nextBtn = document.getElementById('right-arrow');
var prevBtn = document.getElementById('left-arrow');
var prjTitle = document.getElementById('prj-title');
var prjDescription = document.getElementById('prj-description');
var prjTools = document.getElementById('prj-tools');
var prjPreviews = document.getElementById('prj-previews');
var prjIndex = document.getElementById('project-index');

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

flutter.addEventListener("mouseover",() => {
  title.textContent = 'Flutter';
})

html.addEventListener("mouseover",() => {
  title.textContent = 'HTML (HyperText Markup Language)';
})

css.addEventListener("mouseover",() => {
  title.textContent = 'CSS (Cascading Style Sheets)';
})

javascript.addEventListener("mouseover",() => {
  title.textContent = 'JavaScript';
})

react.addEventListener("mouseover",() => {
  title.textContent = 'React';
})

reactNative.addEventListener("mouseover",() => {
  title.textContent = 'React Native';
})

next.addEventListener("mouseover",() => {
  title.textContent = 'NextJS';
})

tailwind.addEventListener("mouseover",() => {
  title.textContent = 'Tailwind CSS';
})

sql.addEventListener("mouseover",() => {
  title.textContent = 'MySQL';
})

express.addEventListener("mouseover",() => {
  title.textContent = 'Express';
})

prisma.addEventListener("mouseover",() => {
  title.textContent = 'Prisma';
})
java.addEventListener("mouseover",() => {
  title.textContent = 'Java';
})
php.addEventListener("mouseover",() => {
  title.textContent = 'PHP';
})
sqlserver.addEventListener("mouseover",() => {
  title.textContent = 'SQL Server';
})

const personalProjects = [
  {
    title: "E-Ticket : ",
    description: "E-Ticket is a platform where you can buy and sell tickets for events online.",
    tools: `                        Frontend : ReactJS, CSS, ChartJS.<br>
    Backend : Express, Prisma. `,
    previews: `                        <p><a target="_blank" href="https://www.figma.com/file/HP8HfzsdS6oR5pRyBVeRXa/PROJECT-FINAL?node-id=0-1&t=q5panPYPXM6xcGg0-0">View Demo</a></p>
    <p><a target="_blank" href="https://github.com/AyoubELOUAIZI/E-Ticket">View Source Code</a></p>`
  },
  {
    title: "E-Ticket Scanner : ",
    description: "E-Ticket platform mobile app for event organizers to scan clients tickets.",
    tools: `Framework : React Native.`,
    previews: `                        <p><a target="_blank" href="https://www.figma.com/file/C7pNr1N45GLRGaq2EyOvVK/E-TICKET-SCANNER?node-id=0-1&t=DSREZSKkmpX0rWNl-0">View Demo</a></p>
    <p><a target="_blank" href="https://github.com/AyoubELOUAIZI/E-Ticket/tree/master/e-ticket-scanner">View Source Code</a></p>`
  },
  {
    title: "Tawjihi Platform : ",
    description: "Tawjihi Platform is a desktop application for college students to search and apply for academic programs <br> while also providing schools with tools to manage and process student applications.",
    tools: `                        Programming Language : Java.<br>
    Tool : JavaFX.<br>
    Database : SQL Server.<br>`,
    previews: `<p><a target="_blank" href="https://www.figma.com/file/jZNjW1hdx3Ivs9VNQcYiVT/Pre-inscreption-et-orientation?t=6p4JbnP1ZsBjvl3h-0">View Demo</a></p>
    <p><a target="_blank" href="https://github.com/HafidElmoudden/PreinscriptionJavaFX">View Source Code</a></p>`
  },
  {
    title: "Système de gestion des déplacements",
    description: `Stage d'initiation project.<br>
    This app helps organizations manage their employees travel arrangements.`,
    tools: `                        Frontend : NextJS, CSS.
    Backend : NextJS, Prisma, MySQL.`,
    previews: `                        <p><a target="_blank" href="https://imgur.com/a/bZmzxd5">View Demo</a></p>
    <p><a target="_blank" href="https://github.com/HafidElmoudden/deplacement-system">View Source Code</a></p>`
  },
] 


let currentIndex = 0;

prjIndex.textContent = currentIndex + 1;
prjTitle.innerHTML = personalProjects[currentIndex].title;
prjDescription.innerHTML = personalProjects[currentIndex].description;
prjTools.innerHTML = personalProjects[currentIndex].tools;
prjPreviews.innerHTML = personalProjects[currentIndex].previews;

nextBtn.addEventListener("click",() => {
  console.log("next current index is : ", currentIndex, personalProjects.length);
  if(currentIndex < personalProjects.length - 1){
    currentIndex++;
  }
  prjIndex.textContent = currentIndex + 1;
  prjTitle.innerHTML = personalProjects[currentIndex].title;
  prjDescription.innerHTML = personalProjects[currentIndex].description;
  prjTools.innerHTML = personalProjects[currentIndex].tools;
  prjPreviews.innerHTML = personalProjects[currentIndex].previews;
})
prevBtn.addEventListener("click",() => {
  console.log("prev current index is : ", currentIndex, personalProjects.length);
  if(currentIndex > 0) {
    currentIndex--;
  }
  prjIndex.textContent = currentIndex + 1;
  prjTitle.innerHTML = personalProjects[currentIndex].title;
  prjDescription.innerHTML = personalProjects[currentIndex].description;
  prjTools.innerHTML = personalProjects[currentIndex].tools;
  prjPreviews.innerHTML = personalProjects[currentIndex].previews;
})







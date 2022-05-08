var about = document.getElementsByClassName("about");
var education = document.getElementsByClassName("education");
var skills = document.getElementsByClassName("skills");
var hobbys = document.getElementsByClassName("hobbys");
var projects = document.getElementsByClassName("projects");
var lis = document.getElementsByClassName("lis");
var items = document.getElementsByClassName("items");
// hobbys.addEventListener("click", () => {
//   for (let li in lis)
//     if (lis[li].classList.contains("liactive"))
//       lis[li].classList.remove("liactive");
//   about.classList.add("liactive");
// });

// for (let li in lis) {
//   lis[li].addEventListener("click", () => {
//     for (let lim in lis)
//       if (lis[lim].classList.contains("liactive")) {
//         lis[lim].classList.remove("liactive");
//       } else {
//         console.log("Test failed meow");
//       }
//     lis[li].classList.add("liactive");
//     console.log("You just click", lis[li].textContent);
//   });
// }
Array.from(lis).forEach(element => {
    element.addEventListener("click", () => {
        for (let lim in Array.from(lis))
          if (Array.from(lis)[lim].classList.contains("liactive")) {
            Array.from(lis)[lim].classList.remove("liactive");
          }
          console.log(Array.isArray(element))
        element.classList.add("liactive");
        console.log("You just click", element.textContent);
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
    console.log(element)
});
// main.js


// JavaScript to dynamically create a navigation bar

// Define navigation items (Update this array to add/remove items)
const navItems = ["Home", "Blog", "Photos", "Projects", "About", "Github", "Contact"];

// Create navigation bar structure
const navBar = document.querySelector(".navigation");
navBar.insertAdjacentHTML("afterbegin", `<ul class="navList"></ul>`);
const navList = document.querySelector(".navList");
navItems.forEach(item => {
    navList.insertAdjacentHTML("beforeend", `<li class="navItem ${item}"><a href="#">${item}</a></li>`);
    } 
);

// Set href attributes for each navigation item (Update URLs as needed) NOTE: If you edit the array of navigation items, be sure to update this section too.
document.querySelector(".Home").setAttribute("href", "index.html");
document.querySelector(".Blog").setAttribute("href", "blog.html");
document.querySelector(".Photos").setAttribute("href", "photos.html");
document.querySelector(".Projects").setAttribute("href", "projects.html");
document.querySelector(".About").setAttribute("href", "about.html");
document.querySelector(".Github").setAttribute("href", "https://github.com/dchecketts");
document.querySelector(".Contact").setAttribute("href", "mailto:danielkchecketts@gmail.com");
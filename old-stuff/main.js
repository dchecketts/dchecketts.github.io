// main.js
// Goal: One JS file to rule them all
// Just kidding, but this file will contain all the JavaScript needed for the site.
// This is 



// JavaScript to dynamically create a navigation bar

// Define navigation items (Update this array to add/remove items)
const navItems = ["Home", "Blog", "Photos", "Projects", "About", "Github", "Contact"];

// Create navigation bar structure
const navBar = document.querySelector(".navigation");
navBar.insertAdjacentHTML("afterbegin", `<ul class="navList"></ul>`);
const navList = document.querySelector(".navList");
navItems.forEach(item => {
    navList.insertAdjacentHTML("beforeend", `<li class="navItem"><a href="#" class="${item}">${item}</a></li>`);
    } 
);
const githubLink = document.querySelector('.Github');
if (githubLink) {
    githubLink.setAttribute("target", "_blank");
    githubLink.setAttribute("rel", "noopener noreferrer");
  }

// Set href attributes for each navigation item (Update URLs as needed) NOTE: If you edit the array of navigation items, be sure to update this section too.
document.querySelector(".Home").setAttribute("href", "/");
document.querySelector(".Blog").setAttribute("href", "../blog");
document.querySelector(".Photos").setAttribute("href", "../photos");
document.querySelector(".Projects").setAttribute("href", "../projects");
document.querySelector(".About").setAttribute("href", "../about");
document.querySelector(".Github").setAttribute("href", "https://github.com/dchecketts");
document.querySelector(".Contact").setAttribute("href", "mailto:danielkchecketts@gmail.com");
// const navbar = document.getElementById("navlist");
// const links = navbar.getElementsByClassName("nav-link");

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function () {
//         // Remove the active class from all links
//         for (let j = 0; j < links.length; j++) {
//             links[j].classList.remove("active");
//         }
//         // Add the active class to the clicked link
//         this.classList.add("active");
//     });
// }


// Toggle Menu on Hamburger Click
const menu = document.querySelector('.menu');
const menuList = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

menu.addEventListener('click', () => {
    menuList.classList.toggle('show-menu');
})

menuList.addEventListener("click",(e)=>{
    if(e.target.tagName == "A"|| "a"){
        menuList.classList.remove("show-menu");
    }
    else{
        console.log("not link")
    }
})

// Get the dropdown element
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Show dropdown when hovering over "Solutions"
dropdown.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});

// Hide dropdown when moving mouse away
dropdown.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});

// Hide dropdown if clicking anywhere outside
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});


// document.querySelectorAll('.dropdown').forEach((dropdown) => {
//     dropdown.addEventListener('click', (e) => {
//         const menu = dropdown.querySelector('.dropdown-menu');
//         menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
//         e.stopPropagation();
//     });
// });

// document.addEventListener('click', () => {
//     document.querySelectorAll('.dropdown-menu').forEach((menu) => {
//         menu.style.display = 'none';
//     });
// });
// navLinks.forEach(link=> link.addEventListener("click",()=>{ menuList.classList.remove("show-menu")}))



// $(document).ready(function () {
//     // owl-carousel-one slider heading//
//     // $('.owl-carousel-one').owlCarousel({
//     var owlOne = $('.owl-carousel');
//     owlOne.owlCarousel({
//       loop: true,
//       // nav:true,
//       margin: 20,
//       nav: false,
//       dots: false,
//       autoplay: true,
//       autoplayTimeout: 2000,
//       stagePadding: 10,
  
//       responsive: {
//         0: {
//           items: 1
//         },
//         400: {
//           items: 2
//         },
//         600: {
//           items: 3
//         },
//         1000: {
//           items: 4
//         }
//       }
//     });
  
//   });
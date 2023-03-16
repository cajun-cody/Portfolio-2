// Toggle manu-icon in nav bar when on smaller window
let menuIcon = document.getElementById('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    console.log("Hello!")
    menuIcon.classList.toggle('bxs-x-circle');
    navbar.classList.toggle('active');
};



// Scrolling active will be dependent on what section is in the window and putting that one active and others inactive. 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Sticky Navbar stays when scrolling at the top of the viewing window.
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);





document.addEventListener('DOMContentLoaded', function(event) {
    const body = document.querySelector('body');
    const navToggleIcon = document.querySelector('.toggler__icon');
    const navSidebar = document.querySelector('.nav');
    const navListItems = document.querySelectorAll('.nav__item');

    // Toggle navigation
    navToggleIcon.addEventListener('click', function(event) {
        navSidebar.classList.toggle('open');
    });

    // Change background-color of li on hover, to preview the color
    navListItems.forEach(item => {
        item.addEventListener('mouseover', function(event) {
            item.style.backgroundColor = item.textContent;
        });
    });

    // Change background-color of li back to original color, after the hover event
    navListItems.forEach(item => {
        item.addEventListener('mouseleave', function(event) {
            item.style.backgroundColor = '#666';
        });
    });

    // When a li is clicked, change background-color of page to color of the corresponding li. Also close the menu 
    navListItems.forEach(item => {
        item.addEventListener('click', function(event) {
            body.style.backgroundColor = item.textContent;
            navSidebar.classList.remove('open');
        });
    });
});
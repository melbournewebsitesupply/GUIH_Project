// Add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const CSlogoImage = document.querySelector("#cs-navigation .cs-logo img");

CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // Run the function to check the aria-expanded value
    ariaExpanded();
});

// Checks the value of aria-expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// Mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active');
    }
    item.addEventListener('click', onClick);
}

// After scrolling down 100px, add .scroll class to the #cs-navigation
document.addEventListener('scroll', (e) => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('#cs-navigation').classList.add('scroll');
        // Change the cs-logo image when scroll class is applied
        CSlogoImage.src = "/assets/images/Screen Shot 2024-01-18 at 1.15.37 am.png";
    } else {
        document.querySelector('#cs-navigation').classList.remove('scroll');
        // Restore the original cs-logo image when scroll class is not applied
        CSlogoImage.src = "/assets/images/guih_logo_green-new.png";
    }
});

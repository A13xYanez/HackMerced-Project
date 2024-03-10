// Animates the details cards when they become visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.details--hidden');
hiddenElements.forEach((el) => observer.observe(el));



// Game control side bar
const sideBarBox = document.querySelector("#controls");
let isOpen = false;
function openSideBar() {
    if (isOpen == false) {
        sideBarBox.classList.remove('closeBar');
        sideBarBox.classList.add('openBar');
        isOpen = true;
    }
}
function closeSideBar() {
    if (isOpen == true) {
        sideBarBox.classList.remove('openBar');;
        sideBarBox.classList.add('closeBar');
        isOpen = false;
    }
}
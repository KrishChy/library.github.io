let navlinks = document.querySelector(".navlinks");

document.querySelector("#menuBtn").onclick = () => {
    navlinks.classList.toggle('active'); //for menu navbar
}
let menuBtn = document.querySelector("#menuBtn"); //one click hide
let menuOptions = document.querySelectorAll(".navlinks a");

menuBtn.onclick = () => {
    navlinks.classList.toggle('active');
};

menuOptions.forEach(option => {
    option.onclick = () => {
        navlinks.classList.remove('active');
    };
}); //one click hider upto here

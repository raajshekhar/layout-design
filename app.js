const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        [...navLinks].forEach((link, index) => {
            console.log(link.style.animation)
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index/7}s`
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle')
    });
};

const app = () => {
    navSlide();
};

app();

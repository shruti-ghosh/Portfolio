const t1 = gsap.timeline();

t1.from(".nav-area .logo img , .nav-area .button", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})


t1.from(".banner-area .left img", {
    scale : 0,
    opacity: 0,
    duration: 1
})

t1.from(".banner-area .right .text h3, .banner-area .right .text h2, .banner-area .right .text h1, .banner-area .right .text p, .banner-area .right .button", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})


gsap.from(".about-area h2",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: ".about-area h2", 
})

gsap.from(".about-area .container p",{
    opacity: 0,
    duration: 4,
    scrollTrigger: {
        trigger : ".about-area .container p",
        scroller : "body",
        // markers : true,
        start : "top 65%"
    } 
})


gsap.to(".nav-area",{
    backgroundColor: "#1d102e",
    scrollTrigger : {
        trigger : ".nav-area",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : true
    }
})


gsap.from(".skill-area h2",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: ".skill-area h2"
})


gsap.from(".service-area .container h2",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: ".service-area .container h2"
})





var typed = new Typed(".banner-area .container .right .text h2 .type", {
    strings: ['Frontend Developer', 'Graphic Designer','Motion Graphic Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})





let vid = document.querySelector(".vid");

vid.playbackRate = 0.5;





let development = document.querySelector(".skill-area .container .left .button-area .button");
let image1 = document.querySelector(".skill-area .container .right .icons .part1  .html img");
let image2 = document.querySelector(".skill-area .container .right .icons .part1  .css img");
let image3 = document.querySelector(".skill-area .container .right .icons .part1  .javascript img");
let image4 = document.querySelector(".skill-area .container .right .icons .part2  .react img");
let image5 = document.querySelector(".skill-area .container .right .icons .part2  .wordpress img");
let image6 = document.querySelector(".skill-area .container .right .icons .part2  .bootstrap img");
let image7 = document.querySelector(".skill-area .container .right .icons .part3  .tailwind-css img");
let image8 = document.querySelector(".skill-area .container .right .icons .part3  .gsap img");

let designing = document.querySelector(".skill-area .container .left .button-area .btn");
let part3 = document.querySelector(".skill-area .container .right .icons .part3");

designing.addEventListener("click", function(){
    image1.src = "images/skill-area-illustrator-icon.png";
    image2.src = "images/skill-area-photoshop-icon.png";
    image3.src = "images/skill-area-animate-cc-icon.png";
    image4.src = "images/skill-area-coreldraw-icon.png";
    image5.src = "images/skill-area-canva-icon.png";
    image6.src = "images/skill-area-after-effects-icon.png";
    image7.style.display = "none";
    image8.style.display = "none";
designing.style.background = "linear-gradient(90deg, rgba(120, 70, 220, 1) 0%, rgba(84, 48, 158, 1) 50%, rgba(53, 28, 103, 1) 100%)";
part3.style.opacity = "0";
development.style.background = "#1c0f39";
})

development.addEventListener("click", function(){
    image1.src = "images/skill-area-html-icon.png";
    image2.src = "images/skill-area-css-icon.png";
    image3.src = "images/skill-area-javascript-icon.png";
    image4.src = "images/skill-area-react-icon.png";
    image5.src = "images/skill-area-wordpress-icon.png";
    image6.src = "images/skill-area-bootstrap-icon.png";
    image7.style.display = "block";
    image8.style.display = "block";
development.style.background = "linear-gradient(90deg, rgba(120, 70, 220, 1) 0%, rgba(84, 48, 158, 1) 50%, rgba(53, 28, 103, 1) 100%)";
part3.style.opacity = "100";
designing.style.background = "#1c0f39";
})





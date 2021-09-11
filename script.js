console.log("Welcome to CK Markets!");

//AOS
AOS.init({
  duration: 800,
})
//AOS

/*
//ROTATION LOGO
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 6000,
    triggerElement: intro,
    triggerHook: 0.041
  })
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);
//ROTATION LOGO
*/

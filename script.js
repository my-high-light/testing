console.log("Welcome to CK Markets!");

//AOS
AOS.init({
  duration: 800,
})
//AOS

/* Get this month and days of this month */
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

const d = new Date();
let thisMonth = month[d.getMonth()];

let y = thisMonth;

const DaysofNumber = new Array();
DaysofNumber[0] = "31";
DaysofNumber[1] = "28";
DaysofNumber[2] = "31";
DaysofNumber[3] = "30";
DaysofNumber[4] = "31";
DaysofNumber[5] = "31";
DaysofNumber[6] = "30";
DaysofNumber[7] = "31";
DaysofNumber[8] = "30";
DaysofNumber[9] = "31";
DaysofNumber[10] = "30";
DaysofNumber[11] = "31";

let DaysofNumberThisMonth = DaysofNumber[d.getMonth()];

let z = DaysofNumberThisMonth;

/* Get this month and days of this month */

document.getElementById("time").innerHTML = z + " " + y;

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

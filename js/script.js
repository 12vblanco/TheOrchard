const button = document.querySelector("button");
const popup = document.querySelector(".popup__wrapper");
const close = document.querySelector(".popup__content-close");
button.addEventListener("click", () => {
  popup.style.display = "inline-block";
  popup.style.margin = "0 auto";
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
});

// OPENING HOURS
const ul = document.querySelector(".openingjs");

const openingjs = [
  // "Christmas Eve Friday 24th",
  // "Kitchen 12 - 4.30pm Bar 12- 8pm",
  // "Christmas Day Saturday 25th Closed",
  "Boxing Day Sunday 26th",
  "Kitchen 3 – 8.30pm Bar 3 – 9pm",
  "Monday  27th 3-9pm",
  "Tuesday 28th 3-9pm",
  "Wednesday 29th 3-9pm",
  "Thursday 30th 3-9pm",
  "Friday 31st 12-11pm",
  "Saturday 1st 12-10pm",
  "Sunday 2nd 12-10pm",
  // "Monday 12:00 - 22.00 ",
  // "Tuesday 12:00 - 22:00 ",
  // "Wednesday 12:00 - 23:00 ",
  // "Thursday 12:00 - 23:00 ",
  // "Friday 12:00 - 23:00 ",
  // "Saturday 12:00 - 23:00 ",
  // "Sunday 12:00 - 22.00 ",
];

let html = ``;

openingjs.forEach((openingHours) => {
  html += `<li style="list-style: none; text-align: center;"> ${openingHours} </li>`;
});

ul.innerHTML = html;
// // opening footer
// const monday = document.querySelector('.footer__opening-monday');
// monday.innerText = 'Monday 12:00-09.00pm';

// const tuesday = document.querySelector('.footer__opening-tuesday');
// tuesday.innerText = 'Tuesday 12:00-10.30pm';

// const wednesday = document.querySelector('.footer__opening-wednesday');
// wednesday.innerText = 'Wednesday 12:00-10.30pm';

// const thursday = document.querySelector('.footer__opening-thursday');
// thursday.innerText = 'Thursday 12:00-10.30pm';

// const friday = document.querySelector('.footer__opening-friday');
// friday.innerText = 'Friday 12:00-10.30pm';

// const saturday = document.querySelector('.footer__opening-saturday');
// saturday.innerText = 'Saturday 12:00-10:30pm';

// const sunday = document.querySelector('.footer__opening-sunday');
// sunday.innerText = 'Sunday 12:00-09.00pm';

// NOW OPENED?
var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
  ["Sunday", 12.0, 22.0],
  ["Monday", 12.0, 22.0],
  ["Tuesday", 12.0, 22.0],
  ["Wednesday", 12.0, 23.0],
  ["Thursday", 12.0, 23.0],
  ["Friday", 12.0, 23.0],
  ["Saturday", 12.0, 23.0],
];
var day = weekdays[n];

if ((now > day[1] && now < day[2]) || (now > day[3] && now < day[4])) {
  const opening = document.querySelector(".navbar__info-openStatus");
  opening.innerText = "We are open right now!";
  // opening.innerText = 'We plan to reopen on the 29th of April!'
} else {
  const opening = document.querySelector(".navbar__info-openStatus");
  opening.innerText = "Sorry we are closed";
}

// COPYRIGHT

document.querySelector(".year").innerHTML = new Date().getFullYear();

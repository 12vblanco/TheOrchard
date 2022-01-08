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
const opening = document.querySelector(".openingjs");

const openingjs = [
  // "Monday 3rd 12:00 - 22.00 ",
  // "Tuesday 4th 12:00 - 22:00 ",
  // "Wednesday 5th 12:00 - 22:00 ",
  // "Thursday 6th 12:00 - 22:00 ",
  // "Friday 7th 12:00 - 23:00 ",
  "Saturday 8th 12:00 - 23:00 ",
  "Sunday 9th 12:00 - 22.00 ",
  "We will be closed Monday 10th,",
  "Tuesday 11th, Wednesday 12th",
  "& Thursday the 13th",
];

let html = ``;

openingjs.forEach((openingHours) => {
  html += `<li style="list-style: none; text-align: center;"> ${openingHours} </li>`;
});

opening.innerHTML = html;

// Burger Menu
// const bMenu = document.querySelector(".b_menu");

// const burgerMenu = [
//   "<a href='index.html' class='active'>Home</a>",
//   "<a href='gallery.html'>Gallery</a>",
//   "<a href='art.html'>Art</a>",
//   "<a href='about.html'>About Us</a>",
//   "<a href='menu/food.pdf' target='_blank'>Food Menu</a>",
//   "<a href='menu/kids.pdf' target='_blank'>Kids Menu</a>",
//   "<a href='menu/gluten.pdf' target='_blank'>Gluten Free</a>",
//   "<a href='menu/wine.pdf' target='_blank'>Wine Menu</a>",
//   "<a href='menu/beer.pdf' target='_blank'>Beer & Cider</a>",
//   "<a href='menu/whisky.pdf' target='_blank'>Whisky</a>",
//   "<a href='menu/rum.pdf' target='_blank'>Rum</a>",
//   "<a href='menu/gin.pdf' target='_blank'>Gin</a>",
//   "<a href='menu/sherry.pdf' target='_blank'>Sherry Tea & Coffee</a>",
// ];

// burgerMenu.forEach((bMenus) => {
//   html += `<li style="list-style: none; text-align: center;"> ${bMenus} </li>`;
// });

// bMenu.innerHTML = html;

// NOW OPENED?
var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
  ["Sunday", 12.0, 22.0],
  ["Monday", 12.0, 22.0],
  ["Tuesday", 12.0, 22.0],
  ["Wednesday", 12.0, 22.0],
  ["Thursday", 12.0, 22.0],
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

// const button = document.querySelector('button');
// const popup = document.querySelector('.popup__wrapper');
// const close = document.querySelector('.popup__content-close');
// button.addEventListener('click', () => {
//     popup.style.display = 'inline-block';
//     popup.style.margin = '0 auto';
// });
// close.addEventListener('click', () => {
//     popup.style.display = 'none';
// });
// popup.addEventListener('click', () => {
//     popup.style.display = 'none';
// });



// opening footer
const monday = document.querySelector('.footer__opening-monday');
monday.innerText = 'Monday 12:00-09.00pm';

const tuesday = document.querySelector('.footer__opening-tuesday');
tuesday.innerText = 'Tuesday 12:00-10.30pm';

const wednesday = document.querySelector('.footer__opening-wednesday');
wednesday.innerText = 'Wednesday 12:00-10.30pm';

const thursday = document.querySelector('.footer__opening-thursday');
thursday.innerText = 'Thursday 12:00-10.30pm';

const friday = document.querySelector('.footer__opening-friday');
friday.innerText = 'Friday 12:00-10.30pm';

const saturday = document.querySelector('.footer__opening-saturday');
saturday.innerText = 'Saturday 12:00-10:30pm';

const sunday = document.querySelector('.footer__opening-sunday');
sunday.innerText = 'Sunday 12:00-09.00pm';


// opening now
var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
    ["Sunday",  12.00, 21.00],
    ["Monday", 12.00, 21.00],
    ["Tuesday", 12.00, 22.30],
    ["Wednesday", 12.00, 22.30],
    ["Thursday", 12.00, 22.30],
    ["Friday", 12.00, 22.30],
    ["Saturday", 12.00, 22.30],

];
var day = weekdays[n];


if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
    const opening = document.querySelector('.navbar__info-openStatus');
    opening.innerText = 'We are open right now!';
    // opening.innerText = 'We plan to reopen on the 29th of April!'

}
 else {
    const opening = document.querySelector('.navbar__info-openStatus');
    opening.innerText = 'Sorry we are closed'
    ;}



const button = document.querySelector('button');
const popup = document.querySelector('.popup__wrapper');
const close = document.querySelector('.popup__content-close');
button.addEventListener('click', () => {
    popup.style.display = 'inline-block';
    popup.style.margin = '0 auto';
});
close.addEventListener('click', () => {
    popup.style.display = 'none';
});
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});


const monday = document.querySelector('.footer__opening-monday');
monday.innerText = 'Monday 17th 11-10.30pm';

const tuesday = document.querySelector('.footer__opening-tuesday');
tuesday.innerText = 'Tuesday 18 th 11-10.30pm';

const wednesday = document.querySelector('.footer__opening-wednesday');
wednesday.innerText = 'Wednesday 19 th 11-10.30pm';

const thursday = document.querySelector('.footer__opening-thursday');
thursday.innerText = 'Thursday 20 th 11-10.30pm';

const friday = document.querySelector('.footer__opening-friday');
friday.innerText = 'Friday 21 th May 11-10.30pm';

const saturday = document.querySelector('.footer__opening-saturday');
saturday.innerText = 'Saturday 15 th May 11-8pm';

const sunday = document.querySelector('.footer__opening-sunday');
sunday.innerText = 'Sunday 16 th May 11-8pm';

var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
    ["Sunday",  11.00, 20.00],
    ["Monday", 11.00, 22.30],
    ["Tuesday", 11.00, 22.30],
    ["Wednesday", 11.00, 22.30],
    ["Thursday", 11.00, 22.30],
    ["Friday", 11.00, 22.30],
    ["Saturday", 11.00, 20.00],

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
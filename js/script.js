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
monday.innerText = 'Thursday 11-8pm';

const tuesday = document.querySelector('.footer__opening-tuesday');
tuesday.innerText = 'Friday 11-8pm';

const wednesday = document.querySelector('.footer__opening-wednesday');
wednesday.innerText = 'Saturday 11-8pm';

const thursday = document.querySelector('.footer__opening-thursday');
thursday.innerText = 'Sunday 11-8pm';

const friday = document.querySelector('.footer__opening-friday');
friday.innerText = 'NO ALCOHOLIC DRINKS';

const saturday = document.querySelector('.footer__opening-saturday');
saturday.innerText = 'until May 17th!';

const sunday = document.querySelector('.footer__opening-sunday');
sunday.innerText = 'Full food menu will be served 12 - 8pm';

var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
    ["Sunday", 9.30, 12.00, 15.30,22.00],
    ["Monday", 4.30, 12.00, 15.30, 21.00],
    ["Tuesday", 4.30, 12.00, 15.30, 21.00],
    ["Wednesday", 8.30, 12.00, 15.30,19.00],
    ["Thursday", 8.30, 12.00, 15.30,19.00],
    ["Friday", 8.30, 11.30],
    ["Saturday", 9.30, 12.00, 15.30,22.00],

];
var day = weekdays[n];


if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
    const opening = document.querySelector('.navbar__info-openStatus');
    opening.innerText = 'We are open right now!';
    // opening.innerText = 'We plan to reopen on the 29th of April!'

}
 else {
    const opening = document.querySelector('.navbar__info-openStatus');
    opening.innerText = 'Sorry We are Closed'
    ;}
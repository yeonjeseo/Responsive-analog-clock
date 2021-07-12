/* CLOCK */
// const를 한번 쓰고 한번에 여러개의 객체?? 생성 가능
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds');


const clock = () => {
    let date = new Date();

    // express degree for the indicator
    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;
    
    // Add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12 + ss / 3600}deg)`;
    minutes.style.transform = `rotateZ(${mm + ss / 60}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
};

/* Clock & Date text  */
const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmpm = document.getElementById('text-ampm'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year');

const clockText = () => {
    // get date from Date Obj.
    let date = new Date();

    let hour = date.getHours(),
        min = date.getMinutes(),
        ampm = "AM",
        day = date.getDate(),
        month = date.getMonth(),        // January gives 0
        year = date.getFullYear();

    let months = ['Jan' , 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Change the hours from 24 to 12 hours and
    // establish whether it is AM or PM
    if(hour >= 12){
        hour -= 12;
        ampm = "PM";
    }

    // Detect when it's 0 AM and transform to 12 AM
    if(hour == 0) {
        hour = 12;
    }

    // Show a zero if hour & min each are 1 digit
    if(hour < 10) {
        hour = `0${hour}:`;
    }
    if(min < 10) {
        min = `0${min}`;
    }

    textHour.textContent = `${hour}`;
    textMinutes.textContent = `${min}`;
    textAmpm.textContent = `${ampm}`;

    dateDay.textContent = `${day}`;
    dateMonth.textContent = `${months[month]}, `;
    dateYear.textContent = `${year}`;
}

/* DARK/LIGHT THEME */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'bxs-moon' : 'bxs-sun';

// Validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the theme and the crrent icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

//setInterval calls function after 1s, so call the function first initially
clock();
setInterval(clock, 1000);   // refresh time : 1000 = 1 sec
clockText();
setInterval(clockText, 1000);
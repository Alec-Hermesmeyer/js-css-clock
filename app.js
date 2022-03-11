const deg = 6;
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

});

arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1]
console.log(arr1.sort( (a,b) => a-b ));
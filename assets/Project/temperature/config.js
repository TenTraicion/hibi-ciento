// copyright
const copy = document.getElementById("copy");
const udate = new Date();
copy.innerText = udate.getFullYear();

// show date
const show = document.getElementById("date");

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

const days = [
    'Sun',
    'Mon',
    'Tues',
    'Wednes',
    'Thurs',
    'Fri',
    'Satur'
  ]

const da = udate.getDay();
const day = days[da];
const date = udate.getDate();
const mo = udate.getMonth();
const month = months[mo];
const year = udate.getFullYear();
const today = `${day}day, ${month} ${date}, ${year}`;

const showClock = () => {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let meridiem = '';

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    meridiem = hour <= 12 ? meridiem = 'AM' : meridiem = 'PM';
    hour = hour == 00 ? hour = 12 : hour > 12 ? hour = hour - 12 : hour;
    let clock = `${hour} : ${minute} : ${second} ${meridiem}`;
    show.textContent = `${today} and the Time is now: ${clock}`;
}

setInterval(showClock, 100);

// c2f

const fValue = document.querySelector(".c2f button");

function c2f() {
    const c = document.getElementById("celsius").value;
    const span = document.getElementById("c2f");
    span.innerHTML = "";
    const f = c * 1.8 + 32;
    const o = `${f.toFixed(2)}℉`
    span.textContent = o;
    console.log(`The result of ${c}℃ is: ${f}℉`);
}

fValue.addEventListener("click", c2f);

// f2c

const cValue = document.querySelector(".f2c button");

function f2c() {
    const f = document.getElementById("fahrenheit").value;
    const span = document.getElementById("f2c");
    span.innerHTML = "";
    const c = (f - 32) / 1.8;
    const o = `${c.toFixed(2)}℃`
    span.textContent = o;
    console.log(`The result of ${f}℉ is: ${c}℃`);
}

cValue.addEventListener("click", f2c);

// Calculation

const ix = document.getElementById("x"); 
const iy = document.getElementById("y");
const o = document.getElementById("calc");
const s = document.getElementById("s");
const a = document.getElementById("a");
const m = document.getElementById("m");
const d = document.getElementById("d");
const c = document.getElementById("c");
const f = document.getElementById("r");
const pm = document.getElementById("pm");
const ps = document.getElementById("ps");
const pa = document.getElementById("pa");
const pw = document.getElementById("pw");
const q = document.getElementById("pShow");

function sum() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = x + y;
    const p = `The ans of ${x} + ${y} is: ${r}`
    console.log(p);
    c.textContent = "+";
    o.textContent = r;
    f.textContent = p;
    q.textContent = "=";
}

s.addEventListener("click", sum);

function add() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = x - y;
    const p = `The ans of ${x} - ${y} is: ${r}`
    console.log(p);
    c.textContent = "-";
    o.textContent = r;
    f.textContent = p;
    q.textContent = "=";
}

a.addEventListener("click", add);

function mul() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = x * y;
    const p = `The ans of ${x} x ${y} is: ${r}`
    console.log(p);
    c.textContent = "X";
    o.textContent = r;
    f.textContent = p;
    q.textContent = "=";
}

m.addEventListener("click", mul);

function div() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = x / y;
    const p = `The ans of ${x} / ${y} is: ${r.toFixed(4)}`
    console.log(p);
    c.textContent = "/";
    o.textContent = r.toFixed(4);
    f.textContent = p;
    q.textContent = "=";
}

d.addEventListener("click", div);

function per() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = (x * y) / 100;
    const p = `${y}% of ${x} is: ${r.toFixed(4)}`
    console.log(p);
    c.textContent = "X";
    o.textContent = r.toFixed(4);
    f.textContent = p;
    q.textContent = "%";
}

pm.addEventListener("click", per);

function perp() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = x + ((x * y) / 100);
    const p = `The increment of ${x} in ${y}% is: ${r.toFixed(4)}`
    console.log(p);
    c.textContent = "+";
    o.textContent = r.toFixed(4);
    f.textContent = p;
    q.textContent = "%";
}

ps.addEventListener("click", perp);

function perm() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = x - ((x * y) / 100);
    const p = `The decrement of ${x} in ${y}% is: ${r.toFixed(4)}`
    console.log(p);
    c.textContent = "-";
    o.textContent = r.toFixed(4);
    f.textContent = p;
    q.textContent = "%";
}

pa.addEventListener("click", perm);

function perd() {
    const x = +ix.value;
    const y = +iy.value;
    o.innerHTML = "";
    c.innerHTML = "";
    f.innerHTML = "";
    q.innerHTML = "";
    const r = (y * 100) / x;
    const p = `The number ${y} is ${x}'s ${r.toFixed(4)}%`
    console.log(p);
    c.textContent = "~";
    o.textContent = `${r.toFixed(4)}%`;
    f.textContent = p;
    q.textContent = "=";
}

pw.addEventListener("click", perd);

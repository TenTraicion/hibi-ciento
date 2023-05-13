// copyright
const copy = document.getElementById("copy");
const date = new Date();
copy.innerText = date.getFullYear();

// show date
const show = document.getElementById("date");

const format = date.toLocaleDateString("en-US", {
	weekday: "short",
	day: "numeric",
	month: "long",
	year: "numeric",
});

const showClock = () => {
	const time = new Date();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let second = time.getSeconds();
    let meridiem = ""; //extra value for 12 hours format

	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;
    //hiding meridiem
	// meridiem = hour <= 12 ? meridiem = 'AM' : meridiem = 'PM';
    // 12 hours format
	// hour = hour == 00 ? hour = 12 : hour > 12 ? hour = hour - 12 : hour;
    // 24 hours format
	hour = hour == 00 ? (hour = 24) : hour > 24 ? (hour = hour - 24) : hour;
	let clock = `${hour} : ${minute} : ${second} ${meridiem}`;
	show.textContent = `${format} at ${clock}`;
};

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

// Show Referrer
const linkOfTheWebsiteUserCame = document.referrer;

// show referrer on 404 page
const ref = document.getElementById("ref");
ref.setAttribute("href", linkOfTheWebsiteUserCame);
ref.textContent = linkOfTheWebsiteUserCame;
if (linkOfTheWebsiteUserCame == "") {
    ref.setAttribute("href", "#");
    ref.textContent = "Home";
}

// Get Random UUID
const id = document.getElementById("uuid");

// JavaScript code to efficiently generate a random UUID per RFC 4122
function generateRandomUUID() {
	// UUIDs have 16 byte values
	const bytes = new Uint8Array(16);
	// Seed bytes with cryptographically random values
	crypto.getRandomValues(bytes);
	// Set required fields for an RFC 4122 random UUID
	bytes[6] = (bytes[6] & 0x0f) | 0x40;
	bytes[8] = (bytes[8] & 0x3f) | 0x80;
	// Convert bytes to hex and format appropriately
	const uuid = Array.prototype.map
		.call(bytes, (b, i) => {
			// Left-pad single-character values with 0,
			// Convert to hexadecimal,
			// Add dashes
			return (
				(b < 16 ? "0" : "") + b.toString(16) + (i % 2 && i < 10 && i > 2 ? "-" : "")
			);
		})
		.join("");
	// Return the string
	id.innerText = uuid;
}

generateRandomUUID();

// Generate Load Time
document.addEventListener('DOMContentLoaded', function() {
  const load = performance.now() / 1000;
  document.getElementById("loadtime").innerText = `${load.toFixed(2)} seconds`;
}, false);


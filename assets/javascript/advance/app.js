console.log(window);

// alert(); = window.alert();
// window.document();

console.dir(document);

let uname = "tentraicion";
let git = "https://github.com/";
let com = "Solvinux";

// get content by id
let anchor = document.getElementById("link");
anchor.href = git + uname;

//get content by .class, #id, htmlTaG {CSS ELEMENT/SELECTOR} first element only
//document.querySelector("#link") = "test";
//document.querySelectorAll("#link") = "test"; selects every element

//Add element > create, access parent, insert element
let link = document.createElement("a");
let guini = document.querySelector("p");
guini.append(link);
link.href = git + com;
link.textContent = "Company";

//remove element > select and remove
let head = document.querySelector("h1");
head.remove();

//move element
guini.parentElement.append(guini);

//innerHTML
console.log(guini.innerHTML);
guini.innerHTML = "HI! This is <strong>important!</strong>";

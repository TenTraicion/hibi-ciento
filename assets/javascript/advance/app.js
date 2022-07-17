console.log(window);

// alert(); = window.alert();
// window.document();

console.dir(document);

let uname = "tentraicion";
let git = "https://github.com/";
let com = "Solvinux";

//drilling in DOM
// document.body.children[2].children[0].href = "https://github.com/" + uname;

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

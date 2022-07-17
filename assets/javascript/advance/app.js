console.log(window);

// alert(); = window.alert();
// window.document();

console.dir(document);

let uname = "tentraicion";

//drilling in DOM
// document.body.children[2].children[0].href = "https://github.com/" + uname;

// get content by id
let anchor = document.getElementById("link");
anchor.href = "https://github.com/" + uname;

//get content by .class, #id, htmlTaG {CSS ELEMENT/SELECTOR} first element only
//document.querySelector("#link") = "test";
//document.querySelectorAll("#link") = "test"; selects every element

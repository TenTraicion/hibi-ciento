console.log(window);

// alert(); = window.alert();
// window.document();

console.dir(document);

let uname = "tentraicion";

// document.body.children[2].children[0].href = "https://github.com/" + uname;

let anchor = document.getElementById("link");
anchor.href = "https://github.com/" + uname;

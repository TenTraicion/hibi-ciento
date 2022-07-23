// Calling Copyright Variable
const copy = document.getElementById("copy");
const udate = new Date();
copy.innerText = udate.getFullYear();

// Calling Contact
const contact = document.getElementById("contact");
const backdrop = document.getElementById("backdrop");
const ovrl = document.getElementById("ovrl");
const cancel = document.getElementById("exit");
const chk = document.getElementById("chk");
const remains = document.getElementById("count");

//taking input
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const git = document.getElementById("git");
const twit = document.getElementById("twit");
const sub = document.getElementById("sub");
const msg = document.getElementById("msg");

//creating output
const subject = document.getElementById("subject");
const body = document.getElementById("body");

// Add Listener for Contact
contact.addEventListener("click", openConfig);

//close listener
cancel.addEventListener("click", closeConfig);
backdrop.addEventListener("click", closeConfig);

// checkbox
chk.addEventListener("click", checked);

// count
msg.addEventListener("input", update);

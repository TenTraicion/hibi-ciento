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


//opening form
function openConfig() {
  ovrl.style.display = "flex";
  backdrop.style.display = "block";
  console.log("Form Opened!")
}

//closing form
function closeConfig() {
  ovrl.style.display = "none";
  backdrop.style.display = "none";
  console.log("Form Closed!")
}

//checkbox
function checked() {
  const output = `MY Information: \n Name: ${uname.value}\n Email: ${email.value}\n GitHub Profile: https://github.com/${git.value}\n Twitter: https://twitter.com/${twit.value}`;
  const mail = `\n\n My Message:\n ${msg.value}`;

  subject.value = sub.value;
  body.value = output + mail;
  console.log(output + mail);
}

//count
function update(event) {
  const entry = event.target.value;
    
  const count = msg.maxLength - entry.length;

  remains.textContent = count;

  if(count <= 10) {
    remains.className = "error";
    msg.classList.add("error");
    msg.classList.remove("warning");
  } else if(count <= 50) {
      remains.className = "warning"
      msg.classList.remove("error");
      msg.classList.add("warning");
  } else {
      remains.className = "pos";
      msg.classList.remove("warning");
  }
}

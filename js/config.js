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
  console.log(`Mail Send!`)
}

//count
function update(event) {
  const entry = event.target.value.length;
    
  remains.textContent = msg.maxLength - entry;

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

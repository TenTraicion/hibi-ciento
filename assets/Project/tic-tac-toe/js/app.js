const ovrl = document.getElementById("ovrl");
const backdrop = document.getElementById("backdrop");

const ex = document.getElementById("ex");
const ey = document.getElementById("ey");
const cancel = document.getElementById("cancel");

ex.addEventListener("click", openConfig);
ey.addEventListener("click", openConfig);

cancel.addEventListener("click", closeConfig);
backdrop.addEventListener("click", closeConfig);

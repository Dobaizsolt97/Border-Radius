let output = document.querySelector(".output");
let slider1 = document.getElementById("myRange1");
let slider2 = document.getElementById("myRange2");
let slider4 = document.getElementById("myRange4");
let slider3 = document.getElementById("myRange3");
let span = document.getElementById("result");
let button = document.getElementById("copy");
span.textContent = `50% 50% 50% 50% / 50% 50% 50% 50%  `;

document.getElementById(
  "myDIV"
).style.borderRadius = `50% 50% 50% 50% / 50% 50% 50% 50%  `;
slider1.oninput = function() {
  let A = slider1.value;
  let B = 100 - A;
  let D = slider3.value;
  let C = 100 - D;

  let F = slider2.value;
  let G = 100 - F;
  let E = slider4.value;
  let H = 100 - E;

  span.textContent = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%`;
  document.getElementById(
    "myDIV"
  ).style.borderRadius = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%  `;
};
slider2.oninput = function() {
  let A = slider1.value;
  let B = 100 - A;
  let D = slider3.value;
  let C = 100 - D;

  let F = slider2.value;
  let G = 100 - F;
  let E = slider4.value;
  let H = 100 - E;

  span.textContent = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%`;
  document.getElementById(
    "myDIV"
  ).style.borderRadius = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%  `;
};
slider3.oninput = function() {
  let A = slider1.value;
  let B = 100 - A;
  let D = slider3.value;
  let C = 100 - D;

  let F = slider2.value;
  let G = 100 - F;
  let E = slider4.value;
  let H = 100 - E;

  span.textContent = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%`;
  document.getElementById(
    "myDIV"
  ).style.borderRadius = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%  `;
};
slider4.oninput = function() {
  let A = slider1.value;
  let B = 100 - A;
  let D = slider3.value;
  let C = 100 - D;

  let F = slider2.value;
  let G = 100 - F;
  let E = slider4.value;
  let H = 100 - E;

  span.textContent = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%`;
  document.getElementById(
    "myDIV"
  ).style.borderRadius = `${A}% ${B}% ${C}% ${D}% / ${E}% ${F}% ${G}% ${H}%  `;
};

button.addEventListener("click", function() {
  window.navigator.clipboard.writeText(span.textContent);
  alert("Text was copied");
});

let nodeListOfSections = document.querySelectorAll(".section");
let arrayOfFrames = [...nodeListOfSections];

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", slide);
prevBtn.addEventListener("click", slide);
nextBtn.addEventListener("transitionend", removeClass);
prevBtn.addEventListener("transitionend", removeClass);

function removeClass(e) {
  e.currentTarget.classList.remove("clicked");
}

let translateValue = 1000;
function slide(e) {
  if (e.currentTarget.className === "fas fa-chevron-circle-left prev-btn") {
    translateValue += 400;
  } else {
    translateValue -= 400;
  }
  e.currentTarget.classList.add("clicked");
  arrayOfFrames.forEach((frame) => {
    frame.style.transform = `translateX(${translateValue}px)`;
  });
}

const simSlider = document.querySelector(".sim-slider");
const locSlider = document.querySelector(".loc-slider");
const simText = document.querySelector(".sim-text");
const locText = document.querySelector(".loc-text");

simSlider.addEventListener("input", handleSimSlider);
locSlider.addEventListener("input", handleLocSlider);

function handleSimSlider(e) {
  console.log(e.target.value);
  let valueOfSimText = e.target.value;
  simText.textContent = valueOfSimText;
}
function handleLocSlider(e) {
  console.log(e.target.value);
  let valueOfLocText = e.target.value;
  locText.textContent = valueOfLocText;
}

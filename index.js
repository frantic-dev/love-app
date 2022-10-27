let noBtn = document.querySelector("#no");
function randomNum() {
  let number = Math.floor(Math.random() * 90);
  console.log(number);
  return number;
}
randomNum();
noBtn.addEventListener("mouseover", () => {
  noBtn.setAttribute("style", `top: ${randomNum()}%; left: ${randomNum()}%;`);
});
noBtn.addEventListener('click', ()=> {
  resultDiv.textContent = "Ouch.";
})

let yesBtn = document.querySelector("#yes");
let resultDiv = document.querySelector("#result");
yesBtn.addEventListener("click", () => {
  resultDiv.textContent = "Thank you ^.^";
});

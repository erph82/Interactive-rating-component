const numberButtons = document.querySelectorAll(".numbers button");
let selectedNumber = null;
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    numberButtons.forEach((b) => {
      b.style.backgroundColor = "";
      b.style.color = "";
    });
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    selectedNumber = btn.textContent;
  });
});
document.querySelector(".sb").addEventListener("click", () => {
  document.querySelector("body").innerHTML = `
 <div class="sub-card">
  <img class="th" src="/images/illustration-thank-you.svg" alt="thank you" />
  <p class="js">You selected ${selectedNumber} out of 5</p>
  <h1 class="thH1">Thank you!</h1>
  <p>
    We appreciate you taking the time to give a rating. If you ever need more
    support, don't hesitate to get in touch!
  </p>
</div>

        `;
});

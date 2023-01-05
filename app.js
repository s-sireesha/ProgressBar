let circular_progress = document.querySelector(".circular-progress");
let container_value = document.querySelector(".container-value");
let button = document.querySelector(".btn");
let percent_bar = document.querySelector(".percentbar");
let popUp = document.querySelector(".popup");

button.addEventListener("click", () => {
  let start = 0;
  let end = 100;
  percent_bar.classList.toggle("active");

  let greet = setInterval(() => {
    container_value.innerHTML = start + 1 + "%";
    start++;

    percent_bar.style.width = start + "%";
    if (start == end) {
      clearInterval(greet);
      //   alert("Your order is placed successfully");
      popUp.classList.toggle("pop-active");
    }
  }, 50);
});

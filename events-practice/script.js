const themeButton = document.querySelector(".event-btn");
const jumpButton = document.querySelector(".event-btn-2");

function changeTheme() {
  document.body.classList.toggle("darkmode");
}

function jump() {
  jumpButton.style.transform = "translateY(-30px)";
  setTimeout(() => {
    jumpButton.style.transform = "translateY(0)";
  }, 300);

  jumpButton.innerHTML = 'WhOOPp!'
  setTimeout(() => {
    jumpButton.innerHTML = 'Jump'
  }, 300);
}

jumpButton.addEventListener("click", jump);
themeButton.addEventListener("click", changeTheme);

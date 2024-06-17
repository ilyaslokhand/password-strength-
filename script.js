let password = document.getElementById("password");
let MSG = document.getElementById("MSG");
let str = document.getElementById("strength");

password.addEventListener("keyup", () => {
  if (password.value.length > 0) {
    MSG.style.display = "block";
  } else {
    MSG.style.display = "none";
  }
  if (password.value.length < 4) {
    str.innerHTML = " week";
    password.style.borderColor = "#ff5952";
    MSG.style.color = "#ff5952";
  } else if (password.value.length > 4 && password.value.length < 8) {
    str.innerHTML = " Medium";
    password.style.borderColor = "#ff5992";
    MSG.style.color = "#ff5992";
  } else if (password.value.length >= 8) {
    str.innerHTML = " Strong";
    password.style.borderColor = "#ff8992";
    MSG.style.color = "#ff8992";
  }
});

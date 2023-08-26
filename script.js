var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var interval = null;

seconds.addEventListener("keyup", (e) => {
  if (e.value > 60 || e.value < 0 || e.value.length == 3) {
   return e.value = "";
  }
});

minutes.addEventListener("keyup", (e) => {
  if (e.value > 60 || e.value < 0 || e.value.length == 3) {
    e.value = "";
  }
});

hours.addEventListener("keyup", (e) => {
  if (e.value > 99 || e.value < 0 || e.value.length == 3) {
    e.value = "";
  }
});

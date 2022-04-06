const icon = document.querySelectorAll(".icon");
const item = document.querySelectorAll(".item");

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function () {
    if (!item[i].classList.contains("open")) {
      item[i].classList.add("open");
    } else {
      item[i].classList.remove("open");
    }
  });
}

function toggleText(element) {
  const icon = element.querySelector(".line__icon_blus");
  const text = element.nextElementSibling;

  const allIcons = document.querySelectorAll(".line__icon_blus");
  const allTexts = document.querySelectorAll(".descrip__data");

  allIcons.forEach((ic) => {
    ic.src = "./images/icon-plus.svg";
  });

  allTexts.forEach((tx) => {
    tx.style.display = "none";
  });

  if (text.style.display === "none") {
    text.style.display = "block";
    icon.src = "./images/icon-minus.svg";
  } else {
    text.style.display = "none";
    icon.src = "./images/icon-plus.svg";
  }
}

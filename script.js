const shareBtn = document.querySelectorAll(".share-btn");
const cardFooter = document.querySelector(".card-footer");
const share = document.querySelector(".share");

let isShared = false;
share.style.display = "none";

for (let i = 0; i < shareBtn.length; i++) {
  shareBtn[i].addEventListener("click", function clickHandler() {
    if (isShared) {
      isShared = false;
      share.style.display = "none";
    } else {
      isShared = true;
      share.style.display = "flex";
    }
  });
}

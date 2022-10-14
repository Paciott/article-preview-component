const shareBtn = document.querySelector(".share");
const user = document.querySelector(".user");
const tooltipElements = document.querySelector(".tooltip-elements");
const tooltip = document.querySelector(".tooltip");
const arrow = document.querySelector(".arrow");

shareBtn.addEventListener("click", () => {
  user.classList.toggle("closed");
  tooltipElements.classList.toggle("tooltip-closed");
  tooltip.classList.toggle("tooltip-open");
  shareBtn.classList.toggle("clicked");
  arrow.classList.toggle("changed");
});

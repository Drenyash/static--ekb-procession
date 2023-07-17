const symbols = document.querySelectorAll(".grid-symbols__item");
const showMore = document.querySelector("[data-show]");
let maxView = 6;

symbols.forEach((symbol, idx) => {
  if (idx >= maxView) {
    console.log("true");
    symbol.classList.add("hidden");
  }
});

showMore.addEventListener("click", () => {
  symbols.forEach(symbol => {
    if (symbol.classList.contains("hidden")) {
      symbol.classList.remove("hidden");
    }
  });
  showMore.classList.add("hidden");
});

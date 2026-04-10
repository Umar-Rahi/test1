document.querySelectorAll(".bottom-nav a").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

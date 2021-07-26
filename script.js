let items = document.querySelectorAll(".nav-container ul li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

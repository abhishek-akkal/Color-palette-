const heart = document.querySelector(".nav-heart");
const heartIcon = document.querySelector("#heartIcon");

heart.addEventListener("click", () => {
  heartIcon.classList.remove("active");

  void heartIcon.offsetWidth;

  heartIcon.classList.remove("fa-regular");

  heartIcon.classList.add("fa-solid");

  heartIcon.classList.add("active");

  const floatingHeart = document.createElement("span");

  floatingHeart.classList.add("floating-heart");

  floatingHeart.innerHTML = "❤";

  heart.appendChild(floatingHeart);

  setTimeout(() => {
    floatingHeart.remove();
  }, 1800);
});

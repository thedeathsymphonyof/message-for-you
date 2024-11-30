document.getElementById("loveButton").addEventListener("click", function () {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.getElementById("heartContainer").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
});

const myBtn = document.getElementById("btn");
myBtn.addEventListener("click", () => {
  const color =
    "#" +
    Math.floor(Math.random() * 10000000)
      .toString(16)
      .toUpperCase();
  document.body.style.backgroundColor = color;
  //   console.log(color);
});

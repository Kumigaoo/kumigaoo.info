function ranval(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementsByClassName("ojo")[0].addEventListener("click", (_) => {
  let xarxes = Object.values(
    document.getElementsByClassName("redes")[0].children
  );
  document.getElementsByClassName("cerrar")[0].style.display = "flex";
  document.getElementsByClassName("ojo")[0].style.display = "none";
  setTimeout(() => {
    document.getElementById("music").play();
  }, 0.4e3);
  setTimeout(() => {
    document.getElementsByClassName("redes")[0].style.display = "flex";

    xarxes.forEach((xarxa) => {
      xarxa.style.top = ranval(1, 90) + "%";
      xarxa.style.left = ranval(1, 90) + "%";
      xarxa.style.width = ranval(5, 40) + "%";
      xarxa.style.fontSize = ranval(300, 800) + "%";
    });
  }, 0.8e3);
});

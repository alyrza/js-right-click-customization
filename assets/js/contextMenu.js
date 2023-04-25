const myContextMenu = document.querySelector("#myContextMenu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  myContextMenu.style.left = event.pageX + "px";
  myContextMenu.style.top = event.pageY + "px";

  if (window.innerWidth - 300 < event.pageX) {
    myContextMenu.style.left = event.pageX - 150 + "px";
  }
  if (window.innerHeight - 300 < event.pageY) {
    myContextMenu.style.top = event.pageY - 270 + "px";
  }

  myContextMenu.classList.add("show");
});

document.addEventListener("click", (event) => {
  myContextMenu.classList.remove("show");
});

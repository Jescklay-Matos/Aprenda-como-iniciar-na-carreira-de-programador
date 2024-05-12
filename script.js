
const menu = document.querySelector("svg");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
}

function abrirMenu() {
  if (itens.style.display == "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block";
  }
}

const mdlWndw = document.querySelector(".modal-overlay");
const btnWndw = document.querySelector(".btn");
const btnCls = document.querySelector(".close-btn");

btnWndw.addEventListener("click", () => {
  mdlWndw.classList.add("open-modal");
});

btnCls.addEventListener("click", () => {
  mdlWndw.classList.remove("open-modal");
});

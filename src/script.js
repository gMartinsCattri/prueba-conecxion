const dragBtns = document.querySelectorAll(".dragBtn");

dragBtns.forEach((dragBtn) => {
  const drag = (e) => {
    dragBtn.style.top = e.pageY + "px";
    dragBtn.style.left = e.pageX + "px";
  };
  

  /*function drag(e) {

          }*/

  dragBtn.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag);
  });

  window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", drag);
  });
});
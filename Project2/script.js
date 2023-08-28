let elem = document.querySelectorAll(".elem");
elem.forEach(function (val) {
  console.log(val.childNodes)
  val.addEventListener("mouseenter", function () {
    val.childNodes[1].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[1].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (dir) {
    val.childNodes[1].style.left = dir.x+"px";
    val.childNodes[1].style.top = dir.y+"px";
  });
});

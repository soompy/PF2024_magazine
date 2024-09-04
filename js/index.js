document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector(".btn-menu");
  const gnbWrapper = document.querySelector(".gnb-wrapper");
  const body = document.body;

  btnMenu.addEventListener("click", function () {
    btnMenu.classList.toggle("on");
    gnbWrapper.classList.toggle("on");

    if (gnbWrapper.classList.contains("on")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });
});

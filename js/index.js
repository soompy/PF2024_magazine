document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector(".btn-menu");
  const gnbWrapper = document.querySelector(".gnb-wrapper");

  btnMenu.addEventListener("click", function () {    
    btnMenu.classList.toggle("on");
    gnbWrapper.classList.toggle("on");
  });
});

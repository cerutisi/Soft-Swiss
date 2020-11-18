const btnMenuMobile = document.getElementsByClassName("search_btn")[0];
const menuMobile = document.getElementsByClassName("search_wr")[0];
const closeBtn = document.getElementsByClassName("search_wr_close_btn")[0];


closeBtn.addEventListener("click", function(){
    menuMobile.classList.remove("open");
}, false);


btnMenuMobile.addEventListener("click", function(e){
    e.preventDefault()
    menuMobile.classList.toggle("open");
}, false);

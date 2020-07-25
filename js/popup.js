var btn_openPopup=document.getElementById("open-pop"),
btn_closePopup=document.getElementById("close-pop"),
overlay=document.getElementById("overlay");

btn_openPopup.addEventListener("click",function(){

    overlay.classList.add("active");
});

btn_closePopup.addEventListener("click",function(){
    overlay.classList.remove("active");

});

overlay.addEventListener("click",function(){
    overlay.classList.remove("active");

});


var btn_top=document.getElementById("btn-top");

btn_top.addEventListener("click",function(){

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
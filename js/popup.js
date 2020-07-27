//BOTONES OPEN

var btnInfo=document.getElementById("openInfo-pop"),
btnAgra=document.getElementById("openAgra-pop"),
btnApo=document.getElementById("openApo-pop");


//OVERLAYS
var over1=document.getElementById("overlay-1"),
over2=document.getElementById("overlay-2"),
over3=document.getElementById("overlay-3");


//MODELS

var popInfo=document.getElementById("popInfo"),
popAgra=document.getElementById("popAgra"),
popApo=document.getElementById("popApo");

//INFO

btnInfo.addEventListener("click",function(){

    over1.classList.add("active");
    popInfo.classList.add("active");
});

over1.addEventListener("click",function(){

    over1.classList.remove("active");
});

//AGRADECIMIENTOS

btnAgra.addEventListener("click",function(){

    over2.classList.add("active");
    popAgra.classList.add("active");
});

over2.addEventListener("click",function(){

    over2.classList.remove("active");
});



//APOYO

btnApo.addEventListener("click",function(){

    over3.classList.add("active");
    popApo.classList.add("active");
});

over3.addEventListener("click", function(){
    over3.classList.remove("active");
})
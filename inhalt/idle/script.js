window.addEventListener("load", function(){
    window.setTimeout(function(){
        document.getElementsByTagName("main")[0].children[0].style.display = "none";
        document.getElementsByTagName("main")[0].children[1].style.display = "flex";
    }, 3000);
});
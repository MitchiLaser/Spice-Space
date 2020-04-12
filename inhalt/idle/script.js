function updateStatus(event){
    if(navigator.onLine){
        document.getElementsByTagName("main")[0].children[1].style.display = "flex";
        document.getElementsByTagName("main")[0].children[2].style.display = "none";
    }
    else{
        document.getElementsByTagName("main")[0].children[1].style.display = "none";
        document.getElementsByTagName("main")[0].children[2].style.display = "block";
    }
}

window.addEventListener("load", function(){
    window.setTimeout(function(){
        document.getElementsByTagName("main")[0].children[0].style.display = "none";

        window.addEventListener('online',  updateStatus);
        window.addEventListener('offline', updateStatus);

        updateStatus();

        window.setInterval(updateStatus, 1000);
    }, 3000);
});
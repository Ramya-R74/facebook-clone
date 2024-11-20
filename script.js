var settingsMenu = document.querySelector(".user-setting-menu");
var darkbtn = document.getElementById("bcg-toggle-btn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("user-setting-menu");
}
darkbtn.onclick = function(){
darkbtn.classList.toggle("bcg-toggle-btn-on");
document.body.classList.toggle("dark-theme");

if(localStorage.getItem("theme" == "light")){
    localStorage.setItem("theme","dark"); 
}
else{
    localStorage.setItem("theme","light");
}
}


if(localStorage.getItem("theme")== "light"){
    darkbtn.classList.remove("bcg-toggle-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("bcg-toggle-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}



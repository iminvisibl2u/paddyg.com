$(document).ready(main);

function main(){
    //CheckForMobile();
    searchButton.onclick = search;
}

function CheckForMobile(){
    alert(screen.width);
    if (screen.width <= 800) window.location = "http://m.paddyg.com";
}

var search = function(evt){
    var googleString = "https://www.google.com/search?q=";
    var sText = document.getElementById("searchText");
    window.location = googleString + sText.value;
    evt.preventDefault();
};
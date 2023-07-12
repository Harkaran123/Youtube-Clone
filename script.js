
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

var vidContainer = document.querySelector(".container");



menuIcon.onclick = function(){
    sidebar.classList.toggle('small-sidebar');
    vidContainer.classList.toggle('large-container');
    
}


let body = document.getElementsByTagName("body")[0]
let menu = document.getElementsByClassName("menu")[0]
let menu_btn = document.getElementsByClassName("fa-bars")[0]
let header = document.getElementsByClassName("header")[0]
let search = document.getElementsByClassName("seacrh_btn")[0]
let searchbar = document.getElementsByClassName("search")[0]
let icons = document.getElementsByClassName("icons")[0]
let back = document.getElementsByClassName("back")[0]
menu.addEventListener('click',function(){
  header.classList.toggle("active")
  body.classList.toggle("active")
})
search.addEventListener('click',function(){
    searchbar.classList.add("active")
    body.classList.toggle("active")
})
back.addEventListener('click',function(){
    searchbar.classList.remove("active")
    body.classList.toggle("active")
})

"use strict";

const body =document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item,index){
    menu.computedStyleMap.removeProperty("--timeOut");
    if(activeItem==item)
    return;

    if(activeItem){
        activeItem.classList.remove("active");
    }
}
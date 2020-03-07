/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/
"use strict"
var thisTime = new Date("February 3, 2018 3:15:28");
var timeStr = thisTime.toLocaleString();
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

var mapNum = (2 * thisMonth + thisHour) % 24;

var imgStr = "<img src=sd_sky" + mapNum + ".png />";

document.getElementById("timeStamp").innerHTML = timeStr;

document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);

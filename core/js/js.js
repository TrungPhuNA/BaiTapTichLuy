"use strict";

var btnclick     = document.getElementById("clickmy");
var txtname      = document.getElementById("txtname");
var text 		 = document.getElementById("text");

	// click  
	/*btnclick.onclick = function(e) {
		e.preventDefault();
		alert("Ban da click vao btn");
	}*/

	//dbclick
	/*txtname.ondblclick  = function() {
		
		console.log("ban da dbclick ");
	}*/

	// onchange 
	/*txtname.onchange = function() {
		console.log('Gia tri value cua text da thay doi');
	}*/

	//onmouseover
	/*text.onmouseover = function() {
		text.style.color = "red";
	}*/

	//onmouseout
	/*text.onmouseout = function() {
		text.style.color = "green";
	}*/

	//onmousemove 
	/*text.onmousemove = function(e) {
		var x = e.clientX ;
		var y = e.clientY ;
		console.log('move ' + x + "," + y);
	};*/

	//onkeydown 
	txtname.onkeydown = function() {
		console.log('ban vua go phim  ' + txtname.value);
	}

	//onkeyup 
	txtname.onkeyup = function() {
		console.log('Ban da tha phim roi');
	}

	//onkeypress 
	txtname.onkeypress = function() {
		console.log("Ban vua an phim     ");
	}

	//onblur 
	txtname.onblur = function() {
		txtname.value = "Ban vua onblur";
	}
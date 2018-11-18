window.onload = function() {
	initColorPicker();
};

function turnOn() {
	var myCol = document.getElementById("P1");
	myCol.style.color = "red";
	myCol.style.fontFamily = "sans-serif";
}


function findReplace()  {
	var str = document.getElementById("P2").innerHTML;
	var res = str.replace("porchetta", "Veg");
	document.getElementById("P2").innerHTML = res;
}
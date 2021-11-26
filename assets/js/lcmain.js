/*==================================*/
/*========== LETCOMM ===============*/
/* www.jamespankhurst.co.uk/letcomm */
/* jamespankhurst180@gmail.com      */
/* github.com/jamespankhurst/letcomm*/
/*==================================*/

/*-------------*/
/*--- UTILS ---*/
/*-------------*/
function $(id){ return document.getElementById(id) };
function getRndInteger(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
function pad(num, size) { var s = num+""; while (s.length < size) s = "0" + s;  return s; }; //add 0 to numbers below 10
function restart(){ window.location.replace("index.html"); };

/*------------------*/
/*--- LOAD PAGE  ---*/
/*------------------*/ 
function loadPage(intSect, strFile) {
	let xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	document.getElementById("arena-container").innerHTML =  this.responseText;
	}
};
xhttp.open("GET", "assets/xhttp/" + strFile, true);
//xhttp.onload = function () {  diceRoll(pid, rollNo); };
xhttp.send();
};
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

/*-------------------*/
/*--- MAIN OBJECT ---*/
/*-------------------*/

const _mainObj = {
					intId: 1,	
					_pages: {
						k5_txt: "Five of a kind",
						k4_txt: "Four of a kind",
						fh_txt: "Full House", 
						k3_txt: "Three of a kind", 
						p2_txt: "Two pair", 
						p1_txt: "One pair", 
						hc_txt: "High card"
					},
					_comms: {
						openingtxt: "Someting you just can't decide? Toss a coin?..or play a game of..",
						roll1txt: "First roll",
						roll2txt: "Second roll",
						rolltobeat: "Roll to beat:"
					},
					_autohold: {
						nines: 0,
						tens: 0,
						jacks: 0,
						queens: 0,
						kings: 0,
						aces: 0,
						autoheld: 0
					}
				};


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
xhttp.open("GET", "assets/xhttp/" + strFile + ".html", true);
//xhttp.onload = function () {  diceRoll(pid, rollNo); };
xhttp.send();
};
// alert (Реклама)
var count = "x"
function game(x) {
	document.getElementsByTagName('td')[x].innerHTML = "<h1>"+count+"</h1>"
	if (count == "x") {
		count = "o"
	}else{
		count = "x"
	}	
}
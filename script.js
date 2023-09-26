document.write("<table class='matrix' cellpadding=0>")
for (i = 1; i <= 15; i++) {
	document.write("<tr>")
	for (j = 1; j <= 15; j++) {
		document.write("<td>")
		if (1) {
			document.write("<div class='pont'></div>")
		}
		document.write("</td>")
	}
	document.write("</tr>")
}
document.write("</table></br>")

function rnd() {

	var pontok = document.querySelectorAll(".pont");

	for (var i = 1; i <= pontok.length; i++) {
		var szinek = '#' + Math.floor(Math.random() * 16777215).toString(16);
		pontok[i].style.backgroundColor = szinek;
	}
    
}


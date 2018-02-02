$(document).ready(function(){
	canvs = $("#c")[0];
	cc = canvs.getContext("2d");
	var score1 = $("#score1");
	var score2 = $("#score2");
	$("#button").click(start);
	$(document).mousemove(moveBat);
});

function start() {
	setInterval(game, 5);
}

var xv = yv = 1.5,
	by1 = by2 = 0;
	px = py = 10;



function moveBat(e) {
	if(px<canvs.width -15 && xv<0){
		by1 = e.pageY - 100;
	} else if(px>15 && xv>0){
		by2 = e.pageY - 100;
	}
	console.log(by1);
	
}

var scr1 = scr2 = 0;
function game() {
	px += xv;
	py += yv;

	if(px<1){
		console.log("Point!");
		px = canvs.width/2;
		py = canvs.height/2 - 1;
		scr2++;
		score2.innerHTML = "Player 2: " + scr2;

	}
	if(px>canvs.width-1){
		px = canvs.width/2;
		py = canvs.height/2 - 1;
		scr1++;
		score1.innerHTML = "Player 1: " + scr1;
	}
	if(py>canvs.height-1){
		yv = -1.5;
	}
	if(py<5){
		yv = 1.5;
	}
	if(py>by1 && py<by1+100 && px<10){
		xv = 1.5;
	}
	if(py>by2 && py<by2+100 && px>canvs.width-10){
		xv = -1.5;
	}
	cc.fillStyle = "green";
	cc.fillRect(0,0, canvs.width, canvs.height);

	cc.fillStyle = "grey";
	cc.fillRect(canvs.width/2 - 2, 0, 5, canvs.height);

	if(by1<canvs.height-1 && by2<canvs.height-1){
		cc.fillStyle = "#fff";
		cc.fillRect(3,by1,7, 100);

		cc.fillStyle = "#fff";
		cc.fillRect(canvs.width-10,by2,7, 100);
	}

	cc.beginPath();
	cc.arc(px, py ,5,0,2*Math.PI);
	cc.fill();
}
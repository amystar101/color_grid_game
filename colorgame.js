var num=6;
var color=[];
var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
var pickedcolor=pickcolor();
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var newcolor=document.querySelectorAll("button")[0];
var easybutton=document.querySelectorAll("button")[1];
var hardbutton=document.querySelectorAll("button")[2];
var r,g,b;

easybutton.addEventListener("click",function(){
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	num=3;
	newgame();
});

hardbutton.addEventListener("click",function(){
	hardbutton.classList.add("selected");
	easybutton.classList.remove("selected");
	num=6;
	newgame();
})
function newgame()
{
	message.textContent="";
	newcolor.textContent="new colors";
	h1.style.backgroundColor="steelblue";
	color=generatecolor(num);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	squarecolorchange();
}
function squarecolorchange(){
	for(var i=0;i<color.length;i++)
	{
		squares[i].style.display="block";
		squares[i].style.backgroundColor=color[i];
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor===pickedcolor){
				message.textContent="correct";
				changecolor(pickedcolor);
				h1.style.backgroundColor=pickedcolor;
				newcolor.textContent="play again";

			}
			else{
				this.style.backgroundColor="#232323";
				message.textContent="Try again";
			}
		});
	}
	for(var i=num;i<6;i++)
		squares[i].style.display="none";
}

function changecolor(clr)
{
	for(var i=0;i<color.length;i++)
		squares[i].style.backgroundColor=clr;
}
function pickcolor()
{
	var x=Math.floor(Math.random()*color.length);
	return color[x];
}
function generatecolor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(nextcolor());
	}
	return arr;
}
function nextcolor()
{
	var r1=Math.floor(Math.random()*256);
	var g1=Math.floor(Math.random()*256);
	var b1=Math.floor(Math.random()*256);
	return "rgb("+r1+", "+g1+", "+b1+")";
}
newcolor.addEventListener("click",function(){
	newgame();
});
function init()
{
	colordisplay.textContent=pickedcolor;
	hardbutton.classList.add("selected");
	easybutton.classList.remove("selected");
	newgame();
}
init();

function show()
{
	var top=20;
	var left=20;
	var width=500;
	var height= 500;
	var colour=["red","yellow","orange","blue","green","brown","purple","black"];
	var the_body=document.getElementById('thebody');

	while(width>50)
	{
		var thediv=document.createElement("div");
		var rand= Math.floor(Math.random()*8);
		thediv.style.top= top+"px";
		thediv.style.left= left+"px";
		thediv.style.width= width+"px";
		thediv.style.height=height +"px";
		thediv.style.background=colour[rand];
		the_body.appendChild(thediv);
		top+=10;
		left+=10;
		width-=20;
		height-=20;
	}
}
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
	console.log(imageIndex);
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function play(){
	if(t == 0){
		imageIndex = 0;
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	if(t == 0){
		setTimeout(showImage, 1000);
		setInterval(showImage, 2500);
	}
	t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.01;
		btn.style.opacity = btnVal;
	}
	else{
		if(ok == 3){
			ok += 1;
		}
	}
}

preshowImage();
setTimeout(preshowImage, 500);


setInterval(function (){
	if(ok == 3){
		setTimeout(function(){setInterval(buttonFadeIn, 200);}, 1500);
	}
}, 50)
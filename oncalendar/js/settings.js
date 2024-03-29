//颜色主题
function color(color){
    document.getElementById("weekDay").style.backgroundColor = color + '90';
    document.getElementById("cleanStudentTitle").style.backgroundColor = color + '90';
    document.getElementById("cleanBlackboardStudentTitle").style.backgroundColor = color + '90';
    document.getElementById("toEatTitle").style.backgroundColor = color + '90';
    document.getElementById("timeBox").style.backgroundColor = color + '40';
    document.getElementById("simplePoetry").style.backgroundColor = color + '40';
    document.getElementById("simpleNotice").style.backgroundColor = color + '40';
    for( i = 0 ; i <= 8 ; i ++){
        a = 'c' + i;console.log(a);
        // document.getElementById(a).style.borderBottom = "1px " + color + " solid";
        document.getElementById(a).style.borderTop = "2px " + color + " solid";
    }
    if( color === "#ffffff" ){
        document.getElementById("weekDay").style.color = "rgb(55,55,55)";
        document.getElementById("cleanStudentTitle").style.color = "rgb(55,55,55)";
        document.getElementById("cleanBlackboardStudentTitle").style.color = "rgb(55,55,55)";
        document.getElementById("toEatTitle").style.color = "rgb(55,55,55)";
    }else{
        document.getElementById("weekDay").style.color = "white";
        document.getElementById("cleanStudentTitle").style.color = "white";
        document.getElementById("cleanBlackboardStudentTitle").style.color = "white";
        document.getElementById("toEatTitle").style.color = "white";
    }

}

//焦点模式
function showFocus(){
    document.getElementById("sidebarMain").style.visibility = "hidden";
    // document.getElementById("timeBox").style.bottom = "50%";
    // document.getElementById("timeBox").style.right = "50%";
    // document.getElementById("timeBox").style.transform = "translate(50%,50%)";
    // document.getElementById("timeBox").style.width = "50%";
    // document.getElementById("timeBox").style.height = "30%";
    // document.getElementById("simpleNotice").style.display = "none";
	document.getElementById("right").style.width = "100%";
	document.getElementById("right").style.justifyContent = "center";
	document.getElementById("timeBox").style.marginRight = "0px";
	document.getElementById("timeBox").style.fontSize = "12vw";
    document.getElementById("homeworks").style.position = "absolute"
    document.getElementById("homeworks").style.left = "0px"
    document.getElementById("homeworks").style.width = "20%"
	document.getElementById("simpleNotice").style.display = "none";
}

function showNormal(){
    document.getElementById("sidebarMain").style.visibility = "visible";
	document.getElementById("right").style.width = "auto";
	document.getElementById("right").style.justifyContent = "flex-end";
	document.getElementById("timeBox").style.marginRight = "60px";
	document.getElementById("timeBox").style.fontSize = "10vw";
    document.getElementById("homeworks").style.removeProperty("position");

	if(windowWidth >= 650){
		document.getElementById("rightTopBox").style.display = "flex";
	}else{
		document.getElementById("rightTopBox").style.display = "none";
	}
}

// 解决标语框响应式的大问题
// window.addEventListener("resize",function(){
// 	let windowWidth = Number(document.documentElement.clientWidth);
// 	if(windowWidth >= 650){
// 		document.getElementById("simpleNotice").style.display = "flex";
// 		document.getElementById("smallScreen").style.display = "none";
// 		a = document.getElementById("timeBox");
// 		a.style.display = "flex";
// 		a.style.height = "25%";
// 		a.style.width = "35%";
// 		// a.style.fontSize = "130px";
// 	}else{
// 		document.getElementById("simpleNotice").style.display = "none";
// 		document.getElementById("smallScreen").style.display = "flex";
// 		document.getElementById("timeBox").style.display = "none";
// 	}
// })

//小屏幕使用提醒
function smallScreen(){
	let windowWidth = Number(document.documentElement.clientWidth);
	if(windowWidth >= 650){
		document.getElementById("smallScreen").style.display = "none";
	}else{
		document.getElementById("smallScreen").style.display = "flex";
	}
}

//焦点模式响应式
function showSmallFocus(){
	let windowWidth = Number(document.documentElement.clientWidth);
	if(windowWidth >= 650){
		return;
	}else{
		a = document.getElementById("timeBox");
		a.style.display = "flex";
		a.style.height = "150px";
		a.style.width = "auto";
		a.style.fontSize = "90px";
	}
}

function showSmallNormal(){
	let windowWidth = Number(document.documentElement.clientWidth);
	if(windowWidth >= 650){
		return;
	}else{
		document.getElementById("timeBox").style.display = "none";
	}
}

// 背景切换
// function techyesPic(){
// 	let a = document.body;
// 	let b = document.getElementById("bgInfor");
// 	MG.bgBind(a);
// 	MG.infoBind(b);
// 	MG.setBg(1);
// }

//临时背景切换
//默认使用bing
document.body.style.backgroundImage = "url(https://www.yangshangzhen.com/bing/wallpaper)";
//技协背景
function startTechyesBg(){
	clearInterval(window.techyesBgInterval);
	bg();
	clearInterval(bg.Interval);
	window.techyesBgInterval = setInterval( function(){
		bg();
	} , 300000 );
}
//bing背景
function bingBg(){
	clearInterval(bg.interval);
	clearInterval(window.techyesBgInterval);
	document.body.style.backgroundImage = "url(https://www.yangshangzhen.com/bing/wallpaper)";

}

//今日诗词调用函数
function simplePoetry(){
	jinrishici.load(function(result){
		let sentence = result.data.content;
		let poetryInfo = result.data.origin;
		document.getElementById("simplePoetry").innerHTML = sentence;
		document.getElementById("poetryInfor").innerHTML = 
		"诗词信息: " + poetryInfo.dynasty + "&nbsp" + poetryInfo.author + 
		"&nbsp" + "《" + poetryInfo.title + "》";
	});
}

//一言和诗词切换
function changePoetry(name){
	if(name === "onesay"){
		clearInterval(window.poetryInterval);
		clearInterval(window.oneSayInterval);
		oneSay();startOneSay();
	}else if(name === "poetry"){
		clearInterval(window.poetryInterval);
		clearInterval(window.oneSayInterval);
		simplePoetry()
		window.poetryInterval = setInterval(simplePoetry,300000);
	}
}
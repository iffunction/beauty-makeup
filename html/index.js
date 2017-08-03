window.onload = function(){
var oSubnav = document.getElementById("subnav");
var	oNav = oSubnav.getElementsByTagName("nav")[0],
	oUl = oNav.getElementsByTagName("ul")[0],
	aSpan = oUl.getElementsByTagName("span"),
	aDiv = oUl.getElementsByTagName("div"),

	oAside = oSubnav.getElementsByTagName("aside")[0],
	oOl = oAside.getElementsByTagName("ol")[0],
	aOli = oOl.getElementsByTagName("li"),
	aUl = oAside.getElementsByTagName("ul");


//左边商品分类
for (var i = 0; i < aSpan.length; i++) {
	aSpan[i].index = i;
	aDiv[i].style.display = "none";
	aSpan[i].onclick = function(){
		if (aDiv[this.index].style.display =="none") {
			for (var j = 0; j < aSpan.length; j++) {
				aDiv[j].style.display = "none";
			};
			aDiv[this.index].style.display = "block";
		} else {
			aDiv[this.index].style.display = "none";
		};
		
	};
	aDiv[i].onmouseout = function(){
		this.style.display = "none";
	};
};
//中间大图轮换定时器
var show = document.getElementById("show"),
	oshowImg = show.getElementsByTagName("img")[0],
	ashowUl = show.getElementsByTagName("ul");
	ashowImg = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"],
	ashowLi = ashowUl[0].getElementsByTagName("li"),
	oshowImg.num = 0;
	oshowImg.timer = null;
for (var i = 0; i < ashowImg.length; i++) {
	ashowUl[0].innerHTML += "<li>"+(i+1)+"</li>";
};
oshowImg.src = ashowImg[oshowImg.num];
ashowLi[oshowImg.num].style.cssText = "background:#fff; color:#fa6e9d;";
oshowImg.timer = setInterval(showTime,3000);
function showTime(){
	ashowLi[oshowImg.num].style.cssText = "";
	if(oshowImg.num == ashowImg.length-1)oshowImg.num = -1;
	oshowImg.num +=1;
	oshowImg.src = ashowImg[oshowImg.num];
	ashowLi[oshowImg.num].style.cssText = "background:#fff; color:#fa6e9d;";
}
for (var i = 0; i < ashowLi.length; i++) {
	ashowLi[i].index = i;
	ashowLi[i].onclick = function(){
		clearInterval(oshowImg.timer);
		ashowLi[oshowImg.num].style.cssText = "";
		oshowImg.src = ashowImg[this.index];
		ashowLi[this.index].style.cssText = "background:#fff; color:#fa6e9d;";
		oshowImg.num = this.index;
	};
};
ashowUl[0].onmouseover = function(){
	clearInterval(oshowImg.timer);
};
ashowUl[0].onmouseout = function(){
	oshowImg.timer = setInterval(showTime,3000);
};
//大图定时器结束
//下方图片防止缩小排版错乱
var ashowDown = show.getElementsByTagName("div")[0],
	ashowDownimg = ashowDown.getElementsByTagName("img");
for (var i = 0; i < ashowDownimg.length; i++) {
	ashowDownimg[i].style.left = i*187+"px";
}
//排版结束
//右边最新动态积分换购
aOli[0].style.cssText = "background:#fff; color:#fa6e9d;";
aUl[0].style.display = "block";
for( var i=0; i<aOli.length; i++){
	fn1(aUl[i]);
	aOli[i].index = i;
	aOli[i].onclick = function(){
		for( var j=0; j<aOli.length; j++){
			aOli[j].style.cssText = "";
			aUl[j].style.display = "";
			};
		this.style.cssText = "background:#fff; color:#fa6e9d;";
		aUl[this.index].style.display = "block";
		};
	};
function fn1(ul){
	var a = ul.getElementsByTagName("a");
	for ( var i=0; i<a.length; i++){
		a[i].onmouseover = function (){
			this.style.cssText = "color:#fa6e9d;";
			};
		a[i].onmouseout = function (){
			this.style.color = "#000";
			};
		};
	};
//结束
//右边动态下方图片轮换
var oscrollMini = document.getElementById("scrollMini"),
	oscroMiImg = oscrollMini.getElementsByTagName("img")[0],
	oscroMiB = oscrollMini.getElementsByTagName("b")[0],
	oscroMiI = oscrollMini.getElementsByTagName("i")[0],
	ascrollMiimgs = ["img/img0 (1).png","img/img0 (2).png","img/img0 (3).png"];
	oscroMiImg.num = 0;
	oscroMiImg.timer = null;

oscroMiImg.src = ascrollMiimgs[oscroMiImg.num];
oscroMiImg.timer = setInterval(oscrollMiTime,2500);
function oscrollMiTime(){
	oscroMiImg.num++;
	oscroMiImg.src = ascrollMiimgs[oscroMiImg.num];
	if (oscroMiImg.num == ascrollMiimgs.length-1) oscroMiImg.num = -1;
};
oscroMiB.onmouseover = function(){this.style.opacity = "1";cleartime()};
oscroMiB.onclick = function(){move(-1)};
oscroMiB.onmouseout = function(){this.style.opacity = "" ;settime()};
oscroMiI.onmouseover = function(){this.style.opacity = "1";cleartime()};
oscroMiI.onclick = function(){move(+1)};
oscroMiI.onmouseout = function(){this.style.opacity = "" ;settime()};
function settime(){
	oscroMiImg.timer = setInterval(oscrollMiTime,2500);
};
function cleartime(){
	clearInterval(oscroMiImg.timer);
};
function move(a){
	if (a == +1) {
		if (oscroMiImg.num == ascrollMiimgs.length-1) oscroMiImg.num = -1;
		oscroMiImg.num++;
		oscroMiImg.src = ascrollMiimgs[oscroMiImg.num];
	} else {
		if (oscroMiImg.num == 0) oscroMiImg.num = ascrollMiimgs.length;
		oscroMiImg.num--;
		oscroMiImg.src = ascrollMiimgs[oscroMiImg.num];
	};	
};
//下方图片轮换结束
//新品上架最右品牌专区小图标
var oNewlist = document.getElementById("newlist"),
	oListR = oNewlist.getElementsByTagName("section")[1],
	oListRDiv = oListR.getElementsByTagName("div")[0],
	aListRDImg = oListRDiv.getElementsByTagName("img"),
	str = "",
	top = 0,
	left =0,
	src,
	aImg = ["img/miniimg (1).png","img/miniimg (2).png","img/miniimg (3).png","img/miniimg (4).png","img/miniimg (5).png","img/miniimg (1).png","img/miniimg (2).png","img/miniimg (3).png","img/miniimg (4).png","img/miniimg (5).png","img/miniimg (1).png","img/miniimg (2).png","img/miniimg (3).png","img/miniimg (4).png","img/miniimg (5).png","img/miniimg (1).png"];
for (var i = 0; i < 16; i++) {
	top = parseInt(i/4)*64+"px";
	left = i%4*60+"px";
	src = aImg[i];
	str += "<div style='top:"+top+"; left:"+left+";'>"+"<a href = '#'>"+"<img src='"+src+"'>"+"</div>";
	oListRDiv.innerHTML = str;
	};
//下图标结束
//主体内容传参
var aMain = document.getElementsByTagName("article");
for (var i=1; i<aMain.length; i++) {
	main(aMain[i]);
};
//主体内容右边排行榜
function main(main){
 	var oAside = main.getElementsByTagName("aside")[0];
	var aLi = oAside.getElementsByTagName("li");
	var	aDiv = oAside.getElementsByTagName("div");
	var	num = 0;
	aLi[0].style.color = "#F9C";
	aDiv[0].style.display = "block";
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			aLi[num].style.color = "#000";
			aDiv[num].style.display = "none";
			aLi[this.index].style.color = "#F9C";
			aDiv[this.index].style.display = "block";
			num = this.index
			};
		};
	};
//主体结束
//底部友情链接
var friendlin = document.getElementById("friendlink"),
	aH4 = friendlin.getElementsByTagName("h4"),
	icon = ["url(../img/icon.jpg)","url(../img/icon2.jpg)","url(../img/icon3.jpg)","url(../img/icon4.jpg)","url(../img/icon5.jpg)"],
	icon2 =["url(file:///C:/Users/hasee/Desktop/html/img/icon.jpg)","url(file:///C:/Users/hasee/Desktop/html/img/icon2.jpg)","url(file:///C:/Users/hasee/Desktop/html/img/icon3.jpg)","url(file:///C:/Users/hasee/Desktop/html/img/icon4.jpg)","url(file:///C:/Users/hasee/Desktop/html/img/icon5.jpg)",];

//本机编写时测试相对地址无法使用

//aH4[0].style.backgroundImage = "url(file://C:/Users/hasee/Desktop/html/img/icon.jpg)";
//alert(aH4[0].style.background);

for (var i = 0; i < aH4.length; i++) {
	aH4[i].style.backgroundImage = icon[i];
	aH4[i].style.backgroundImage = icon2[i];
};

};








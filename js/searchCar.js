
/*轮播图*/
var bannerData = [
	{
		url:"./img/banner1.jpg",
		title:"广告",
		href:"/ad"
	},
	{
		url:"./img/banner2.jpg",
		title:"大风车",
		href:"/dfc"
	},
	{
		url:"./img/banner3.jpg",
		title:"车牛",
		href:"/cn"
	},
];

/*封装轮播插件*/
function createBanner(option){
	var data = option.data,
		dataLen = data.length,
		element = document.getElementById(option.element),
		fragment = document.createDocumentFragment(),
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item));
		}),
		timer = createTimer();
	function createImage(option){
		var a = document.createElement("a");
		a.href = option.href;
		a.title = option.title;
		a.style.backgroundImage = "url("+option.url+")";
		return a;
	}
	function createTimer(){
		return setInterval(function(){
			var _a = a;
			a = a >= dataLen-1 ? 0 : a+1;
			images[_a].className = "";
			images[a].className = "current";
		},4000)
	}
	function createButton(className){
		var i = document.createElement("i");
		i.className = "icon " + className;
		i.onclick = function(){
			clearInterval(timer);
			timer = createTimer();
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a-1 : dataLen - 1;
			}else{
				a = a >= dataLen-1 ? 0 : a+1;
			}
			images[_a].className = null;
			images[a].className = "current";
		};
		return i;
	}
	images[a].className = "current";
	
	//创建左右按钮
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
}

createBanner({
	element:"banner",
	data:bannerData
});




/*展示信息*/
var exhibitData = [
	{
		title : "豪车不止BBA",
		label : "德系三驾马车,是时候退位让贤啦",
		href : "#",
		big_bg : "./img/exhibition01.jpg",
		sm_bg : "./img/sm_exhibit01.png",
	},
	{
		title : "豪车不止BBA",
		label : "德系三驾马车,是时候退位让贤啦",
		href : "#",
		big_bg : "./img/exhibition02.jpg",
		sm_bg : "./img/sm_exhibit02.png",
	},
	{
		title : "豪车不止BBA",
		label : "德系三驾马车,是时候退位让贤啦",
		href : "#",
		big_bg : "./img/exhibition03.jpg",
		sm_bg : "./img/sm_exhibit03.png",
	},
	{
		title : "豪车不止BBA",
		label : "德系三驾马车,是时候退位让贤啦",
		href : "#",
		big_bg : "./img/exhibition04.jpg",
		sm_bg : "./img/sm_exhibit04.png",
	},
	{
		title : "豪车不止BBA",
		label : "德系三驾马车,是时候退位让贤啦",
		href : "#",
		big_bg : "./img/exhibition05.jpg",
		sm_bg : "./img/sm_exhibit05.png",
	},
	{
		title : "豪车不止BBA",
		label : "德系三驾马车,是时候退位让贤啦",
		href : "#",
		big_bg : "./img/exhibition06.jpg",
		sm_bg : "./img/sm_exhibit06.png",
	}
]

function createExhibit(option){
	var exh = document.getElementById("exhibition"),
		fragment = document.createDocumentFragment(),
		data = option.forEach(function(item){
			return fragment.appendChild(createPic(item));
		});
		
	
	function createPic(option){
		var a = document.createElement("a"),
			leftB = document.createElement("div"),
			rightB = document.createElement("div"),
			rigDownB = document.createElement("div"),
			h2 = document.createElement("h2"),
			p = document.createElement("p"),
			img = document.createElement("img");
		a.className = "imgContainer";
		a.href = option.href;
		leftB.className = "leftB";
		leftB.style.backgroundImage = "url("+option.big_bg+")";
		rightB.className = "rightB";
		rigDownB.className = "rigDownB";
		h2.innerText = option.title;
		p.innerText = option.label;
		img.src = option.sm_bg;
		rigDownB.appendChild(img);
		rightB.appendChild(h2);
		rightB.appendChild(p);
		rightB.appendChild(rigDownB);
		a.appendChild(leftB);
		a.appendChild(rightB);
		return a;
	}
	exh.appendChild(fragment);
}
createExhibit(exhibitData);














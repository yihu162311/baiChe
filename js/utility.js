//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};

//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a <len){
		result.push(callback(this[a],a++,this));
	}
	return result;
}
//数组filter方法补丁
Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};

/*侧边栏点击回顶部*/
var backTop = document.getElementById("backTop");
backTop.onclick = function(){
	scrollTo(0,0);
}

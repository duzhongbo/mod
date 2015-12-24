define(function(require, exports) {
	var Welcome = Backbone.View.extend({
		initialize:function(){
			var iClsIndex = this.getCookie('iClsIndex');
			if(iClsIndex){
				iClsIndex++;
				if(iClsIndex>3||iClsIndex==3){
					iClsIndex=0;
				}
			}else{
				iClsIndex=0;
			}
			this.setCookie('iClsIndex',iClsIndex,365);
			var oData = {
				oIndexData:aWelcome[iClsIndex]
			}
			$('.welcome').html(this.template(oData));
		},
		template:_.template($('#J_welcome').html()),
		setCookie:function (name, value, iDay) {
			var oDate=new Date();
			oDate.setDate(oDate.getDate()+iDay);
			document.cookie=name+'='+value+';expires='+oDate;
		},
		getCookie:function (name) {
			var arr=document.cookie.split(';');
			for(var i=0;i<arr[i].length;i++){
				var arr2=arr[i].split('=');
				if(arr2[0]==name){
				  return arr2[1];
				}
				return '';
			}
		},
		removeCookie:function (name) {
			setCookie(name, 1, -1);
		},
	});

	exports.Welcome = Welcome;
});
define(function(require, exports) {
	var VSearch = Backbone.View.extend({
		el:$('.search'),
		events:{
			'focus .search-input':'focus',
			'blur .search-input':'blur',
			'click .search-button':'click'
		},
		focus:function(){
			console.log("focus");
		},
		blur:function(){
			console.log("blur");
		},
		click:function(){
			console.log("click");
			var val = $('.search-input').val(),aRes;
			if(val== ''){
				// com.openPop('输入不能为空！');
				// alert("输入不能为空！");
				// 弹窗
				temp = require('./pop.js');
				window.popMsg = '输入不能为空！';
				var p = new temp.Pop;

			}else{
				location.hash='search='+val;
				
				
			}
		},
		search:function(keyword){
			var data=[];
			for(var i=0,len=aArticle.length;i<len;i++){
				if(aArticle[i]['title'].indexOf(keyword)!=-1
					||aArticle[i]['content'].indexOf(keyword)!=-1){
					data.push(aArticle[i]);
				}
			}
			return data;
		
		}
	});


	exports.VSearch = VSearch;
});
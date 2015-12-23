define(function(require, exports) {
	var Search = Backbone.View.extend({
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
				alert("输入不能为空！");
			}else{
				location.hash='search='+val;
				aRes=this.search(val,aArticle);
				if(!aRes.length&&$('.search-result-ul').length){
					$('.search-result').show();
					$('.search-result-ul')[0].outerHTML='<p class="tac fw">找到不到相关文章!</p>';
					return;
				}
				this.aData = aRes;
				var oData = {
					aSearch:aRes
				}
				window.searchResult = aRes;

				//
				var temp = require('./search_result.js');
				var s = new temp.SearchResult;
				$('.page').hide();
				$('.search-result').show();
				
				
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


	exports.Search = Search;
});
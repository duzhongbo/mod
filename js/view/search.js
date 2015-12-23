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
		}
	});


	exports.Search = Search;
});
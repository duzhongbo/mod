define(function(require, exports) {
	var SearchResult = Backbone.View.extend({
		initialize:function(){
			this.show();
			this.listenTo(this.model,'change',this.show);
		},
		show:function(){
			$('.search-result').html(this.template(this.model.toJSON()));
		},
		template:_.template($('#J_search_result').html()),
		events:{
			'click .article-a':'showDetail'
		},
		showDetail:function(){
			alert("123");
			return false;
		}
	});


	exports.SearchResult = SearchResult;
});
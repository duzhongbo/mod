define(function(require, exports) {
	var SearchResult = Backbone.View.extend({
		initialize:function(){
			var aSearchResult = window.searchResult;
			var oData={
				aSearchResult:aSearchResult
			}
			$('.search-result').html(this.template(oData));			
		},
		template:_.template($('#J_search_result').html()),
	});


	exports.SearchResult = SearchResult;
});
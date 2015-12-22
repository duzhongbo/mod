define(function(require, exports) {
	var Nav = Backbone.View.extend({
		initialize:function(){
			
		},
		el:$('.nav-inner'),
		events:{
			'click .nav-a':'nav2'
		},
		nav2:function(e){
			var target = e.target || e.srcElement;
			var url = $(target).attr('href');
			location.hash=url;
			return false;
		}
	});


	exports.Nav = Nav;
});
define(function(require, exports) {
	var Nav = Backbone.View.extend({
		initialize:function(){
			var oData={
				aNav:aNav
			}
			$('.nav-inner').html(this.template(oData));
		},
		template:_.template($('#J_nav').html()),
		el:$('.nav-inner'),
		events:{
			'click .nav-a':'nav2'
		},
		nav2:function(e){
			var target = e.target || e.srcElement;
			var url = $(target).attr('href');
			location.hash=url.split('/')[1];
			return false;
		}
	});


	exports.Nav = Nav;
});
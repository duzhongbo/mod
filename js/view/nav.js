define(function(require, exports) {
	var Nav = Backbone.View.extend({
		initialize:function(){
			var oData={
				aNav:aNav
			}
			$('.nav-inner').html(this.template(oData));
		},
		template:_.template($('#J_nav').html()),
	});


	exports.Nav = Nav;
});
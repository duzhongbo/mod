define(function(require, exports) {
	var Pop = Backbone.View.extend({
		initialize:function(){
			var popMsg = window.popMsg
			var oData={
				sPopMsg:popMsg
			}
			$('.pop-body').html(this.template(oData));
			$('.pop,.pop-bg').show();
		},
		template:_.template($('#J_pop').html()),
		el:$('.pop'),
		events:{
			'click .pop-close':'close'
		},
		close:function(){
			$('.pop,.pop-bg').hide();
		}
	});


	exports.Pop = Pop;
});
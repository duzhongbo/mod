define(function(require, exports) {

var Tag = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aTag:aTags
    }
  	$('.tags').html(this.template(oData));
  },
  template:_.template($('#J_tag').html()),
});

exports.Tag = Tag;

});
define(function(require, exports) {

var List = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aArticle:aArticle
    }
  	$('.list').html(this.template(oData));
  },
  template:_.template($('#J_list').html()),
});

exports.List = List;

});
// 标签页文章列表模型
define(function(require, exports) {
  var modelTagArticles = Backbone.Model.extend({
    defaults : {
      aTagAticle : []
    }
  });


  exports.modelTagArticles = modelTagArticles;

});
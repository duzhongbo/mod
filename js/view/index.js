define(function(require, exports) {

var Index = Backbone.View.extend({
  initialize:function(){
    var oData = {
      aArticle:aArticle
    }
  	$('.index .common-inner').html(this.template(oData));
  },
  template:_.template($('#J_index').html()),
  el:$('.index'),
  events:{
    'click .article-list-a':'showArticles'
  },
  showArticles:function(e){
    var target = e.target || e.srcElement;
    var url = $(target).attr('href');
    location.hash=url;
    return false;
  },
  html_decode:function (str) {// 将已经转义的html标签重新转回
    var s = "";   
    if (str.length == 0) return "";   
    s = str.replace(/&gt;/g, ">");   
    s = s.replace(/&lt;/g, "<");   
    s = s.replace(/&nbsp;/g, " ");   
    s = s.replace(/&quot;/g, "\"");   
    s = s.replace(/<br>/g, "\n");
    s = s.replace(/class/g,' class');
    s = s.replace(/src/g,' src');
    return s;       
  },

});

exports.Index = Index;

});
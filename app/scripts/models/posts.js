var Backbone = require('backbone');
var $ = require('jquery');


var Posts = Backbone.Model.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts/',
});

var PostsCollection = Backbone.Collection.extend({
  model: Posts,

  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts/',

  // parse: function(data){
  //   return data.results
  // },

  // addNew: function(){
  //
  // }
});


module.exports = {
  'Posts': Posts,
  'PostsCollection': PostsCollection
}

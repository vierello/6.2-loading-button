var $ = require('jquery');
// var GetPostButton = require('./models/button');
var PostsCollection = require('./models/posts').PostsCollection;
var Posts = require('./models/posts').Posts;

var postCollection = new PostsCollection();
var blogPost = new Posts();

var $button = $('<button class="get-post-button">Get Posts</button><div class="blog-post"/><div class="new-blog-post"/>')
var $newPostForm = $('<form class="new-post"><h4>New Blog Post</h4><input class="post-title" type="text" placeholder="Post Title" /><textarea class="post-body" rows="6" cols="30" placeholder="Post Text" /><button class="submit-button">Submit</button></form>');

$('.app').append($button, $newPostForm)

$('.get-post-button').on('click', function(event){
  event.preventDefault();
  $('.blog-post').html('');
  $(this).html('Loading...').css('color','#867A76');
  postCollection.fetch().done(function(){
    $('.get-post-button').html('Get New Posts').css('color','black');
    console.log(postCollection);
  });
}),

postCollection.on('add', function(model){
  $('.blog-post').append('<div class="each-post">Title: ' + model.get('title') + '</div>');
});

$('.submit-button').on('click', function(event){
  event.preventDefault();
  blogPost.save([{'title': $('.post-title').val(), 'body': $('.post-body').val()}]);
});

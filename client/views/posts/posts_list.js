/**
 * Created by orieken on 5/18/14.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
/**
 * Created by orieken on 5/20/14.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
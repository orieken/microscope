/**
 * Created by orieken on 5/20/14.
 */
Template.postItem.helpers({
    ownPost: function() {
        return this.userId == Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});

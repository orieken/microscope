/**
 * Created by orieken on 5/26/14.
 */
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

Template.error.rendered = function () {
    var error = this.data;
    Meteor.defer(function() {
        Errors.update(error._id, {$set: {seen: true}});
    });
};
/**
 * Created by orieken on 5/26/14.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
function addComment(text, callback) {
    commentsCollection(function(err, comments) {
        if (err) {
            callback(err);
            return;
        }
        comments.insert({ text: text }, { string: true }, callback);
    });
}

function listComments(callback) {
    commentsCollection(function(err, comments) {
        if (err) {
            callback(err);
            return;
        }
        comments.find().toArray(callback);
    });
}

function commentsCollection(callback) {
    MongoClient.connect("mongodb://localhost:27017/zoescomments", function(err, db) {
        if (err) {
            callback(err);
            return;
        }

        callback(null, db.collection('comments'));
    });
}

var db = {
    addComment: addComment,
    listComments: listComments
}

exports.db = db;
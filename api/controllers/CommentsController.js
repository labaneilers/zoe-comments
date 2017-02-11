/**
 * LabanController
 *
 * @description :: Server-side logic for managing Labans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var db = require("../services/db").db;

module.exports = {
	list: function (req, res) {
        console.log("called");
        var newComment = req.param("comment");
        if (newComment) {
            db.addComment(newComment, function(err) {
                if (err) {
                    console.log("ERROR inserting: " + err)
                }
            });
        }

        db.listComments(function(err, comments) {
            console.log("got comments list");
            if (err) {
                console.log("ERROR listing: " + err);
            }

            return res.view("commentslist", { comments: comments });
        });
    },
};


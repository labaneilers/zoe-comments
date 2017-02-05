/**
 * LabanController
 *
 * @description :: Server-side logic for managing Labans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var db = require("../services/db").db;

module.exports = {
	list: function (req, res) {
        var newComment = req.param("comment");
        if (newComment) {
            db.addComment(newComment);
        }

        return res.view("commentslist", { comments: db.listComments() });
    },
};


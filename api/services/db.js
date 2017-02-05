if (!appglobal.db) {
    appglobal.db = {
        tables: {
            comments: []
        }
    };
}

var db = {
    addComment: function(comment) {
        appglobal.db.tables.comments.push(comment);
    },
    listComments: function() {
        return appglobal.db.tables.comments;
    }
}

exports.db = db;
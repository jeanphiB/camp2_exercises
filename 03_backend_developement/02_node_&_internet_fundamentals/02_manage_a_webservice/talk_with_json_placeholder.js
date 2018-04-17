const request = require("request");

const mainUrl = "http://jsonplaceholder.typicode.com";

function fetch(category, callback, query){
  let queryUrl;
  if (query === undefined) {
    queryUrl = `${mainUrl}/${category}`;
  } else if (isNaN(query)) {
    queryUrl = `${mainUrl}/${category}?${query}`;
  } else {
    queryUrl = `${mainUrl}/${category}/${query}`;
  }

  request(
    {
      url: queryUrl,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchPosts(callback){
  fetch("posts", callback);
}

function fetchPostByUser(userId, callback) {
  fetch("posts", callback, `userId=${userId}`);
}

function fetchPost(id, callback) {
  fetch("posts", callback, id);
}

function fetchUsers(callback) {
  fetch("users", callback);
}

function fetchUser(id, callback) {
  fetch("users", callback, id);
}

function fetchComments(callback) {
  fetch("comments", callback);
}

function fetchComment(id, callback) {
  fetch("comments", callback, id);
}

function fetchCommentsByPost(postId, callback) {
  fetch("comments", callback, `postId=${postId}`);
}

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchComment: fetchComment,
  fetchCommentsByPost: fetchCommentsByPost
};

// function logFunction(result) {
//   console.log(result);
// }

//fetchPosts(logFunction);
//fetchPostByUser(1, logFunction);
//fetchPost(1, logFunction);
//fetchUsers(logFunction);

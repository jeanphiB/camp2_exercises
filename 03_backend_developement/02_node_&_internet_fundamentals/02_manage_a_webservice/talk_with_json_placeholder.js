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

function publishPost(userId, title, body, callback) {
  const queryUrl = `${mainUrl}/posts`;

  request(
    {
      url: queryUrl,
      method: "POST",
      form: {
        userId: userId,
        title: title,
        body: body
      }
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function publishComment(postId, name, email, body, callback){
  const queryUrl = `${mainUrl}/comments`;

  request(
    {
      url: queryUrl,
      method: "POST",
      form: {
        postId: postId,
        name: name,
        email: email,
        body: body
      }
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function updatePost(postId, newTitle, newBody, callback) {
  const queryUrl = `${mainUrl}/posts/${postId}`;
  const form = {};
  if (newTitle !== undefined) {
    form.title = newTitle;
  }
  if (newBody !== undefined) {
    form.body = newBody;
  }

  request(
    {
      url: queryUrl,
      method: "PATCH",
      form: form
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function updatePostTitle(postId, newTitle, callback) {
  updatePost(postId, newTitle, undefined, callback);
}

function updatePostBody(postId, newBody, callback) {
  updatePost(postId, undefined, newBody, callback);
}

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchComment: fetchComment,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
};

// function logFunction(result) {
//   console.log(result);
// }

//fetchPosts(logFunction);
//fetchPostByUser(1, logFunction);
//fetchPost(1, logFunction);
//fetchUsers(logFunction);
//updatePost(1, "newTitle", "newBody", logFunction);

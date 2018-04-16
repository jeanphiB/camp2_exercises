curl "http://jsonplaceholder.typicode.com/posts/$1" -H "Content-Type: application/json" -X PUT -d "{\"postId\" : \"$1\", \"body\" : \"$2\"}"
#sh 11_update_post_body.sh 1 "Maitre corbeau sur un arbre perché tenait dans bec un fromage."

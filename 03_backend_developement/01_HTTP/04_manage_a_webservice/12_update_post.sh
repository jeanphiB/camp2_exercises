curl "http://jsonplaceholder.typicode.com/posts/$1" -H "Content-Type: application/json" -X PUT -d "{\"postId\" : \"$1\", \"title\" : \"$2\", \"body\" : \"$3\"}"
#sh 12_update_post.sh 1 "Le corbeau et le renard" "Maitre corbeau sur un arbre perché tenait dans bec un fromage."

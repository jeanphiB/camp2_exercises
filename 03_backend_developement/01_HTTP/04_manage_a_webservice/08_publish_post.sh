curl "http://jsonplaceholder.typicode.com/posts" -H "Content-Type: application/json" -d "{\"userId\" : \"$1\", \"title\" : \"$2\", \"body\" : \"$3\"}"
#sh 08_publish_post.sh 1 "Le corbeau et le renard" "Maitre corbeau sur un arbre perché tenait dans bec un fromage."

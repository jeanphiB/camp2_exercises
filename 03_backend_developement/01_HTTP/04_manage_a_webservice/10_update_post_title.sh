curl "http://jsonplaceholder.typicode.com/posts/$1" -H "Content-Type: application/json" -X PUT -d "{\"postId\" : \"$1\", \"title\" : \"$2\"}"
#sh 10_update_post_title.sh 1 "Le corbeau et le renard"

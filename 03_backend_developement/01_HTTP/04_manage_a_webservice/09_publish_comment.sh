curl "http://jsonplaceholder.typicode.com/comments" -H "Content-Type: application/json" -d "{\"postId\" : \"$1\", \"name\" : \"$2\", \"email\" : \"$3\", \"body\" : \"$4\"}"
#sh 09_publish_comment.sh 1 "Jean De La Fontaine" "jean@delafontaine.fr" "ce poeme est incomplet"

curl "https://postman-echo.com/post" -d '{"foo": "bar"}' -H "Content-Type: application/json" | jq ".data" > 03_postman_api_post.result

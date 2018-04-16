curl "https://postman-echo.com/post" -d "Hello from postman" | jq ".form" > 01_postman_api_post.result

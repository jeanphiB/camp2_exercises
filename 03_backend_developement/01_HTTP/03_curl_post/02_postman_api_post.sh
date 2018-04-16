curl "https://postman-echo.com/post" -d "foo=bar" | jq ".form" > 02_postman_api_post.result

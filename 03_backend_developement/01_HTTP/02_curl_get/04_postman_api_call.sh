curl "https://postman-echo.com/get?foo=bar&program=camp2&people\[1\]=Frieda&people\[2\]=Francis" | jq ".args" > 04_postman_api_call.result

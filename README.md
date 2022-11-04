# nodejs-video-sharing-api
nodeJs video sharing app api
auth
# Users

| Route | HTTP Verb	 | POST body & header	 | Description	 |
| --- | --- | --- | --- |
| /auth/signup | `POST` | body: { name: String, password: String, email: 'test@email.com', img: String? } | Creates a new user. |
| /auth/signin | `POST` | body: { name: String, password: String } | For Login. |

# User / Channel

| Route | HTTP Verb	 | POST body & header	 | Description	 |
| --- | --- | --- | --- |
| /api/users/user_id | `PUT` | body: { name: String?, password: String?, email: String?, img: String? } | Updates users info with new value you gave. |
| /api/users/user_id | `DELETE` | Empty | Delete user |
| /api/users/sub/target_user_id | `PUT` | Empty | Subscribes target user |
| /api/users/unsub/target_user_id | `PUT` | Empty | UnSubscribes target user |
| /api/users/like/video_id | `PUT` | Empty | Likes a video |
| /api/users/dislike/video_id | `PUT` | Empty | Likes a video |


# Video

| Route | HTTP Verb	 | POST body & header	 | Description	 |
| --- | --- | --- | --- |
| /api/videos | `POST` | body: { title: String, desc: String, imgUrl: String, videoUrl: String } | Creates a video |
| /api/videos/find/video_id | `GET` | Empty | Get video by id |
| /api/videos/sub | `GET` | Empty | Get subscribed channels videos |
| /api/videos/trend | `GET` | Empty | Get trend videos |
| /api/videos/random | `GET` | Empty | Get random videos |
| /api/videos/tags?tags=$String | `GET` | Empty | Gets videos with searched tag |
| /api/videos/search?q=$String | `GET` | Empty | Searches video with name |

# Comment

| Route | HTTP Verb	 | POST body & header	 | Description	 |
| --- | --- | --- | --- |
| /api/comments | `POST` | body: { desc: String, videoId: String } | Creates comment. |
| /api/comments/video_id | `GET` | Empty | Gets all comments of a video |



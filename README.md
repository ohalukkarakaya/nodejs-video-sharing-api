# 📺 Video Sharing API

This project is a **Node.js + Express + MongoDB** backend for a simple video sharing application.  
It includes authentication, user/channel management, video upload, likes/dislikes, subscriptions, and comments.

---

## 🎯 Intended Audience
This documentation is intended for **developers** building or integrating video sharing features.

---

## 🚀 Features
- User signup & login with JWT authentication  
- Manage user/channel profiles  
- Subscribe / unsubscribe to channels  
- Upload, update, and fetch videos  
- Like / dislike videos  
- Comment on videos  
- Browse videos by trend, tags, search, or random  

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ohalukkarakaya/nodejs-video-sharing-api.git
   cd nodejs-video-sharing-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/videos
   JWT_SECRET=yourSecretKey
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:3000/`

---

## 👤 Authentication

### Sign Up
```http
POST /auth/signup
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@email.com",
  "password": "1234",
  "img": "https://example.com/avatar.png"
}
```

### Sign In
```http
POST /auth/signin
Content-Type: application/json

{
  "name": "Alice",
  "password": "1234"
}
```

✅ **Response**
```json
{
  "status": true,
  "token": "eyJhbGciOiJIUzI1..."
}
```

Use this token as `Authorization: Bearer <token>`.

---

## 👥 User / Channel Routes

| Route | Method | Body | Description |
|-------|--------|------|-------------|
| `/api/users/:id` | `PUT` | `{ name?, email?, password?, img? }` | Update user info |
| `/api/users/:id` | `DELETE` | – | Delete user |
| `/api/users/sub/:targetId` | `PUT` | – | Subscribe to a channel |
| `/api/users/unsub/:targetId` | `PUT` | – | Unsubscribe from a channel |
| `/api/users/like/:videoId` | `PUT` | – | Like a video |
| `/api/users/dislike/:videoId` | `PUT` | – | Dislike a video |

---

## 🎥 Video Routes

| Route | Method | Body | Description |
|-------|--------|------|-------------|
| `/api/videos` | `POST` | `{ title, desc, imgUrl, videoUrl }` | Upload a new video |
| `/api/videos/find/:id` | `GET` | – | Get video by ID |
| `/api/videos/sub` | `GET` | – | Get subscribed channels' videos |
| `/api/videos/trend` | `GET` | – | Get trending videos |
| `/api/videos/random` | `GET` | – | Get random videos |
| `/api/videos/tags?tags=tag1,tag2` | `GET` | – | Get videos by tags |
| `/api/videos/search?q=query` | `GET` | – | Search videos by title |

---

## 💬 Comment Routes

| Route | Method | Body | Description |
|-------|--------|------|-------------|
| `/api/comments` | `POST` | `{ desc, videoId }` | Add a comment to a video |
| `/api/comments/:videoId` | `GET` | – | Get all comments for a video |

---

## 📊 Example Usage Flow

1. Sign up as a new user  
2. Login and receive a token  
3. Upload a video  
4. Subscribe to another user's channel  
5. Like or dislike a video  
6. Add a comment under a video  
7. Explore trending or random videos  

---

## 📈 System Flow Diagram
```
flowchart LR
  C[Client/Web/Mobile] -->|JWT| API[Express API]
  API --> AUTH[Auth Middleware]
  API --> VID[Videos Controller]
  API --> COM[Comments Controller]
  VID --> DB[(MongoDB)]
  COM --> DB
  API --> C
```

---

## Subscribe + Upload Sequence
```
sequenceDiagram
  participant U as User
  participant API as API
  participant DB as MongoDB

  U->>API: PUT /api/users/sub/:targetId (Bearer)
  API->>DB: push targetId to subscriptions
  DB-->>API: OK
  API-->>U: 200 {message: "subscribed"}

  U->>API: POST /api/videos {title, videoUrl} (Bearer)
  API->>DB: insert video {ownerId, meta}
  DB-->>API: _id
  API-->>U: 201 {videoId, ...}

```

---

## ⚠️Error Handling
- `400`: Invalid query/parameter (`tags`, `q`)
- `401`: Token missing/corrupted
- `404`: Video/channel error
- `413`: (Future) Upload limit error
- `500`: Server Systems

---

## 📌 Notes
- Documentation is improved iteratively as new features are added.

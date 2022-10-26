import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';
import videoRoutes from './routes/comments.js';

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(
        () => {
          console.log("MongoDB Status: Connected");
        }
    ).catch(
      (err) => {
        throw err;
      }
    );
}

app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);



app.listen(8800, () => {
  connect();
  console.log("Server Status: Connected");
});
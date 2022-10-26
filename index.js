import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

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

app.listen(8800, () => {
  connect();
  console.log("Server Status: Connected");
});
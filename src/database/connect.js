import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
configDotenv();

const client = new MongoClient(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected successfully");
    return client.db("todo");
  } catch (error) {
    console.error("MongoDB connection failed");
    process.exit(1);
  }
};

export { connectDB };

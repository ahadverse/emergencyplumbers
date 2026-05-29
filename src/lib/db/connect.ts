import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined in .env.local');

const globalWithMongoose = global as typeof globalThis & {
  _mongooseConn?: typeof mongoose;
  _mongoosePromise?: Promise<typeof mongoose>;
};

async function connectDB(): Promise<typeof mongoose> {
  if (globalWithMongoose._mongooseConn) return globalWithMongoose._mongooseConn;

  if (!globalWithMongoose._mongoosePromise) {
    globalWithMongoose._mongoosePromise = mongoose.connect(MONGODB_URI);
  }

  globalWithMongoose._mongooseConn = await globalWithMongoose._mongoosePromise;
  return globalWithMongoose._mongooseConn;
}

export default connectDB;

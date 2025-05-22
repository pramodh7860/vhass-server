import mongoose from "mongoose";
import { Courses } from "./server/models/Courses.js";

async function main() {
  await mongoose.connect("mongodb://localhost:27017/vhass", { useNewUrlParser: true, useUnifiedTopology: true });
  const courses = await Courses.find();
  for (const course of courses) {
    if (typeof course.price !== 'number' || isNaN(course.price) || course.price <= 0) {
      let newPrice = Number(course.discountedPrice) || Number(course.originalPrice) || 1000;
      course.price = newPrice;
      await course.save();
      console.log(`Updated course ${course._id} with price:`, newPrice);
    }
  }
  await mongoose.disconnect();
  console.log('Done updating course prices.');
}

main(); 
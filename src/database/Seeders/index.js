import { Role } from "../Models/index.js";
import { roles } from "./roles.js";

export const seeders = {
  up: async function () {
    try {
      await this.down(); // clear the database, so we don't have duplicate data for each time we run the server
      await Role.insertMany(roles);
      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Database seeding failed", error);
      process.exit(1);
    }
  },
  down: async function () {
    await Role.deleteMany();
  },
};

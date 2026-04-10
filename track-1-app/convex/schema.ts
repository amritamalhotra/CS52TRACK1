import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Example Schema for a "quotes" table. It's a table consisting of quotes ("To be, or not // to be...", "...")

export default defineSchema({
    quotes: defineTable({
        text: v.string(),
    }),
});
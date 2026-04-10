import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Example function addQuote for adding a quote to the "quote" table
export const addQuote = mutation({
    args: { text: v.string() },
    handler: async (ctx, args) => {
        const quoteAdded = await ctx.db.insert("quotes", { text: args.text });
        console.log("Added quote: ", quoteAdded);
    },
});

// Example function getQuotes for getting quotes from the "quote" table
export const getQuotes = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("quotes").collect();
    },
});
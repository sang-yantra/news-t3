import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const newsRouter = createTRPCRouter({
  getNewsBycategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      const trendingNews = await ctx.prisma.nEWS.findMany({
        where: {
          category: input.category,
        },
      });
      return trendingNews;
    }),
});

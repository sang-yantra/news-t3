import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import type { Weather } from "banner";

export const weatherRouter = createTRPCRouter({
  getWeatherReport: publicProcedure
    .input(z.object({ latitude: z.string(), longitude: z.string() }))
    .query(async ({ ctx, input }) => {
      debugger;
      const params = new URLSearchParams({
        key: "8dd9cc2d00f7458bb9b174345230701",
        q: `${input.latitude},${input.longitude}`,
        days: "1",
        aqi: "no",
        alerts: "no",
      });
      const fetchWeatherApi = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?" + params
      );
      const response = (await fetchWeatherApi.json()) as Weather;
      return response;
    }),
});

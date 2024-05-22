import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development"]),
  API_DB_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);

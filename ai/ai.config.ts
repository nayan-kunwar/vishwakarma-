import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const AI_CONFIG = {
    defaultModel:
        process.env.OPENROUTER_DEFAULT_MODEL ??
        "openrouter/free",
} as const;

export const openRouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
});
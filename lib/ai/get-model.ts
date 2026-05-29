import { AI_CONFIG, openRouter } from "../../ai/ai.config";

export function getAIModel(model?: string) {
    return openRouter(
        model ?? AI_CONFIG.defaultModel
    );
}
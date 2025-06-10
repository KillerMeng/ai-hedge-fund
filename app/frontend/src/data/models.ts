export interface ModelItem {
  display_name: string;
  model_name: string;
  provider: "Anthropic" | "DeepSeek" | "Gemini" | "Groq" | "OpenAI";
}

export const apiModels: ModelItem[] = [
  {
    "display_name": "claude_haiku_3_5.display_name",
    "model_name": "claude-3-5-haiku-latest",
    "provider": "Anthropic"
  },
  {
    "display_name": "claude_sonnet_4.display_name",
    "model_name": "claude-sonnet-4-20250514",
    "provider": "Anthropic"
  },
  {
    "display_name": "claude_opus_4.display_name",
    "model_name": "claude-opus-4-20250514",
    "provider": "Anthropic"
  },
  {
    "display_name": "deepseek_r1.display_name",
    "model_name": "deepseek-reasoner",
    "provider": "DeepSeek"
  },
  {
    "display_name": "deepseek_v3.display_name",
    "model_name": "deepseek-chat",
    "provider": "DeepSeek"
  },
  {
    "display_name": "gemini_2_5_flash.display_name",
    "model_name": "gemini-2.5-flash-preview-05-20",
    "provider": "Gemini"
  },
  {
    "display_name": "gemini_2_5_pro.display_name",
    "model_name": "gemini-2.5-pro-exp-03-25",
    "provider": "Gemini"
  },
  {
    "display_name": "llama_4_scout_17b.display_name",
    "model_name": "meta-llama/llama-4-scout-17b-16e-instruct",
    "provider": "Groq"
  },
  {
    "display_name": "llama_4_maverick_17b.display_name",
    "model_name": "meta-llama/llama-4-maverick-17b-128e-instruct",
    "provider": "Groq"
  },
  {
    "display_name": "gpt_4_5.display_name",
    "model_name": "gpt-4.5-preview",
    "provider": "OpenAI"
  },
  {
    "display_name": "gpt_4o.display_name",
    "model_name": "gpt-4o",
    "provider": "OpenAI"
  },
  {
    "display_name": "o3.display_name",
    "model_name": "o3",
    "provider": "OpenAI"
  },
  {
    "display_name": "o4_mini.display_name",
    "model_name": "o4-mini",
    "provider": "OpenAI"
  }
];

// Find the GPT-4o model to use as default
export const defaultModel = apiModels.find(model => model.model_name === "gpt-4o") || null; 
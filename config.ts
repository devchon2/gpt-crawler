import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.github.com/fr/copilot/",
  match: "https://docs.github.com/fr/copilot/**",
  maxPagesToCrawl: 500,
  outputFileName: "copilot_doc_officielle.json",
  maxTokens: 20000000,
};

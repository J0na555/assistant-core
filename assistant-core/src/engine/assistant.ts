import { AssistantConfig } from "../config/types.js";
import { LLMProvider, LLMMessage } from "../providers/types.js";
import { DataConnector } from "../connectors/types.js";

export interface Lead {
  [key: string]: string | number | undefined;
}

export interface AssistantResponse {
  reply: string;
  lead: Partial<Lead> | null;
  shouldHandoff: boolean;
}

export class Assistant {
  constructor(
    private config: AssistantConfig,
    private provider: LLMProvider,
    private connectors: DataConnector<unknown>[],
    private history: LLMMessage[] = [],
  ) {}

  async chat(userMessage: string): Promise<AssistantResponse> {
    throw new Error("not implemented yet");
  }
}

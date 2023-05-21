import { SentMessage } from "./sent-message.interface";

export interface SendMessageResult {
  id: string;
  messages: { [key: string]: SentMessage };
}

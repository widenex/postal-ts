import { SentMessage } from "../interfaces/sent-message.interface";

export interface SendMessageResultDto {
  message_id: string;
  messages: { [key: string]: SentMessage };
}

import { MessageInfo } from "./message.interface";

export interface SentMessage extends MessageInfo {
  id: number;
  token: string;
}

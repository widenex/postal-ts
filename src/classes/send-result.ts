import { SendMessageResultDto } from "../dto/send-message-result.dto";
import { MessageInfo } from "../interfaces/message.interface";
import { SendMessageResult } from "../interfaces/send-message-result.interface";
import { SentMessage } from "../interfaces/sent-message.interface";

export class SendResult {
  private result: SendMessageResult;
  private _recipients: Map<string, SentMessage>;

  constructor(
    result: SendMessageResultDto,
    private originalMessage: MessageInfo
  ) {
    this.result = {
      id: result.message_id,
      messages: result.messages,
    };

    this._recipients = new Map<string, SentMessage>();
    const messages = this.result.messages;
    for (const key in messages) {
      if (Object.prototype.hasOwnProperty.call(messages, key)) {
        this._recipients.set(key.toLowerCase(), {
          ...this.originalMessage,
          ...messages[key],
        });
      }
    }
  }

  public get recipients(): Map<string, SentMessage> {
    return this._recipients;
  }

  public get size(): number {
    return this._recipients.size;
  }
}

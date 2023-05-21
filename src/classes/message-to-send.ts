import { SendResult } from "./send-result";
import { Postal } from "./postal";
import { SendMessageDto } from "../dto/send-message.dto";
import { stringToArray } from "../utils/string-to-array";
import { MessageInfo } from "../interfaces/message.interface";

export class MessageToSend {
  private messageToSend: SendMessageDto;
  private client: Postal;

  constructor(client: Postal, private message: MessageInfo) {
    this.client = client;

    this.messageToSend = {
      to: stringToArray(message.to),
      cc: message.cc ? stringToArray(message.cc) : undefined,
      bcc: message.bcc ? stringToArray(message.bcc) : undefined,
      from: message.from,
      sender: message.sender,
      reply_to: message.replyTo,
      subject: message.subject,
      ...(message.isHtml
        ? { html_body: message.body }
        : { plain_body: message.body }),
    };
  }

  public async send(): Promise<SendResult> {
    const result = await this.client.makeRequest(
      "send",
      "message",
      this.messageToSend
    );
    return new SendResult(result, this.message);
  }
}

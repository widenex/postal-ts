interface SendMessageDtoBase {
  to: string[];
  cc?: string[];
  bcc?: string[];
  from: string;
  sender?: string;
  reply_to?: string;
  subject: string;
}

interface SendPlainMessageDto extends SendMessageDtoBase {
  plain_body: string;
}

interface SendHtmlMessageDto extends SendMessageDtoBase {
  html_body: string;
}

export type SendMessageDto = SendPlainMessageDto | SendHtmlMessageDto;

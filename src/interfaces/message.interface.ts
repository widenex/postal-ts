export interface MessageInfo {
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  from: string;
  sender?: string;
  replyTo?: string;
  subject: string;
  body: string; // Contains either plain or HTML body
  isHtml?: boolean; // This flag would indicate whether body is HTML
}

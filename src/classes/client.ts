import * as https from "https";
import { Transform } from "stream";
import { MessageToSend } from "./message-to-send";
import type { MessageInfo } from "../interfaces/message.interface";

export class Client {
  public host: string;
  public serverKey: string;

  constructor(host: string, serverKey: string) {
    this.host = host;
    this.serverKey = serverKey;
  }

  /**
   * This code makes a request to the API server, and returns a promise that will be resolved with the data returned from the API server.
   * The parameters passed to this function are the **controller** name, **action** name, and **parameters** that should be passed to the API server.
   * The promise will be rejected if there is an error or if the API server returns an error.
   **/
  public makeRequest(
    controller: string,
    action: string,
    parameters: any
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(parameters);

      const request = https.request(
        {
          headers: {
            "Content-Type": "application/json",
            "X-Server-API-Key": this.serverKey,
          },
          host: this.host,
          method: "POST",
          path: "/api/v1/" + controller + "/" + action,
        },
        (response) => {
          const statusCode = response.statusCode;
          if (statusCode !== 200) {
            reject(new Error("Request failed with status code " + statusCode));
            return;
          }

          let data = "";
          const transformStream = new Transform({
            transform(chunk, encoding, callback) {
              data += chunk;
              callback();
            },
          });
          response.pipe(transformStream).on("finish", () => {
            const json = JSON.parse(data);
            if (json.status === "success") {
              resolve(json.data);
            } else {
              reject(json.data);
            }
          });
        }
      );

      request.on("error", (error: Error) => {
        reject(error);
      });

      request.write(data);
      request.end();
    });
  }

  public send(message: MessageInfo) {
    return new MessageToSend(this, message).send();
  }
}

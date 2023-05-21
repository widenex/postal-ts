
# Postal Server SDK for TypeScript

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-github-repo/blob/main/LICENSE)

Welcome to Postal Server SDK for TypeScript! 🎉

This is a friendly and easy-to-use library for interfacing with the open source mail delivery platform, [Postal](https://postal.atech.media/). It's written in TypeScript, to provide type safety and autocompletion for a better developer experience. Our aim is to make sending emails as enjoyable and as painless as possible!

## Installation

You can easily install this SDK with **npm**:

```bash
npm install @widenex/postal-ts
```

Or with **yarn**:

```bash
yarn add @widenex/postal-ts
```

## Usage

Here's a simple example of how to **send an email** ✉️ with this SDK:

```typescript
import { Client } from "@widenex/postal-ts";

const client = new Client("postal.your-domain.com", "your-server-key");

client.send({
    from: "contact@your-domain.com",
    to: "someone@their-domain.com",
    subject: "Hello, Postal!",
    body: "This is a simple test email.",
  });
```

You can also use an **html body** just with the *isHtml* label:

```typescript
client.send({
    ...
    body: "<h1>This is an awesome title</h1><p>Followed by a paragraph</p>",
    isHtml: true,
  })
```

Do you have **multiple recipients**? Just use an array:

```typescript
client.send({
    to: ["someone1@their-domain.com", "someone2@their-domain.com"],
    ...
  })
```


You can also add **cc**, **bcc**, **sender** and **replyTo** fields:

```typescript
client.send({
    cc: "cc@their-domain.com",
    bcc: "bcc@their-domain.com",
    sender: "i-am-the-sender@your-domain.com",
    replyTo: "reply-me@your-domain.com",
    ...
  })
```

You can also pass an array for **cc** and **bcc** fields:

```typescript
client.send({
    cc: ["cc1@their-domain.com", "cc2@their-domain.com"],
    bcc: ["bcc1@their-domain.com", "bcc2@their-domain.com"],
    ...
  })
```

The send method returns sent messages with their ids:

```typescript
const { id, messages } = await client.send(...);
```

## Acknowledgements

Huge thanks to the creators of [Postal](https://github.com/postalserver/postal), the open source mail delivery platform that inspired this project. We are standing on the shoulders of giants! 🙏 Check out their [official documentation](https://docs.postalserver.io) to learn more about what you can do with Postal and this SDK.

## Contributing

As an open source project, we welcome contributions of all sorts! Whether it's filing an issue, fixing a bug, improving documentation, or adding a new feature, your contributions are greatly appreciated. Please take a look at our [Contributing Guidelines](#) for more information on how you can contribute.

## License

This project is licensed under the [MIT License](https://github.com/widenex/postal-ts/blob/main/LICENSE).

## Questions? Need Help?

Please don't hesitate to open an issue if you have any questions or need any help. We're here to help you out! You can also reach us at hello@widenex.com. 

Happy emailing! 💌

---

Made with 🖤 by Widenex

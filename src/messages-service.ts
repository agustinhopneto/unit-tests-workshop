import { apiMessage } from "./api-service";

export class MessagesService {
  private messages: string[];

  constructor(messages: string[] = []) {
    this.messages = messages;
  }

  sayAMessage(message?: string) {
    if (!message) {
      throw new Error("A mensagem deve ser dita");
    }

    const stringMessage = String(message);

    console.log(stringMessage);

    return stringMessage;
  }

  list() {
    return this.messages;
  }

  create(message: string) {
    this.messages.push(message);

    return message;
  }

  async getApiMessage() {
    const message = await apiMessage();

    return message;
  }
}

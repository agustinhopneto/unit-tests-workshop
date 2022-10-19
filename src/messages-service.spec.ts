import { apiMessage } from "./api-service";
import { MessagesService } from "./messages-service";

jest.mock("./api-service.ts");
(apiMessage as jest.Mock).mockImplementation(() => "Exemplo do Carlão");

describe("Messages Service", () => {
  let messagesService: MessagesService;

  beforeEach(() => {
    const messages = ["hello 👋", "chama 🥵"];
    messagesService = new MessagesService(messages);
  });

  it("should return a message", () => {
    const message = "Hello!";
    console.log = jest.fn();
    const saidMessage = messagesService.sayAMessage(message);

    expect(saidMessage).toBe(message);
    expect(console.log).toBeCalledWith(message);
  });

  it("should not return a message without message parameter", () => {
    try {
      messagesService.sayAMessage();
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("A mensagem deve ser dita");
    }
  });

  it("should create a message", () => {
    const message = "fodase 🚀";

    const createdMessage = messagesService.create(message);

    expect(createdMessage).toBe(message);
  });

  it("should list messages", () => {
    const messages = messagesService.list();

    expect(messages).toHaveLength(2);
  });

  it.only("should return a api message", async () => {
    const message = await messagesService.getApiMessage();

    expect(message).toBe("Exemplo");
  });
});

import { MessagesService } from "./messages-service";

const messagesService = new MessagesService();

messagesService.getApiMessage().then((response) => console.log(response));

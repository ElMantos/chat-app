import RSAA from '~/state/interfaces/RSAA';

interface Message {
  body: string;
  sentByMe: boolean;
}

interface ChatUpdate {
  fetching: boolean;
  error: any;
}

export interface UserChat {
  name: string;
  messages: Message[];
}
export default interface Chat {
  chats: RSAA<UserChat[]>;
  chatsUpdate: ChatUpdate;
}

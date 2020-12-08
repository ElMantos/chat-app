import User from '~/state/user/interface';
import Chat from '~/state/chat/interface';
import user from '~/state/user';
import chat from '~/state/chat';

export default interface State {
  [user.constants.NAME]: User;
  [chat.constants.NAME]: Chat;
}

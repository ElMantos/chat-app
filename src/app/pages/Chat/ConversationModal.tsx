import React, {useEffect} from 'react';
import {Modal, ActivityIndicator, Alert} from 'react-native';
import {Badge, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

import {ChatScreen, CloseButton} from '~/app/components';

import chat from '~/state/chat';

interface ConversationModalProps {
  selectedFriend: string | null;
  onClose: () => void;
}

const ConversationModal: React.FC<ConversationModalProps> = ({
  selectedFriend,
  onClose,
}) => {
  const dispatch = useDispatch();
  const chatsData = useSelector(chat.selectors.getChatsData);
  const chatsError = useSelector(chat.selectors.getChatsError);
  const areChatsFetching = useSelector(chat.selectors.areChatsFetching);
  const chatsUpdateError = useSelector(chat.selectors.getChatsUpdateError);

  useEffect(() => {
    if (selectedFriend && !chatsData) {
      dispatch(chat.actions.requestChats());
    }
  }, [chatsData, dispatch, selectedFriend]);

  useEffect(() => {
    if (chatsError || chatsUpdateError) {
      Alert.alert(
        'Something is wrong :(',
        'Something went wrong, please restart the app',
        [
          {
            text: 'Close',
            onPress: () => {
              dispatch(chat.actions.normalize());
              onClose();
            },
          },
        ],
      );
    }
    // If onClose is added to deps list, component gets new reference on every re-render and throws alert multiple times
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatsError, chatsUpdateError]);

  const onSend = (message: string) => {
    const newMessage = {
      body: message,
      sentByMe: true,
    };
    const chats = [...(chatsData || [])];

    const friendChatIndex = chats?.findIndex(
      ({name}) => name === selectedFriend,
    );
    if (friendChatIndex > -1) {
      chats[friendChatIndex] = {
        name: chats[friendChatIndex].name,
        messages: [...chats[friendChatIndex].messages, newMessage],
      };
    } else {
      chats.push({
        name: selectedFriend as string,
        messages: [newMessage],
      });
    }

    dispatch(chat.actions.requestChatUpdate(chats));
  };

  const currentChat: any =
    selectedFriend && chatsData?.find(({name}) => name === selectedFriend);
  return (
    <Modal animationType="slide" visible={!!selectedFriend}>
      {areChatsFetching ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <ChatScreen
          onSend={onSend}
          messages={currentChat && currentChat.messages}
          headerLeftChildren={
            <Badge>
              <Text>{selectedFriend?.[0]}</Text>
            </Badge>
          }
          headerRightChildren={<CloseButton onPress={onClose} />}
          title={selectedFriend}
        />
      )}
    </Modal>
  );
};

export default ConversationModal;

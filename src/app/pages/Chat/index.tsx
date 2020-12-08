import React, {useState} from 'react';
import {List} from 'native-base';

import FriendRow from './FriendRow';
import ConversationModal from './ConversationModal';

const MOCK_FRIENDS = ['Tom', 'John', 'Alice', 'Erica'];

const Chat: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
  return (
    <List>
      <ConversationModal
        onClose={() => {
          setSelectedFriend(null);
        }}
        selectedFriend={selectedFriend}
      />
      {MOCK_FRIENDS.map((name) => (
        <FriendRow
          onPressOut={() => setSelectedFriend(name)}
          name={name}
          key={name}
        />
      ))}
    </List>
  );
};

export default Chat;

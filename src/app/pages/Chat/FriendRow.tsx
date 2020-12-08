import React from 'react';
import {StyleSheet} from 'react-native';
import {Badge, ListItem, Text} from 'native-base';

interface FriendRowProps {
  name: string;
  onPressOut: () => void;
}

const styles = StyleSheet.create({
  badge: {
    marginRight: 15,
  },
});

const FriendRow: React.FC<FriendRowProps> = ({name, onPressOut}) => (
  <ListItem onPressOut={onPressOut}>
    <Badge style={styles.badge}>
      <Text>{name[0]}</Text>
    </Badge>
    <Text>{name}</Text>
  </ListItem>
);

export default FriendRow;

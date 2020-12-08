import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CloseButtonProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 45,
    padding: 4,
  },
  item: {
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 6,
    width: 40,
    height: 5,
    padding: 0,
    left: 0,
  },
  itemFirst: {
    top: 0,
  },
  itemLast: {
    marginTop: 'auto',
  },
});

const CloseButton: React.FC<CloseButtonProps> = ({onPress}) => (
  <Button style={styles.button} onPress={onPress}>
    <Icon name="close" size={30} color="white" />
  </Button>
);

export default CloseButton;

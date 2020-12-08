import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';

interface BurgerProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  burgerItem: {
    backgroundColor: 'white',
    borderRadius: 6,
    width: 30,
    height: 5,
    padding: 0,
    marginBottom: 5,
  },
  burgerItemLast: {
    marginBottom: 0,
  },
});

const Burger: React.FC<BurgerProps> = ({onPress}) => (
  <Button style={styles.button} onPress={onPress}>
    <View style={styles.burgerItem} />
    <View style={styles.burgerItem} />
    <View style={[styles.burgerItem, styles.burgerItemLast]} />
  </Button>
);

export default Burger;

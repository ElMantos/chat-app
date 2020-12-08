import React from 'react';
import {StyleSheet, StyleProp, TextStyle} from 'react-native';
import {Text} from 'native-base';

interface ErrorTextProps {
  label?: string;
  style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  root: {
    color: 'red',
  },
});

const ErrorText: React.FC<ErrorTextProps> = ({label, style}) => (
  <Text style={[styles.root, style]}>{label}</Text>
);

export default ErrorText;

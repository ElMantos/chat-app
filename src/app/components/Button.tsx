import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Button as BaseButton, NativeBase} from 'native-base';

interface ButtonProps extends NativeBase.Button {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({isLoading, children, ...restProps}) => (
  <BaseButton {...restProps}>
    {isLoading ? <ActivityIndicator color="white" size="large" /> : children}
  </BaseButton>
);

export default Button;

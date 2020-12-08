import React, {ReactChild} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Body, Header as BaseHeader, Title, Left, Right} from 'native-base';

interface HeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  leftChildren?: ReactChild;
  rightChildren?: ReactChild;
}

const Header: React.FC<HeaderProps> = ({
  title,
  style,
  leftChildren,
  rightChildren,
}) => (
  <BaseHeader style={style}>
    <Left>{leftChildren}</Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>{rightChildren}</Right>
  </BaseHeader>
);

export default Header;

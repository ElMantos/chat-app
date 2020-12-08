import React, {useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router-native';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {Text, Container, List, ListItem} from 'native-base';

import pathNames from '~/pathnames';

import user from '~/state/user';
import chat from '~/state/chat';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DURATION = 300;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
    elevation: 8,
  },
  listContentContainerStyle: {
    marginTop: 120,
  },
});

const INTERPOLATION_CONFIG: Animated.InterpolationConfigType = {
  inputRange: [0, 1],
  outputRange: [width * -1, 0],
  extrapolate: 'clamp',
};

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const MenuDrawer: React.FC<MenuDrawerProps> = ({isOpen, onClose}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const routes = useRef([
    {
      pathName: pathNames.chat,
      label: 'Chat',
      action: () => {
        history.push(pathNames.chat);
      },
    },
    {
      pathName: pathNames.profile,
      label: 'Profile',
      action: () => {
        history.push(pathNames.profile);
      },
    },
    {
      label: 'Logout',
      action: () => {
        dispatch(user.actions.normalize());
        dispatch(chat.actions.normalize());
      },
    },
  ]).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(animatedValue, {
        useNativeDriver: true,
        duration: ANIMATION_DURATION,
        toValue: 1,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        useNativeDriver: true,
        duration: ANIMATION_DURATION,
        toValue: 0,
      }).start();
    }
  }, [isOpen, animatedValue]);

  return (
    <AnimatedContainer
      style={[
        styles.root,
        {
          transform: [
            {translateX: animatedValue.interpolate(INTERPOLATION_CONFIG)},
          ],
        },
      ]}>
      <List
        dataArray={routes}
        contentContainerStyle={styles.listContentContainerStyle}
        keyExtractor={({label}) => label}
        renderRow={({label, action, pathName}) => (
          <ListItem
            selected={pathName && location.pathname.includes(pathName)}
            onPress={() => {
              action();
              onClose();
            }}
            button>
            <Text>{label}</Text>
          </ListItem>
        )}
      />
    </AnimatedContainer>
  );
};

export default MenuDrawer;

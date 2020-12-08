import React, {useState} from 'react';
import {Container, Content} from 'native-base';
import {useLocation} from 'react-router-native';

import MenuDrawer from './MenuDrawer';
import Header from './Header';
import Burger from './Burger';

import pathNames from '~/pathnames';

const HEADER_TITLES = {
  [pathNames.chat]: 'Friends',
  [pathNames.profile]: 'Profile',
};

const DrawerWrapper: React.FC = ({children}) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const location = useLocation();
  if (location.pathname === pathNames.login) {
    return null;
  }
  return (
    <>
      <Container>
        <Header
          title={HEADER_TITLES[location.pathname]}
          leftChildren={
            <Burger onPress={() => setDrawerOpen((prevState) => !prevState)} />
          }
        />
        <Content>{children}</Content>
      </Container>
      <MenuDrawer onClose={() => setDrawerOpen(false)} isOpen={isDrawerOpen} />
    </>
  );
};

export default DrawerWrapper;

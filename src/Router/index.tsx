import React from 'react';
import {NativeRouter} from 'react-router-native';
import {DrawerWrapper} from '~/app/components';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import {Login, Chat, Profile} from '~/app/pages';

import pathNames from '~/pathnames';

const Router: React.FC = () => (
  <NativeRouter>
    <PublicRoute exact path={pathNames.login} component={Login} />
    <DrawerWrapper>
      <PrivateRoute exact path={pathNames.chat} component={Chat} />
      <PrivateRoute exact path={pathNames.profile} component={Profile} />
    </DrawerWrapper>
  </NativeRouter>
);

export default Router;

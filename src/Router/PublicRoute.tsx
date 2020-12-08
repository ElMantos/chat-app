import React, {useEffect} from 'react';
import {RouteProps, Route, useHistory} from 'react-router-native';
import {useSelector} from 'react-redux';

import pathNames from '~/pathnames';
import user from '~/state/user';

const PublicRoute: React.FC<RouteProps> = (props) => {
  const userData = useSelector(user.selectors.getUserData);
  const history = useHistory();

  useEffect(() => {
    if (userData) {
      history.replace(pathNames.chat);
    }
  }, [userData, history]);

  return <Route {...props} />;
};

export default PublicRoute;

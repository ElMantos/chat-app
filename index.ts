/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app';
import appConfig from './app.json';

AppRegistry.registerComponent(appConfig.name, () => App);

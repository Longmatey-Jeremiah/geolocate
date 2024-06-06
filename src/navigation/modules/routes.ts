import { RouteNames } from '../../constants';
import { HomeScreen, LoginScreen, MapScreen } from '../../screens';

export const AuthRoutes = [
  {
    name: RouteNames.LOGIN,
    component: LoginScreen,
    options: { headerShown: false },
  },
];

export const AppRoutes = [
  {
    name: RouteNames.DASHBOARD,
    component: HomeScreen,
    options: {
      headerTitle: 'Home',
      headerShown: false,
    },
  },
  {
    name: RouteNames.MAP,
    component: MapScreen,
    options: {
      headerTitle: 'Maps',
      headerShown: true,
    },
  },
];

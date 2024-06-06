import * as React from 'react';
import { DrawerActions, useNavigationState } from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

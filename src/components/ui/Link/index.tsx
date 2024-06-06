import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

const Link = ({
  children,
  to,
  onPress,
}: {
  children: ReactNode;
  to?: string | [key: string];
  onPress?: () => void;
}) => {
  const navigation = useNavigation();
  const routeTo = () => {
    const name = to;
    if (to) {
      if (typeof to === 'string') {
        navigation.navigate({ name });
      } else {
        navigation.navigate(name);
      }
    }
    if (onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity onPress={() => routeTo()}>
      <Text color="primary.100">{children}</Text>
    </TouchableOpacity>
  );
};

export { Link };

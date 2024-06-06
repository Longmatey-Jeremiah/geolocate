import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Input as BaseInput, IInputProps, Box, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

const inputStyle = {
  placeholderTextColor: 'brand.300',
  borderRadius: 6,
  borderWidth: 0,
  backgroundColor: 'brand.100',
  w: '100%',
};

const disabledStyle = {
  placeholderTextColor: 'secondary.900',
  color: 'secondary.900',
  borderRadius: 6,
  borderWidth: 0,
  backgroundColor: 'secondary.800',
  opacity: 1,
  w: '100%',
};
function Input({ ...rest }: IInputProps) {
  const { type } = rest;
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  if (type === 'password') {
    return (
      <Box position="relative">
        <Box>
          <BaseInput
            _disabled={disabledStyle}
            h={12}
            {...inputStyle}
            {...rest}
            type={show ? 'text' : 'password'}
          />
        </Box>
        <TouchableOpacity
          onPress={handleClick}
          style={{ position: 'absolute', top: 0, bottom: 0, right: 20, justifyContent: 'center' }}
        >
          {!show ? (
            <Text>
              <Icon as={FontAwesome5} name="eye" />
            </Text>
          ) : (
            <Text>
              <Icon as={FontAwesome5} name="eye-slash" />
            </Text>
          )}
        </TouchableOpacity>
      </Box>
    );
  }
  return <BaseInput _disabled={disabledStyle} h={12} {...inputStyle} {...rest} />;
}

export { Input };

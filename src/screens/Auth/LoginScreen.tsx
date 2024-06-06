import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Button, Heading, Input, PageTitle } from '../../components/ui';
import { Box, Center, Text, VStack } from 'native-base';
import { REGEXP, RouteNames } from '../../constants';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../../store';
import { login } from '../../services';
import { setTokens, setUser } from '../../store/auth.slice';

export function LoginScreen(navigation: any) {
  const dispatch = useDispatch();

  const onSignInPressed = (data: any) => {
    dispatch(setIsAuthenticated(true));
    dispatch(setTokens(data.token));
    dispatch(setUser(data.user));
    // navigation.navigate({ name: RouteNames.DASHBOARD });
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      onSignInPressed(response);
      console.log('User: ', response);
      navigation.navigate({ name: RouteNames.DASHBOARD });
    } catch (error) {
      console.log('Login error', error);
    }
  };

  return (
    <AuthLayout>
      <VStack space={4} h="100%" justifyContent="center">
        <PageTitle />
        <Box>
          <Center>
            <Heading>Sign in</Heading>
          </Center>
        </Box>
        <Box>
          <VStack space={6}>
            <Controller
              control={control}
              name="email"
              rules={{
                pattern: {
                  value: REGEXP,
                  message: 'Email is invalid',
                },
                required: 'Email is required',
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                  <Input
                    style={{ borderColor: error ? 'red' : 'grey' }}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Email address"
                  />
                  {error && <Text style={{ color: 'red' }}> {error.message || 'Error'} </Text>}
                </>
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password is too short',
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                  <Input
                    style={{ borderColor: error ? 'red' : 'grey' }}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Password"
                    type="password"
                  />
                  {error && <Text style={{ color: 'red' }}> {error.message || 'Error'} </Text>}
                </>
              )}
            />

            <Button onPress={handleSubmit(onSubmit)}>Continue</Button>
          </VStack>
        </Box>
      </VStack>
    </AuthLayout>
  );
}

import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import {Container, Text, Form} from 'native-base';
import {useDispatch} from 'react-redux';

import {Button, ControlledInput, Header} from '~/app/components';

import user from '~/state/user';

import formState from './formState';

const styles = StyleSheet.create({
  form: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: 45,
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
  header: StyleSheet.absoluteFillObject,
});

const Login: React.FC = () => {
  const {handleSubmit, control, errors} = useForm(formState);
  const dispatch = useDispatch();
  const onSubmit = ({email}: {email: string}) =>
    dispatch(user.actions.requestLogin(email));

  return (
    <Container>
      <Header title="Sign in to chat!" />
      <Form style={styles.form}>
        <ControlledInput
          name="email"
          error={errors.email}
          label="Email"
          control={control}
        />
        <ControlledInput
          error={errors.password}
          name="password"
          label="Password"
          control={control}
          secureTextEntry
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          full
          primary
          style={styles.button}>
          <Text> Login </Text>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

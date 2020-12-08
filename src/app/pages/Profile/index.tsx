import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import {Text, Form} from 'native-base';
import {useSelector} from 'react-redux';

import user from '~/state/user';

import formScheme from './formScheme';

import {Button, ControlledInput} from '~/app/components';

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

const Profile: React.FC = () => {
  const userData = useSelector(user.selectors.getUserData);

  const {handleSubmit, control, errors} = useForm({
    defaultValues: {
      email: userData?.email,
      password: '',
      passwordConfirmation: '',
    },
    resolver: formScheme,
  });
  const onSubmit = () => null;

  return (
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
      <ControlledInput
        error={errors.passwordConfirmation}
        name="passwordConfirmation"
        label="Password confirmation"
        control={control}
        secureTextEntry
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        full
        primary
        style={styles.button}>
        <Text> Update </Text>
      </Button>
    </Form>
  );
};

export default Profile;

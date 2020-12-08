import React from 'react';
import {StyleSheet} from 'react-native';
import {Input, Item as FormItem, Label, NativeBase} from 'native-base';
import {Controller, Control, FieldError} from 'react-hook-form';

import ErrorText from './ErrorText';

interface ControlledInputProps extends NativeBase.Input {
  control: Control;
  name: string;
  error: FieldError;
  label: string;
}

const styles = StyleSheet.create({
  error: {
    marginLeft: 15,
    marginTop: 5,
  },
});

const ControlledInput: React.FC<ControlledInputProps> = ({
  control,
  name,
  error,
  label,
  ...restProps
}) => (
  <>
    <Controller
      name={name}
      control={control}
      render={({onChange, value}) => (
        <FormItem error={Boolean(error)} floatingLabel last>
          <Label>{label}</Label>
          <Input
            {...restProps}
            onChangeText={(text) => onChange(text)}
            value={value}
          />
        </FormItem>
      )}
    />
    <ErrorText style={styles.error} label={error?.message} />
  </>
);

export default ControlledInput;

import React from 'react';
import {
  InputModeOptions,
  StyleSheet,
  TextInput,
  TextInputAndroidProps,
  TextInputIOSProps,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../utils';

type TextInputProps = {
  icon: JSX.Element;
  autoComplete: TextInputAndroidProps['autoComplete'];
  clearButtonMode: TextInputIOSProps['clearButtonMode'];
  inputMode: InputModeOptions;
  placeholder: string;
  secureTextEntry: boolean;
};

export const TextInputWithIcon = (props: TextInputProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: 42,
      alignItems: 'center',
      paddingHorizontal: 10,
      columnGap: 8,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: COLORS.ORANGE,
    },
    inputContainer: {
      flex: 1,
      height: '100%',
    },
    text: {
      fontFamily: FONTS.Raleway_Medium,
      fontSize: 16,
      color: COLORS.NERO,
    },
  });

  return (
    <View style={styles.container}>
      {props.icon}
      <TextInput
        style={[styles.inputContainer, styles.text]}
        autoCapitalize="none"
        autoComplete={props.autoComplete}
        autoCorrect={false}
        clearButtonMode={props.clearButtonMode}
        inputMode={props.inputMode}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.GRAY62}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

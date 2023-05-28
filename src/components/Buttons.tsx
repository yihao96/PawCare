import React from 'react';
import {ColorValue, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../utils';

type ButtonProps = {
  text: String;
  fontColor: ColorValue;
  onPress(): void;
};

type ThirdPartyLoginBtnProps = {
  icon: JSX.Element;
  onPress(): void;
};

export const LongButton = (props: ButtonProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      width: 294,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: props.fontColor,
    },
    text: {
      fontFamily: FONTS.Raleway_Bold,
      fontSize: 16,
      color: COLORS.WHITE,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export const MediumButton = (props: ButtonProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      width: 174,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: props.fontColor,
    },
    text: {
      fontFamily: FONTS.Raleway_Bold,
      fontSize: 16,
      color: COLORS.WHITE,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export const ThirdPartyLoginBtn = (
  props: ThirdPartyLoginBtnProps,
): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.icon}
    </TouchableOpacity>
  );
};

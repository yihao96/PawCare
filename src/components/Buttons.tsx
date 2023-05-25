import React from 'react';
import {ColorValue, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../utils';

type ButtonProps = {
  text: String;
  fontColor: ColorValue;
};

export const LongButton = ({text, fontColor}: ButtonProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      width: 294,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: fontColor,
    },
    text: {
      fontFamily: FONTS.Raleway_Bold,
      fontSize: 16,
      color: COLORS.WHITE,
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const MediumButton = ({text, fontColor}: ButtonProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      width: 174,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: fontColor,
    },
    text: {
      fontFamily: FONTS.Raleway_Bold,
      fontSize: 16,
      color: COLORS.WHITE,
    },
  });

  return (
    <TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

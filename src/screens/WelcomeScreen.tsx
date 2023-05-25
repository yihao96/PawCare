import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Buttons} from '../components';
import {COLORS, FONTS, IMAGES} from '../utils';

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={IMAGES.background.welcomePage}
      style={styles.background}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>
            Welcome to <Text style={styles.textTitle2}>PawCare!</Text>
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textDescription}>
            Let's maintain our beloved pets' health and prevents the development
            of potential issues.
          </Text>
        </View>
      </View>
      <View style={styles.btnsContainer}>
        <Buttons.LongButton text={'Log in'} fontColor={COLORS.ORANGE} />
        <Buttons.LongButton text={'Sign up'} fontColor={COLORS.CHOCOLATE} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  textContainer: {
    flex: 1.5,
    marginHorizontal: 39,
    justifyContent: 'center',
    rowGap: 30,
    // backgroundColor: COLORS.WHITESMOKE,
  },
  titleContainer: {
    width: 200,
    // backgroundColor: COLORS.WHITESMOKE,
  },
  descriptionContainer: {
    width: 170,
    // backgroundColor: COLORS.WHITESMOKE,
  },
  btnsContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
    rowGap: 12,
    // backgroundColor: COLORS.WHITESMOKE,
  },
  textTitle: {
    fontFamily: FONTS.Raleway_Bold,
    fontSize: 28,
    color: COLORS.NERO,
  },
  textTitle2: {
    fontSize: 36,
  },
  textDescription: {
    fontFamily: FONTS.Raleway_Medium,
    fontSize: 16,
    color: COLORS.NERO,
  },
});

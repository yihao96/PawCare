import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Buttons} from '../components';
import {COLORS, FONTS, IMAGES} from '../utils';

export const LoginScreen = () => {
  return (
    <ImageBackground
      source={IMAGES.background.loginPage}
      style={styles.background}>
      <View style={styles.titleContainer}>
        <View style={styles.titleSubContainer}>
          <Text style={styles.textTitle}>
            Welcome <Text style={styles.textTitle2}>Back</Text>
          </Text>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginSubContainer}>
          <Text style={styles.textLoginTitle}>Login</Text>
        </View>
        {/* <Buttons.LongButton text={'Log in'} fontColor={COLORS.ORANGE} />
        <Buttons.LongButton text={'Sign up'} fontColor={COLORS.CHOCOLATE} /> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: 39,
    justifyContent: 'center',
    rowGap: 30,
    // backgroundColor: COLORS.GRAY62,
  },
  titleSubContainer: {
    flex: 0.5,
    width: 150,
    // backgroundColor: COLORS.WHITESMOKE,
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 39,
    marginBottom: 45,
    rowGap: 12,
    // backgroundColor: COLORS.GRAY62,
  },
  loginSubContainer: {
    width: '100%',
    height: 393,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 19,
    borderRadius: 10,
    backgroundColor: COLORS.WHITESMOKE,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.25,
    elevation: 8,
  },
  textTitle: {
    fontFamily: FONTS.Raleway_Bold,
    fontSize: 28,
    color: COLORS.NERO,
  },
  textTitle2: {
    fontSize: 54,
  },
  textLoginTitle: {
    fontFamily: FONTS.Raleway_Bold,
    fontSize: 24,
    color: COLORS.ORANGE,
  },
  textDescription: {
    fontFamily: FONTS.Raleway_Medium,
    fontSize: 16,
    color: COLORS.NERO,
  },
});

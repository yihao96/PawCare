import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Buttons, Inputs} from '../components';
import {COLORS, FONTS, ICONS, IMAGES} from '../utils';

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
      <KeyboardAvoidingView
        style={styles.loginContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.loginSubContainer}>
          <Text style={styles.textLoginTitle}>Login</Text>
          <View style={styles.inputsContainer}>
            <Inputs.TextInputWithIcon
              icon={<ICONS.Email />}
              autoComplete="email"
              clearButtonMode="never"
              inputMode="email"
              placeholder="Email"
              secureTextEntry={false}
            />
            <Inputs.TextInputWithIcon
              icon={<ICONS.Padlock />}
              autoComplete="password"
              clearButtonMode="while-editing"
              inputMode="none"
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>
          <Buttons.MediumButton
            text={'Login'}
            fontColor={COLORS.ORANGE}
            onPress={() => console.log('Login')}
          />
          <Text style={styles.textBody}>Or login with</Text>
          <View>
            <Buttons.ThirdPartyLoginBtn
              icon={<ICONS.Google />}
              onPress={() => {}}
            />
          </View>
          <Text style={styles.textBody}>
            New to PawCare?{' '}
            <Text style={styles.textBodyHighlight} onPress={() => {}}>
              Register
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
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
    rowGap: 25,
    paddingHorizontal: 19,
    borderRadius: 10,
    backgroundColor: COLORS.WHITESMOKE,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.25,
    elevation: 8,
  },
  inputsContainer: {
    rowGap: 12,
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
  textBody: {
    fontFamily: FONTS.Raleway_Medium,
    fontSize: 16,
    color: COLORS.NERO,
  },
  textBodyHighlight: {
    fontFamily: FONTS.Raleway_Bold,
    color: COLORS.ORANGE,
  },
});

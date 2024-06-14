import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';

type Props = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

export default function AuthHomeScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>MATZIP APP</Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          label="로그인 하기"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입 하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    marginBottom: 48,
  },
  logoText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 16,
    display: 'flex',
    gap: 12,
  },
});

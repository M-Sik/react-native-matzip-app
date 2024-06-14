import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';

type Props = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

export default function AuthHomeScreen({navigation}: Props) {
  return (
    <SafeAreaView>
      <View>
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

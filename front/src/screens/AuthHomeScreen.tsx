import React from 'react';
import {Button, SafeAreaView, View} from 'react-native';

export default function AuthHomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

import {ImageBackground, Text, View, Keyboard, Alert} from 'react-native';
import styles from './style';
import AuthHeaders from '../../../component/common/AuthHeaders';
import {BackGroundImage} from '../../../assest/Images';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import SCREEN from '../../../data/ScrName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Buttons from '../../../component/common/Buttons';
import React from 'react';

const CELL_COUNT = 5;

const SignUPOTP = (prop: any) => {
  const {navigation} = prop;
  const route = useRoute<any>();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {email} = route.params;

  const handleVerify = async () => {
    navigation.navigate(SCREEN.UserName, {email: email, token:"123"})
    // try {
    //   Alert.alert(email);
    //   const response = await fetch(
    //     'https://ea04-105-163-2-53.ngrok-free.app/auth/verify',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({email: email, otp: value}),
    //     },
    //   );

    //   if (!response.ok) {
    //     throw new Error('Failed');
    //   }

    //   const data = await response.json();
    //   await AsyncStorage.setItem('token', data.token);
    //   Alert.alert(data.token);
    //   navigation.navigate(SCREEN.UserName, {email: email, token: data.token});
    // } catch (error) {
    //   Alert.alert('Error', 'Email or password is invalid');
    // }
  };
  return (
    <ImageBackground
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.container}>
      <AuthHeaders onpressBack={() => navigation.goBack()} />
      <View style={{...styles.mainCOntainer}}>
        <View style={styles.line} />
        <Text style={styles.TitleStyle}>OTP Code Verification 🔐</Text>
        <Text style={styles.discriptionStyle}>
          Enter the OPT sent to als***67@gmail.com
        </Text>
        <View style={styles.FieldContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={text => {
              setValue(text);
              if (text.length === CELL_COUNT) {
                Keyboard.dismiss();
                // navigation.navigate(SCREEN.UserName);
              }
            }}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.DidnotText}>Didn't receive email?</Text>
          <Text style={styles.DidnotText}>
            You can <Text style={styles.resond}>resend</Text> code in 55 s
          </Text>
        </View>
        <Buttons
          container={styles.buttonStyle}
          title="continue"
          onpress={() => handleVerify()}
        />
      </View>
    </ImageBackground>
  );
};
export default SignUPOTP;

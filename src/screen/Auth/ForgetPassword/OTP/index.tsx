import {ImageBackground, Text, View, Keyboard, Alert} from 'react-native';
import styles from './style';
import {BackGroundImage, EyeOn, Eyepf} from '../../../../assest/Images';
import AuthHeaders from '../../../../component/common/AuthHeaders';
import {useRoute} from '@react-navigation/native';
import {useState, } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import SCREEN from '../../../../data/ScrName';
import InputText from '../../../../component/common/InputText';
import {COLOR} from '../../../../themes/StyleGuides';
import Buttons from '../../../../component/common/Buttons';
import React from 'react';

const CELL_COUNT = 5;

const OTP = (prop: any) => {
  const {navigation} = prop;
  const route = useRoute<any>();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  // const [email, setEmail] = useState("")
  const {email} = route.params;
  const [focus, setFocus] = useState(0);
  const [hidePassword, setHidePassword] = useState(true);
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    navigation.navigate(SCREEN.Login);

    // try {
    //   const response = await fetch(
    //     'https://dc65-102-0-5-84.ngrok-free.app/auth/reset-password',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email: email,
    //         otp: value,
    //         newPassword: password,
    //       }),
    //     },
    //   );

    //   if (!response.ok) {
    //     throw new Error('Failed');
    //   }
    //   navigation.navigate(SCREEN.Login);
    // } catch (error) {
    //   console.error('Error:', error);
    //   Alert.alert('Error');
    // }
  };

  return (
    <ImageBackground
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.container}>
      <AuthHeaders onpressBack={() => navigation.goBack()} />

      <Text style={styles.TitleStyle}>OTP Code Verification 🔐</Text>
      <Text style={styles.discriptionStyle}>
        Enter the 6-digit code sent to
        {email}
      </Text>
      <Text style={styles.Seconds}>52 seconds left</Text>

      <View style={styles.FieldContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={text => {
            setValue(text);
            if (text.length === CELL_COUNT) {
              Keyboard.dismiss();
              // navigation.navigate(SCREEN.ResetPassword);
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
      <InputText
        textfield={{borderColor: focus == 2 ? COLOR.primary : COLOR.white}}
        onFuces={() => {
          setFocus(2);
        }}
        title={'New Password'}
        hideOnpress={() => {
          setHidePassword(hidePassword == false ? true : false);
        }}
        secureText={hidePassword}
        length={8}
        PlaceHolder={'Password'}
        onChangeText={(data: any) => {
          setPassword(data);
        }}
        Icon={hidePassword == true ? EyeOn : Eyepf}
      />
      {/* <View style={styles.TextContainer}>
        <Text style={styles.DidnotText}>Didn't receive email?</Text>
        <Text style={styles.DidnotText}>
          You can <Text style={styles.resond}>resend</Text> code in 55 s
        </Text>
      </View> */}
      <Buttons
        container={styles.buttonStyle}
        title="continue"
        onpress={() => handleResetPassword()}
      />
    </ImageBackground>
  );
};
export default OTP;

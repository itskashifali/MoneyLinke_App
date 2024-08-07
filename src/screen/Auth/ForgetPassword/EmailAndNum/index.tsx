import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './style';
import {BackGroundImage, Email, dote} from '../../../../assest/Images';
import AuthHeaders from '../../../../component/common/AuthHeaders';
import InputText from '../../../../component/common/InputText';
import {useState} from 'react';
import {COLOR} from '../../../../themes/StyleGuides';
import Buttons from '../../../../component/common/Buttons';
import SCREEN from '../../../../data/ScrName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import PhoneNumber from '../../../../component/core/PhoneNumber';

const EmailAndNum = (props: any) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [focus, setFocus] = useState(0);
  const [selector, setSelector] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    navigation.navigate(SCREEN.OTP, {email: email})
//     setIsLoading(true);
//     if (!email) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await fetch(
//         'https://dc65-102-0-5-84.ngrok-free.app/auth/send-otp',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({email: email}),
//         },
//       );
// console.log(response)
//       if (!response.ok) {
//         throw new Error('Failed');
//       }
//       await AsyncStorage.setItem('email', email);
//       const storedEmail = await AsyncStorage.getItem('email');
//       navigation.navigate(SCREEN.OTP, {email: email});
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert('Error');
//     }
//     setIsLoading(false);
  };

  return (
    <ImageBackground
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.container}>
      <AuthHeaders onpressBack={() => navigation.goBack()} />

      <Text style={styles.TitleStyle}>Reset Your Password 🔑</Text>
      <Text style={styles.discriptionStyle}>
        {selector == false
          ? 'Please enter your phone Number and we  will send a 6-digit code in the next step to reset your password.'
          : 'Please enter your email and we will send an a 6-digit code in the next step to reset your password.'}
      </Text>

      <View>
        {selector != false ? (
          <InputText
            leftIcon={Email}
            container={styles.TextInput}
            textfield={{borderColor: COLOR.primary}}
            title={'Email'}
            PlaceHolder={'Email'}
            onChangeText={(data: any) => {
              setEmail(data);
            }}
            KeyBoard={'email-address'}
            onFuces={() => {
              setFocus(1);
            }}
          />
        ) : (
          <PhoneNumber
            onFuces={() => {
              setFocus(1);
            }}
            title={'Phone Number'}
            textfield={{borderColor: COLOR.primary}}
            onChangetext={(data: any) => {
              setEmail(data);
            }}
          />
          // <InputText
          //   leftIconStyle={{tintColor: COLOR.white}}
          //   leftIcon={dote}
          //   container={styles.TextInput}
          //   textfield={{borderColor: COLOR.primary}}
          //   title={'Phone Number'}
          //   PlaceHolder={'Add Number'}
          //   onChangeText={(data: any) => {
          //     setEmail(data);
          //   }}
          //   KeyBoard={'numeric'}
          //   onFuces={() => {
          //     setFocus(1);
          //   }}
          // />
        )}
      </View>

      <View style={styles.emailButtonCintainer}>
        <Text style={styles.orUsetext}>or use</Text>
        <TouchableOpacity
          onPress={() => {
            setSelector(selector == false ? true : false);
          }}>
          <Text style={{...styles.orUsetext, color: COLOR.primary}}>
            {selector == false ? 'email' : 'Phone Number'}
          </Text>
        </TouchableOpacity>
      </View>
      <Buttons
        container={styles.buttonStyle}
        title="continue"
        // onpress={()=>navigation.navigate(SCREEN.OTP, {email: email})}
        onpress={() => handleSendOtp()}
      />
    </ImageBackground>
  );
};
export default EmailAndNum;

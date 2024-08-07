import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {BackGroundImage, EyeOn, Eyepf} from '../../../assest/Images';
import {useEffect, useState} from 'react';
import InputText from '../../../component/common/InputText';
import Buttons from '../../../component/common/Buttons';
import {COLOR} from '../../../themes/StyleGuides';
import SCREEN from '../../../data/ScrName';
import AuthHeaders from '../../../component/common/AuthHeaders';
import TouchID from 'react-native-touch-id';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

export default function Login(props: any) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [focus, setFocus] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    handleAuth();
  },[]);
  const handleAuth = () => {
    TouchID.isSupported().then(biometryType => {
      if (biometryType === 'FaceID') {
        TouchID.authenticate('')
          .then((success: any) => {
            navigation.replace('AccessSetting');
          })
          .catch((error: any) => {
            Alert.alert('Authentication Failed', error.message);
          });
      } else {
        TouchID.authenticate('')
          .then((success: any) => {
            navigation.replace('BiometricNotAvailable');
          })
          .catch((error: any) => {});
      }
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (email == '' || password == '') {
      Alert.alert('Error', 'Please fill in all fields');
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch(
        'https://71bc-105-163-0-76.ngrok-free.app/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({email: email, password: password}),
        },
      );

      if (!response.ok) {
        Alert.alert('Error', 'Email or password is invalid');
        throw new Error('Login Failed');
      }

      const data = await response.json();
      await AsyncStorage.setItem('token', data.token);
      navigation.navigate(SCREEN.Home2);
    } catch (error) {
      Alert.alert('Error', 'Email or password is invalid');
    }
    setIsLoading(false);
  };

  return (
    <ImageBackground
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.container}>
      <AuthHeaders onpressBack={() => navigation.navigate(SCREEN.SignUP)} />
      <View style={{...styles.mainCOntainer}}>
        <View style={styles.line} />

        <Text style={styles.WellcomeStyle}>Welcome Back</Text>

        <InputText
          textfield={{borderColor: focus == 1 ? COLOR.primary : COLOR.white}}
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

        <InputText
          textfield={{borderColor: focus == 2 ? COLOR.primary : COLOR.white}}
          onFuces={() => {
            setFocus(2);
          }}
          title={'Password'}
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
        <TouchableOpacity
          style={styles.forgetButton}
          onPress={() => navigation.navigate(SCREEN.EmailAndNum)}>
          <Text style={styles.ForgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <Buttons
          title="Login"
          container={styles.ButtonStyle}
          onpress={() => {
            // handleSubmit();`
            navigation.navigate(SCREEN.BottomBarNavigation);

            // navigation.navigate(SCREEN.SignUP)
          }}
        />
      </View>
    </ImageBackground>
  );
}

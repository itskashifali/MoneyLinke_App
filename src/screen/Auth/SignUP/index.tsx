import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './style';
import InputText from '../../../component/common/InputText';
import {
  BackGroundImage,
  EyeOn,
  Eyepf,
} from '../../../assest/Images';
import { COLOR } from '../../../themes/StyleGuides';
import Buttons from '../../../component/common/Buttons';
import AuthHeaders from '../../../component/common/AuthHeaders';
import SCREEN from '../../../data/ScrName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneNumber from '../../../component/core/PhoneNumber';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

const SignUP = (props: any) => {
  const { navigation } = props;
  const [selector, setSelector] = useState(false);
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordError, setPasswordError] = useState({
    containsUpperCase: false,
    containsNumber: false,
    containsSymbol: false,
  });
  const [showErrors, setShowErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [focus, setFocus] = useState(0);

  const validatePasswords = (password: any) => {
    const containsUpperCase = !/[A-Z].*[a-z]/.test(password);
    const containsNumber = !/[0-9].*[0-9]/.test(password);
    const containsSymbol = !/[@#$%].*[@#$%]/.test(password);

    setPasswordError({
      containsUpperCase,
      containsNumber,
      containsSymbol,
    });
  };

  const validatePassword = () => {
    validatePasswords(password);
    return (
      !passwordError.containsUpperCase &&
      !passwordError.containsNumber &&
      !passwordError.containsSymbol
    );
  };

  const handleSignUp = async () => {
    setShowErrors(true);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));

    if (validatePassword() && !emailError) {
      setIsLoading(true);

      // Proceed with sign up logic
      try {
        // Replace with your actual API endpoint and payload
        // const response = await fetch(
        //   'https://your-api-endpoint/auth/signup',
        //   {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       email: number,
        //       password: password,
        //       phoneNumber: '0000',
        //     }),
        //   },
        // );

        // Simulated response handling (remove in production)
        // const data = { token: 'yourAuthToken' };
        // await AsyncStorage.setItem('token', data.token);
        // await AsyncStorage.setItem('email', email);
        // await AsyncStorage.setItem('phoneNumber', number);

        console.log('Sign up successful:', { email, number });
        navigation.navigate(SCREEN.SignUPOTP, { email: number });
      } catch (error) {
        console.log('Error signing up:', error);
        Alert.alert('Error signing up');
      }

      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.container}>
      <AuthHeaders onpressBack={() => navigation.goBack()} />
      <View style={{ ...styles.mainCOntainer }}>
        <View style={styles.line} />

        <Text style={styles.WellcomeStyle}>Create an account</Text>
        {selector ? (
          <PhoneNumber
            title={'Phone Number'}
            onChangetext={(data: any) => {
              setNumber(data);
            }}
            onFuces={() => {
              setFocus(1);
            }}
            textfield={{ borderColor: focus === 1 ? COLOR.primary : COLOR.white }}
          />
        ) : (
          <InputText
            textfield={{ borderColor: focus === 1 ? COLOR.primary : COLOR.white }}
            title={'Email'}
            PlaceHolder={'Add Email'}
            onChangeText={(data: any) => {
              setEmail(data);
              // Validate email format here
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

              setEmailError(!emailRegex.test(data));
            }}
            KeyBoard={'email-address'}
            onFuces={() => {
              setFocus(1);
            }}
          />
        )}
        {emailError && (
          <Text style={styles.errorText}>Enter a valid Email address</Text>
        )}
        <InputText
          textfield={{ borderColor: focus === 2 ? COLOR.primary : COLOR.white }}
          onFuces={() => {
            setFocus(2);
          }}
          title={'Password'}
          hideOnpress={() => {
            setHidePassword(!hidePassword);
          }}
          secureText={hidePassword}
          PlaceHolder={'Password'}
          onChangeText={(data: any) => {
            setPassword(data);
            validatePasswords(data);
          }}
          Icon={hidePassword ? EyeOn : Eyepf}
        />
        {showErrors && (passwordError.containsUpperCase || passwordError.containsNumber || passwordError.containsSymbol) && (
          <View style={styles.ErrorContainer}>
            <Text style={styles.errorText}>Password Must Contain:</Text>
            {passwordError.containsUpperCase && <Text style={styles.errorText}>At least 2 characters A-Z</Text>}
            {passwordError.containsNumber && <Text style={styles.errorText}>Any 2 numbers 0-9</Text>}
            {passwordError.containsSymbol && <Text style={styles.errorText}>Any 2 symbols @#$%</Text>}
          </View>
        )}

        <View style={styles.ContinueEmailContainer}>
          <Text style={styles.continueText}>Or Continue with </Text>
          <TouchableOpacity
            style={styles.forgetButton}
            onPress={() => {
              setSelector(!selector);
            }}>
            <Text style={styles.ForgotText}>
              {selector ? 'phone number' : 'email'}
            </Text>
          </TouchableOpacity>
        </View>

        <Buttons
          title="Sign Up"
          container={styles.ButtonStyle}
          onpress={() => handleSignUp()}
        />
      </View>
    </ImageBackground>
  );
};

export default SignUP;

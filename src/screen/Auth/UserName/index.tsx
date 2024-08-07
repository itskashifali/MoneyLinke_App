import {ImageBackground, Text, View, Alert} from 'react-native';
import styles from './style';
import InputText from '../../../component/common/InputText';
import {useState} from 'react';
import {BackGroundImage} from '../../../assest/Images';
import {COLOR} from '../../../themes/StyleGuides';
import Buttons from '../../../component/common/Buttons';
import AuthHeaders from '../../../component/common/AuthHeaders';
import SCREEN from '../../../data/ScrName';
import {useRoute} from '@react-navigation/native';
import React from 'react';

const UserName = (props: any) => {
  const {navigation} = props;
  const route = useRoute<any>();
  const [number, setUserName] = useState('');
  const {email, token} = route.params;
  const [focus, setFocus] = useState(0);

  const handleUpdateUsername = async () => {
    navigation.navigate(SCREEN.Login);

    // try {
    //   console.log(email, token);
    //   const response = await fetch(
    //     'https://dc65-102-0-5-84.ngrok-free.app/user/set-username',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify({
    //         email: email,
    //         username: number,
    //         phonenumber: '000',
    //       }),
    //     },
    //   );
    //   if (!response.ok) {
    //     throw new Error('Update failed');
    //   }
    //   navigation.navigate(SCREEN.Login);
    // } catch (error) {
    //   console.error('Error Updating:', error);
    //   Alert.alert('Error Updating');
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

        <Text style={styles.WellcomeStyle}>Set up your username</Text>
        <Text style={styles.discription}>
          Set up a unique username that will be used to identify you when using
          the app. You will be able to use this username to sign into the app.
        </Text>
        <InputText
          textfield={{borderColor: focus == 1 ? COLOR.primary : COLOR.white}}
          title={'Username'}
          PlaceHolder={'@username'}
          onChangeText={(data: any) => {
            setUserName(data);
          }}
          onFuces={() => {
            setFocus(1);
          }}
        />

        <Buttons
          title="Sign Up"
          container={styles.ButtonStyle}
          onpress={() => handleUpdateUsername()}
        />
      </View>
    </ImageBackground>
  );
};
export default UserName;

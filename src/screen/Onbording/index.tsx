import {Image, ImageBackground, Text} from 'react-native';
import styles from './style';
import {BackGroundImage, Logo, LogoSecond} from '../../assest/Images';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import React from 'react';

const Onbording = (props: any) => {
  const {navigation} = props;
  return (
    <ImageBackground
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.container}>
      <Image source={LogoSecond} style={styles.LogoStyle} />
      <Text style={styles.TextStyle}>
        Your money transfers are about to get a lot easier and safer
      </Text>
      <Buttons
        container={styles.ButtonLogin}
        title="Login"
        onpress={() => navigation.navigate(SCREEN.Login)}
      />
      <Buttons
        onpress={() => navigation.navigate(SCREEN.SignUP)}
        container={styles.ButtonCeart}
        title="Create an account"
        tiileStyle={styles.Buttontext}
      />
    </ImageBackground>
  );
};
export default Onbording;

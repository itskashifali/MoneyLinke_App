import React, {useEffect} from 'react';
import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import {styles} from './style';
import SCREEN from '../../data/ScrName';
import {BackGroundImage, Logo} from '../../assest/Images';
import {COLOR} from '../../themes/StyleGuides';

export default function Splash(props: any) {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREEN.Onbording);
    }, 3000);
  });
  return (
    <ImageBackground
      source={BackGroundImage}
      style={styles.container}
      resizeMode="cover">
      <StatusBar backgroundColor={COLOR.primary} />
      <View style={styles.mainCntainer}>
        <Image style={styles.ImageIcon} source={Logo} />
        <Text style={styles.TextStyle}>MoneyLink</Text>
      </View>
    </ImageBackground>
  );
}

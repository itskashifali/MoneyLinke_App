import {ImageBackground, Text, View} from 'react-native';
import styles from './style';
import {BackGroundImage, EyeOn, Eyepf} from '../../../../assest/Images';
import AuthHeaders from '../../../../component/common/AuthHeaders';
import {useState} from 'react';
import InputText from '../../../../component/common/InputText';
import {COLOR} from '../../../../themes/StyleGuides';
import Buttons from '../../../../component/common/Buttons';
import React from 'react';

const ResetPassword = (props: any) => {
  const {navigation} = props;
  const [Confirm, setConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [focus, setFocus] = useState(0);
  return (
    <ImageBackground
      source={BackGroundImage}
      resizeMode="cover"
      style={styles.container}>
      <AuthHeaders onpressBack={() => navigation.goBack()} />

      <View style={{...styles.mainCOntainer}}>
        <View style={styles.line} />

        <Text style={styles.WellcomeStyle}>Reset Password</Text>

        <InputText
          textfield={{borderColor: focus == 1 ? COLOR.primary : COLOR.white}}
          onFuces={() => {
            setFocus(1);
          }}
          title={'New Password'}
          hideOnpress={() => {
            setHidePassword(hidePassword == false ? true : false);
          }}
          secureText={hidePassword}
          length={8}
          PlaceHolder={'New Password'}
          onChangeText={(data: any) => {
            setPassword(data);
          }}
          Icon={hidePassword == true ? EyeOn : Eyepf}
        />

        <InputText
          textfield={{borderColor: focus == 2 ? COLOR.primary : COLOR.white}}
          onFuces={() => {
            setFocus(2);
          }}
          title={'Confirm Password'}
          hideOnpress={() => {
            setHideConfirmPassword(hideConfirmPassword == false ? true : false);
          }}
          secureText={hideConfirmPassword}
          length={8}
          PlaceHolder={'Confirm Password'}
          onChangeText={(data: any) => {
            setConfirm(data);
          }}
          Icon={hideConfirmPassword == true ? EyeOn : Eyepf}
        />

        <Buttons
          title="Login"
          container={styles.ButtonStyle}
          onpress={() => navigation.navigate('BottomBarNavigation')}
        />
      </View>
    </ImageBackground>
  );
};
export default ResetPassword;

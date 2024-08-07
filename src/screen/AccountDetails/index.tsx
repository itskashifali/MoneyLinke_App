import {Image, Text, TextInput, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {useEffect, useState} from 'react';
import {ProfileImage, tick} from '../../assest/Images';
import {COLOR} from '../../themes/StyleGuides';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import React from 'react';

const AccountDetails = (prop: any) => {
  const {navigation} = prop;
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const [emailVerify, setEmailVerify] = useState(false);

  useEffect(() => {
    if (number.length === 13) {
      setEmailVerify(true);
      console.log('correct');
    } else {
      setEmailVerify(false);
      console.log(' Email format incorrect');
    }
  }, [number]);

  return (
    <View style={styles.container}>
      <Headers title="Wallet" onpressBack={() => navigation.goBack()} />
      <Text style={styles.TitleStyle}>Enter the account details</Text>

      <Text style={styles.inputTitle}>Account Number*</Text>

      <View style={styles.TextInput}>
        <TextInput
          placeholder="0000000000000"
          onChangeText={(data: any) => {
            setNumber(data);
          }}
          keyboardType="numeric"
          placeholderTextColor={COLOR.DarkGray_1}
          style={styles.fildeInput}
        />

        {emailVerify == true && <Image style={styles.tickIcon} source={tick} />}
      </View>
      <Text style={styles.inputTitle}>Recipient's Full Name*</Text>

      <View style={styles.TextInput}>
        <TextInput
          placeholder="Full Name"
          onChangeText={(data: any) => {
            setName(data);
          }}
          placeholderTextColor={COLOR.DarkGray_1}
          style={styles.fildeInput}
        />
      </View>

      <Text style={styles.inputTitle}>Recipient's Bank Name*</Text>

      <View style={styles.TextInput}>
        <TextInput
          placeholder="Bank Name"
          onChangeText={(data: any) => {
            setName(data);
          }}
          placeholderTextColor={COLOR.DarkGray_1}
          style={styles.fildeInput}
        />
      </View>

      <Text style={styles.inputTitle}>Recipient's Bank Routing Number</Text>

      <View style={styles.TextInput}>
        <TextInput
          onChangeText={(data: any) => {
            setName(data);
          }}
          placeholderTextColor={COLOR.DarkGray_1}
          style={styles.fildeInput}
        />
      </View>

      <Buttons
        title="Continue"
        container={styles.ButtonsStyle}
        onpress={() =>
          navigation.navigate(SCREEN.TransferAmount, {
            profile: ProfileImage,
            name: 'David King Mwai',
          })
        }
      />
    </View>
  );
};
export default AccountDetails;

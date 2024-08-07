import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {useEffect, useState} from 'react';
import {Camera, DropDownIcon, tick} from '../../assest/Images';
import {COLOR} from '../../themes/StyleGuides';
import ToggalSwitch from '../../component/common/ToggalSwitch';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import React from 'react';
import { CameraPermission } from '../../data/CameraPermission';
import { launchCamera } from 'react-native-image-picker';

const LinkCredit = (prop: any) => {
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


const handalImagePic=async()=>{

  await CameraPermission();

  const options = {
    mediaType: "photo",
    maxWidth: 300,
    maxHeight: 300,
    quality: 1,
  };

  launchCamera(options, (response) => {
    if (!response.didCancel && !response.errorCode) {
      const imageUri = response.assets[0].uri;
      
    }
  });
}

  return (
    <View style={styles.container}>
      <Headers  onpressBack={() => navigation.goBack()} />
      <Text style={styles.TitleStyle}>Card Information</Text>

      <Text style={styles.inputTitle}>Card Number*</Text>

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
      <Text style={styles.inputTitle}>Card Holder’s Full Name*</Text>

      <View style={styles.TextInput}>
        <TextInput
          placeholder="Name"
          onChangeText={(data: any) => {
            setName(data);
          }}
          placeholderTextColor={COLOR.DarkGray_1}
          style={styles.fildeInput}
        />
      </View>
      <View style={styles.DateContainer}>
        <Text style={styles.inputTitle}>Expiration Date</Text>
        <Text style={styles.inputTitle}>CVC</Text>
      </View>
      <View style={styles.DateDropContainer}>
        <TouchableOpacity style={styles.DateDropButton}>
          <Text />
          <Image style={styles.dropIcon} source={DropDownIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.DateDropButton}>
          <Text />
          <Image style={styles.dropIcon} source={DropDownIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.DateDropButton}>
          <Text />
        </TouchableOpacity>
      </View>

      <View style={styles.ToggalSwitchContainer}>
        <ToggalSwitch
          container={styles.ToggalSwitch}
          circle={styles.circleSwitc}
        />
        <Text style={styles.defaultText}>Mark as default card</Text>
      </View>
      <TouchableOpacity style={styles.AddButton} onPress={()=>handalImagePic()} >
        <Image style={styles.addIcon} source={Camera} />
        <Text style={styles.addText}>Scan Debit Card</Text>
      </TouchableOpacity>
      <Buttons
        title="Save"
        container={styles.ButtonsStyle}
        onpress={() => navigation.navigate(SCREEN.StatusAndDetails)}
      />
    </View>
  );
};
export default LinkCredit;

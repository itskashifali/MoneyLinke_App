import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {ProfileImage} from '../../assest/Images';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import InputText from '../../component/common/InputText';
import {useState} from 'react';
import {COLOR} from '../../themes/StyleGuides';
import {launchImageLibrary} from 'react-native-image-picker';
import {CameraPermission} from '../../data/CameraPermission';
import React from 'react';

const EditProfile = (prop: any) => {
  const {navigation} = prop;
  const [userName, setUsername] = useState('');
  const [imagePic, setImagePic] = useState('');

  const handleImagePicker = async () => {
    // Request camera permission before launching the image picker
    await CameraPermission(); // Assuming this function exists to request camera permission

    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    // launchImageLibrary(options, response => {
    //   if (!response.didCancel && !response.errorCode) {
    //     const imageUri = response.assets[0].uri;

    //     setImagePic(imageUri);
    //   }
    // });
  };
  return (
    <View style={styles.container}>
      <Headers title="Edit Profile" onpressBack={() => navigation.goBack()} />
      <Text style={styles.ProfileText}>Profile Picture</Text>
      <Image
        source={imagePic ? {uri: imagePic} : ProfileImage}
        style={styles.ProfieImage}
      />
      <TouchableOpacity
        onPress={() => {
          handleImagePicker();
        }}
        style={{
          ...styles.udateBtton,
        }}>
        <Text style={styles.UpdateText}>Update</Text>
      </TouchableOpacity>
      <InputText
        title={'UserName'}
        PlaceHolder={'UserName'}
        onChangeText={(data: any) => {
          setUsername(data);
        }}
      />
      <TouchableOpacity
        style={{
          ...styles.udateBtton,
          backgroundColor: COLOR.primary,
        }}>
        <Text style={styles.UpdateText}>Update</Text>
      </TouchableOpacity>
      <View style={styles.BottomView}>
        <Buttons
          title="Save"
          container={styles.ButttonStyle}
          tiileStyle={styles.ButtonTitle}
          onpress={() => navigation.navigate(SCREEN.StatusAndDetails)}
        />
      </View>
    </View>
  );
};
export default EditProfile;

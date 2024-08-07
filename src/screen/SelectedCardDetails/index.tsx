import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import styles from './style';
import {COLOR} from '../../themes/StyleGuides';
import {
  Camera,
  DropDownIcon,
  MPesa,
  Visa,
  mastercard_logo,
  tick,
  users,
  usersGroupIcon,
} from '../../assest/Images';
import ToggalSwitch from '../../component/common/ToggalSwitch';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import GroupHeader from '../../component/core/GroupHeader';
import InputText from '../../component/common/InputText';
import PhoneNumber from '../../component/core/PhoneNumber';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { CameraPermission } from '../../data/CameraPermission';
import { launchCamera } from 'react-native-image-picker';

const SelectedCardDetails = (prop: any) => {
  const route = useRoute();
  const {type} = route.params;
  const {navigation} = prop;
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [selectNumorEmail, setSelectNumorEmail] = useState(false);
  const [mpesaIsSelected, setMpesaIsSelected] = useState<boolean>(false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [moneyLinkIsSelected, setMoneyLinkIsSelected] =
    useState<boolean>(false);
  const [selectCard, setSelectCard] = useState(false);

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
      <GroupHeader onpressBack={() => navigation.goBack()} />
      <ScrollView>
        <TouchableOpacity
          style={styles.userGroupContainer}
          onPress={() => navigation.navigate(SCREEN.MoneyLinkCard)}>
          <Image source={usersGroupIcon} style={styles.usersICon} />
          <Text style={styles.GroupPayText}>Group Payment</Text>
        </TouchableOpacity>
        <InputText title={'Recipient’s Full Name*'} PlaceHolder="Full Name" />
        <InputText title={'Add UserName*'} PlaceHolder="@Username" />
        {type == 'MoneyLink' ? (
          <View>
            {selectNumorEmail ? (
              <PhoneNumber title="Phone Number" />
            ) : (
              <InputText title={'Email*'} PlaceHolder="Email" />
            )}
            <TouchableOpacity
              style={styles.selectedBtn}
              onPress={() => {
                setSelectNumorEmail(selectNumorEmail ? false : true);
              }}>
              <Text style={styles.selectbBtnText}>
                {selectNumorEmail ? 'Email' : 'Number'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <PhoneNumber title="Phone Number" />
        )}

        {type == 'MoneyLink' && (
          <View>
            <Text style={styles.TitleStyle}>Add Money Using:</Text>
            <View style={styles.CardContainer}>
              <TouchableOpacity
                style={[
                  styles.transactionOption,
                  moneyLinkIsSelected && styles.selectedOption,
                ]}
                onPress={() => {
                  setSelectCard(false);
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#5416B9', '#8F6ACB']}
                  style={styles.linearGradient}>
                  <Image source={Visa} style={styles.CardIcon} />
                  <Text style={styles.transactionOptionText}>Or</Text>
                  <Image source={mastercard_logo} style={styles.CardIcon} />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.transactionOption,
                  mpesaIsSelected && styles.selectedOption,
                ]}
                onPress={() => {
                  setSelectCard(true);
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#39B54C', '#39B54C', '#80D08C']}
                  style={styles.linearGradient}>
                  <Text style={styles.transactionOptionText}>M-Pesa</Text>
                  <Image
                    source={MPesa}
                    tintColor={COLOR.white}
                    style={styles.CardIcon}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {selectCard ? (
          <View>
            <Text style={styles.TitleStyle}>Mpesa Information</Text>

            <PhoneNumber title="Phone Number*" />
          </View>
        ) : (
          <View>
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

              {emailVerify == true && (
                <Image style={styles.tickIcon} source={tick} />
              )}
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
          </View>
        )}
        <Buttons
          title="Save"
          container={styles.ButtonsStyle}
          onpress={() => navigation.navigate(SCREEN.StatusAndDetails)}
        />
      </ScrollView>
    </View>
  );
};
export default SelectedCardDetails;

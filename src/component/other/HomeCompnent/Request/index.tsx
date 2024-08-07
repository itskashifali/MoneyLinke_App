import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../../themes/StyleGuides';
import {QRCode} from '../../../../assest/Images';
import {HomeServeicsList} from '../../../../data/DummayData';
import HomeServicesList from '../../HomeServicesList';
import RBSheet from 'react-native-raw-bottom-sheet';
import TransferRequestSheet from '../../../core/TransferRequestSheet';
import React from 'react';

interface sendPropsType {
  QRButton?: () => void;
}

const Request = (props: sendPropsType) => {
  const SearchSheet = React.useRef<RBSheet>(null);
  const {QRButton} = props;

  const openAddCategorySheet = () => {
    SearchSheet.current?.open();
  };

  const closemonthlySheet = () => {
    SearchSheet.current?.close();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.QRcontainer} onPress={QRButton}>
        <Image style={styles.QRImage} source={QRCode} />
        <Text style={styles.QRText}>Request Money through QR-Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.QRcontainer}
        onPress={openAddCategorySheet}>
        <View style={styles.inputText}>
          <Text style={styles.seacrhText}>Search Contacts...</Text>
        </View>
        <Text style={styles.QRText}>Invite by username/email/phone number</Text>
      </TouchableOpacity>
      <Text style={styles.Services}>Services</Text>
      <View style={styles.containerList}>
        {HomeServeicsList.map((item, index) => (
          <HomeServicesList key={index} icon={item.icon} title={item.title} />
        ))}
      </View>
      <TransferRequestSheet refs={SearchSheet} />
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    backgroundColor: COLOR.white_1,
  },
  QRcontainer: {
    width: '90%',
    height: 70,
    backgroundColor: COLOR.white,
    borderRadius: 15,
    ...commonStyles.center,
    alignSelf: 'center',
    marginTop: '7%',
    borderColor: COLOR.darKGray_5,
  },
  QRImage: {width: 40, height: 40, resizeMode: 'contain'},
  QRText: {fontSize: 12, fontFamily: FONT.Inter_SemiBold, color: COLOR.black},
  inputText: {
    width: '65%',
    height: 30,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: COLOR.gray_4,
    borderColor: COLOR.darKGray_5,
    paddingHorizontal: '3%',
    justifyContent: 'center',
    marginVertical: '2%',
  },
  seacrhText: {
    fontSize: 10,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.DarkGary_6,
  },

  containerList: {
    alignSelf: 'center',
    backgroundColor: COLOR.white,
    borderRadius: 13,
    width: '90%',
    overflow: 'hidden',
  },
  Services: {
    fontSize: 15,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '30%',
    marginBottom: '3%',
  },
});

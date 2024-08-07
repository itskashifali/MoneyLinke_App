import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeServeicsList} from '../../../../data/DummayData';
import HomeServicesList from '../../HomeServicesList';
import {COLOR, FONT, commonStyles} from '../../../../themes/StyleGuides';
import {Copy, QRCode} from '../../../../assest/Images';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../../../../data/ScrName';
import RBSheet from 'react-native-raw-bottom-sheet';
interface sendPropsType {
  QRButton?: () => void;
}

const SharePayments = (props: sendPropsType) => {
  const navigation = useNavigation();
  const SearchSheet = React.useRef<typeof RBSheet>(null);
  const {QRButton} = props;
  // const openAddCategorySheet = () => {
  //   SearchSheet.current?.open();
  // };

  // const closemonthlySheet = () => {
  //   SearchSheet.current?.close();
  // };

  const serviceHandal = (e: any) => {
    console.log(e);
    if ((e = 1)) {
      navigation.navigate(SCREEN.Groups);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.QRcontainer} onPress={QRButton}>
        <Image style={styles.QRImage} source={QRCode} />
        <Text style={styles.QRText}>Request Money through QR-Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.QRcontainer}
        onPress={() => navigation.navigate(SCREEN.TransferMoney)}>
        <View style={styles.inputText}>
          <Text style={styles.seacrhText}>Search Contacts...</Text>
        </View>
        <Text style={styles.QRText}>Invite by username/email/phone number</Text>
      </TouchableOpacity>
      <View style={styles.QRcontainer}>
        <View style={styles.copyFiled}>
          <Text style={styles.seacrhText}>
            https://moneyLink.Alspencer’s payment
          </Text>
          <Image source={Copy} style={styles.Copyicon} />
        </View>
        <Text style={styles.linktext}>
          Share the link with your friends who don’t have MoneyLink
        </Text>
      </View>
      <View style={styles.containerList}>
        {HomeServeicsList.map((item, index) => (
          <HomeServicesList
            key={index}
            icon={item.icon}
            title={item.title}
            onpress={() => {
              serviceHandal(index);
            }}
          />
        ))}
      </View>
    </View>
  );
};
export default SharePayments;

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
    marginTop: '22%',
  },
  linktext: {fontSize: 8, fontFamily: FONT.Inter_SemiBold, color: COLOR.black},
  copyFiled: {
    height: 30,
    borderRadius: 7,
    alignSelf: 'center',
    backgroundColor: COLOR.gray_5,
    borderColor: COLOR.darKGray_5,
    paddingHorizontal: '3%',
    marginVertical: '2%',
    ...commonStyles.verticleView,
  },
  Copyicon: {width: 15, height: 15, resizeMode: 'contain'},
});

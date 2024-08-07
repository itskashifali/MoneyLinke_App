import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {
  DropArrow,
  ProfileImage,
  Users2,
  transactionArrow,
} from '../../assest/Images';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SCREEN from '../../data/ScrName';
import {useState} from 'react';
import Send from '../../component/other/HomeCompnent/Send';
import Request from '../../component/other/HomeCompnent/Request';
import SharePayments from '../../component/other/HomeCompnent/SharePayments';
import {COLOR} from '../../themes/StyleGuides';
import QRScanning from '../../component/core/QRScanning';
import QRcode from '../../component/core/QRcode';
import React from 'react';

const Home = (prop: any) => {
  const {navigation} = prop;
  const [selector, setSelector] = useState(0);
  const [QRScanner, setQRScanner] = useState(false);
  const [QRSCode, setQRCode] = useState(false);

  return (
    <GestureHandlerRootView style={styles.container}>
      <HomeHeader ProfileImage={ProfileImage} />

      {/* <ScrollView> */}
      <Text style={styles.balanceText}>
        Your Balance <Text style={styles.balnces}>$50,000.40 </Text>{' '}
      </Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>
          {selector == 0
            ? 'Send Money'
            : selector == 1
              ? 'Request Money'
              : 'Shared  Payment'}
        </Text>
      </View>
      <View style={styles.itemShare}>
        <TouchableOpacity
          onPress={() => {
            setSelector(0);
          }}>
          <Image
            style={{
              ...styles.addIcon,
              tintColor: selector == 0 ? COLOR.primary : COLOR.black,
            }}
            source={transactionArrow}
          />
          <Text
            style={{
              ...styles.itemText,
              color: selector == 0 ? COLOR.primary : COLOR.black,
            }}>
            Send
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelector(1);
          }}>
          <Image
            style={{
              ...styles.addIcon,
              tintColor: selector == 1 ? COLOR.primary : COLOR.black,
            }}
            source={DropArrow}
          />
          <Text
            style={{
              ...styles.itemText,
              color: selector == 1 ? COLOR.primary : COLOR.black,
            }}>
            Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelector(2);
          }}>
          <Image
            style={{
              ...styles.itemIcon,
              tintColor: selector == 2 ? COLOR.primary : COLOR.black,
            }}
            source={Users2}
          />
          <Text
            style={{
              ...styles.itemText,
              marginTop: 0,
              color: selector == 2 ? COLOR.primary : COLOR.black,
            }}>
            Share Payment
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Image source={QRCode} style={styles.QRImage} />

        <Text style={styles.QRCodeText}>
          Scan the QR-Code on a receiver’s device to send Money
        </Text> */}

      {selector == 0 ? (
        QRScanner == false ? (
          <Send
            QRButton={() => {
              setQRScanner(true);
            }}
          />
        ) : (
          <QRScanning
            cancle={() => {
              setQRScanner(false);
            }}
            NextPage={() => navigation.navigate(SCREEN.TransferMoney)}
          />
        )
      ) : selector == 1 ? (
        QRSCode == false ? (
          <Request
            QRButton={() => {
              setQRCode(true);
            }}
          />
        ) : (
          <QRcode
            onpress={() => {
              setQRCode(false);
            }}
          />
        )
      ) : (
        <SharePayments />
      )}
      {/* <HomeBottomSheet /> */}

      {/* </ScrollView> */}
    </GestureHandlerRootView>
  );
};
export default Home;

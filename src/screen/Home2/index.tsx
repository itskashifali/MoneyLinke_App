import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {ProfileImage, users} from '../../assest/Images';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SCREEN from '../../data/ScrName';
import {HomeServeicsList} from '../../data/DummayData';
import HomeServicesList from '../../component/other/HomeServicesList';
import CountryFlag from 'react-native-country-flag';
import React, {useState} from 'react';
import {COLOR} from '../../themes/StyleGuides';

const Home2 = (prop: any) => {
  const {navigation} = prop;
  const [verified, setVerified] = useState(false);
  const [modal, setModal] = useState(false);

  const transactionsList = [
    {
      id: 1,
      name: 'Alspencer Omondi',
      date: '07/01/2024',
      amount: 650.25,
    },
    {
      id: 2,
      name: 'Alspencer Omondi',
      date: '07/01/2024',
      amount: 650.25,
    },
    {
      id: 3,
      name: 'Alspencer Omondi',
      date: '07/01/2024',
      amount: 650.25,
    },
    {
      id: 4,
      name: 'Alspencer Omondi',
      date: '07/01/2024',
      amount: 650.25,
    },
  ];

  const showAlert = () => {
    Alert.alert(
      'Select Option',
      'Please choose one of the following options:',
      [
        {
          text: 'Individual Payment',
          onPress: () => navigation.navigate(SCREEN.SendMoney),
        },
        {
          text: 'Group Payment',
          onPress: () => navigation.navigate(SCREEN.Groups),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {verified ? (
        <HomeHeader ProfileImage={ProfileImage} />
      ) : (
        <View style={styles.Verifiedcontainer}>
          <Text style={styles.VerifiedText}>
            Your Account is not Verified{' '}
            <Text style={{color: COLOR.errorRed}}>**</Text>
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN.VerifiedScreen)}>
            <Text style={styles.UploadBtn}>Upload ID</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 0.9}}>
        <ScrollView
          style={{
            flex: 1,
          }}>
          {transactionsList.map((item, index) => (
            <View style={styles.transactionsList} key={index}>
              <View style={styles.transactionCountry}>
                <CountryFlag isoCode="ke" size={20} />
              </View>
              <View style={styles.transactionRow}>
                <Text
                  style={[
                    styles.transactionName,
                    {
                      fontSize: 15,
                    },
                  ]}>
                  {item.name}
                </Text>

                <Image
                  source={users}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                    marginLeft: '2%',
                  }}
                />
                <Text style={styles.transactionSent}>Sent</Text>
              </View>
              <View
                style={[
                  styles.transactionRow,
                  {
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                  },
                ]}>
                <Text style={styles.transactionName}>{item.date}</Text>
                <Text
                  style={[
                    styles.transactionSent,
                    {
                      color: 'black',
                    },
                  ]}>
                  {item.amount} USD
                </Text>
              </View>
              <View style={styles.transactionRow}>
                <TouchableOpacity
                  style={styles.transactionBtn}
                  onPress={() => navigation.navigate(SCREEN.MoneyLinkCard)}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                    }}>
                    Send Again
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.newTransfer} onPress={showAlert}>
        <Text style={{color: 'white', alignSelf: 'center'}}>
          Start a New Transfer
        </Text>
      </TouchableOpacity>
      <View style={styles.containerList}>
        {HomeServeicsList.map((item, index) => (
          <HomeServicesList
            key={index}
            icon={item.icon}
            title={item.title}
            onpress={() => {
              index == 0
                ? navigation.navigate(SCREEN.CustomerCare)
                : navigation.navigate(SCREEN.InviteFriend);
            }}
          />
        ))}
      </View>
      <View
        style={{
          marginTop: 'auto',
        }}></View>

      <Modal visible={modal} transparent>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              width: '90%',
              height: '25%',
              backgroundColor: COLOR.gray_1,
              borderRadius: 15,
              alignSelf: 'center',
              elevation: 10,
            }}>
            <Text style={styles.modalTitle}>
              Please Verify your account by Uploading your ID to start a New
              Transfer{' '}
            </Text>
            <TouchableOpacity
              style={styles.btnModal}
              onPress={() => setModal(false)}>
              <Text style={styles.textbtnModal}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};
export default Home2;

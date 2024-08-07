import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {Logout, ProfileImage} from '../../assest/Images';
import SattingTogalFiled from '../../component/core/SattingTogalFiled';
import InputText from '../../component/common/InputText';
import {useState} from 'react';
import {COLOR} from '../../themes/StyleGuides';
import AcountDeletModal from '../../component/core/AcountDeletModal';
import SCREEN from '../../data/ScrName';
import BottomBarNavigation from '../../navigation/BottomBarNavigation';
import React from 'react';
import LogoutModal from '../../component/core/LogoutModal';

const Setting = (prop: any) => {
  const {navigation} = prop;
  const [focus, setFocus] = useState(0);
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [logicModal, setLogicModal] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: 20,
        },
      ]}>
      <ScrollView>
        <HomeHeader ProfileImage={ProfileImage} />
        <Text style={styles.TitleStyle}>User Account Management</Text>
        <View>
          <InputText
            textfield={{borderColor: focus == 1 ? COLOR.primary : COLOR.white}}
            title={'Phone Number'}
            PlaceHolder={'Add Number'}
            onChangeText={(data: any) => {
              setNumber(data);
            }}
            KeyBoard={'numeric'}
            onFuces={() => {
              setFocus(1);
            }}
          />
          <TouchableOpacity
            style={{
              ...styles.udateBtton,
              backgroundColor: focus == 1 ? COLOR.primary : COLOR.gray_3,
            }}>
            <Text style={styles.UpdateText}>Update</Text>
          </TouchableOpacity>
          <InputText
            textfield={{borderColor: focus == 2 ? COLOR.primary : COLOR.white}}
            title={'Email'}
            PlaceHolder={'Email'}
            onChangeText={(data: any) => {
              setEmail(data);
            }}
            KeyBoard={'email-address'}
            onFuces={() => {
              setFocus(2);
            }}
          />
          <TouchableOpacity
            style={{
              ...styles.udateBtton,
              backgroundColor: focus == 2 ? COLOR.primary : COLOR.gray_3,
            }}>
            <Text style={styles.UpdateText}>Update</Text>
          </TouchableOpacity>
          <InputText
            textfield={{borderColor: focus == 3 ? COLOR.primary : COLOR.white}}
            title={'UserName'}
            PlaceHolder={'@UserName'}
            onChangeText={(data: any) => {
              setNumber(data);
            }}
            onFuces={() => {
              setFocus(3);
            }}
          />
          <TouchableOpacity
            style={{
              ...styles.udateBtton,
              backgroundColor: focus == 1 ? COLOR.primary : COLOR.gray_3,
            }}>
            <Text style={styles.UpdateText}>Update</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.TitleStyle}>Card Settings</Text>
        <SattingTogalFiled title={'Online Payment'} />
        <SattingTogalFiled title={'International Transfers'} />
        <SattingTogalFiled title={'International Transfers'} />
        <Text style={styles.TitleStyle}>Wallet Settings</Text>
        <SattingTogalFiled title={'Online Payment'} />
        <SattingTogalFiled title={'International Transfers'} />
        <SattingTogalFiled title={'International Transfers'} />
        <View style={styles.LogoutContainer}>
          <TouchableOpacity
            style={{
              ...styles.udateBtton,
              backgroundColor: COLOR.errorRed,
              alignSelf: 'flex-start',
            }}
            onPress={() => {
              setLogicModal(true);
            }}>
            <Text style={styles.UpdateText}>Log Out</Text>
          </TouchableOpacity>
          <Image source={Logout} style={styles.Logout} />
        </View>
        <Text style={styles.TitleStyle}>Delete Account</Text>
        <Text style={styles.discription}>
          Initiating a direct bank transfer within the app allows you to
          securely transfer funds directly from your PesaPap account to theirs,
          facilitating seamless transactions without intermediaries.
        </Text>
        <View style={styles.lastButtonView}>
          <TouchableOpacity
            style={{
              ...styles.udateBtton,
              backgroundColor: COLOR.primary,
            }}>
            <Text style={styles.UpdateText}>Pause Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.udateBtton,
              backgroundColor: COLOR.errorRed,
            }}
            onPress={() => {
              setDeleteModal(true);
            }}>
            <Text style={styles.UpdateText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal transparent visible={deleteModal}>
        <AcountDeletModal
          canCel={() => {
            setDeleteModal(false);
          }}
          Confiram={() => navigation.navigate(SCREEN.Login)}
        />
      </Modal>
      <Modal transparent visible={logicModal}>
        <LogoutModal
          canCel={() => {
            setLogicModal(false);
          }}
          Confiram={() => navigation.navigate(SCREEN.Login)}
        />
      </Modal>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
      </View>
    </View>
  );
};
export default Setting;

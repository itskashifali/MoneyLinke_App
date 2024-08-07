import {Image, Text, TouchableOpacity, View, Clipboard} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {ProfileImage, copyIcon} from '../../assest/Images';
import {useState} from 'react';
import {COLOR} from '../../themes/StyleGuides';
import Sent from '../../component/other/ProfileComponent/Sent';
import Received from '../../component/other/ProfileComponent/Received';
import AccountAnalytics from '../../component/other/ProfileComponent/AccountAnalytics';
import SCREEN from '../../data/ScrName';
import React from 'react';

const Profile = (prop: any) => {
  const {navigation} = prop;
  const [selector, setSelector] = useState(0);
  const handleCopyText = async () => {
    try {
      await Clipboard.setString('@phantasythenoob');
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Headers title="Your Profile" onpressBack={() => navigation.goBack()} />
      <Image source={ProfileImage} style={styles.ProfieImage} />
      <Text style={styles.nameStyle}>David King</Text>
      <View style={styles.copyContainer}>
        <Text style={styles.userName}>@phantasythenoob</Text>
        <TouchableOpacity onPress={handleCopyText}>
          <Image style={styles.copyIcon} source={copyIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.EditButton}
        onPress={() => navigation.navigate(SCREEN.EditProfile)}>
        <Text style={styles.EditButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.SelectorView}>
        <TouchableOpacity
          onPress={() => setSelector(0)}
          style={{
            ...styles.selctorButton,
            borderBottomColor: selector == 0 ? COLOR.primary : COLOR.white,
          }}>
          <Text
            style={{
              ...styles.selectorText,
              color: selector == 0 ? COLOR.primary : COLOR.black,
            }}>
            Sent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelector(1)}
          style={{
            ...styles.selctorButton,
            borderBottomColor: selector == 1 ? COLOR.primary : COLOR.white,
          }}>
          <Text
            style={{
              ...styles.selectorText,
              color: selector == 1 ? COLOR.primary : COLOR.black,
            }}>
            Received
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelector(2)}
          style={{
            ...styles.selctorButton,
            borderBottomColor: selector == 2 ? COLOR.primary : COLOR.white,
          }}>
          <Text
            style={{
              ...styles.selectorText,
              color: selector == 2 ? COLOR.primary : COLOR.black,
            }}>
            Account Analytics
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {selector == 0 ? (
          <Sent />
        ) : selector == 1 ? (
          <Received />
        ) : (
          <AccountAnalytics />
        )}
      </View>
    </View>
  );
};
export default Profile;

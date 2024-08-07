import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {AKImage, tick} from '../../assest/Images';
import Headers from '../../component/common/Headers';

const data = [
  {
    title: 'Available features',
    discription: 'All features are available for this account',
  },
  {
    title: 'Account information',
    discription: 'All features are available for this account',
  },
  {
    title: 'Change Password',
    discription: 'All features are available for this account',
  },
];
const AccountStatus = (prop: any) => {
  const {navigation} = prop;

  return (
    <View style={styles.container}>
      <Headers title="Account Status" onpressBack={() => navigation.goBack()} />
      <View style={styles.profileContainer}>
        <Image source={AKImage} style={styles.AKImages} />
        <Text style={styles.Date}>Joined August 18, 2023</Text>
      </View>

      {data.map(item => (
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.AvailableTet}>{item.title}</Text>
            <Text style={styles.textStyle}>{item.discription}</Text>
          </View>
          <Image source={tick} style={styles.tickStyle} />
        </View>
      ))}
    </View>
  );
};
export default AccountStatus;

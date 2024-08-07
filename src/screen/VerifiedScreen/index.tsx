import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {ProfileImage, right_arrow} from '../../assest/Images';

import SCREEN from '../../data/ScrName';

const data = [
  {title: 'Passport'},
  {title: 'Driver License'},
  {title: 'Residence Permit'},
  {title: 'Work Permit'},
  {title: 'Other form of ID '},
  {title: 'National ID Card'},
];

const VerifiedScreen = (prop: any) => {
  const {navigation} = prop;

  return (
    <View style={styles.container}>
      <HomeHeader
        title={'Verified'}
        ProfileImage={ProfileImage}
        onpressBack={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.textStyle}>
          We need to verify your government-issued ID and a photo of yourself
          with our trusted partner Onfido. Please choose a document below to
          submit.
        </Text>

        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listContainer}
            onPress={() =>
              navigation.navigate(SCREEN.VerifieIdTermAndCondition)
            }>
            <Text style={styles.listText}>{item.title}</Text>
            <Image style={styles.rightArrow} source={right_arrow} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default VerifiedScreen;

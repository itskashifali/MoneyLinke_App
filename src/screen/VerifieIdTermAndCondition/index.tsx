import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import React from 'react';
import Headers from '../../component/common/Headers';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';

const VerifieIdTermAndCondition = (props: any) => {
  const {navigation} = props;
  const handal = () => {
    navigation.navigate(SCREEN.VisionCamera);
  };
  return (
    <View style={styles.container}>
      <Headers title="Verify your identity" />
      <ScrollView>
        <Text style={styles.mainTitle}>
          Notice ,Release, and acceptence of Onfido,s Facial Scan and Voice
          Recording Policy and Terms of Service
        </Text>
        <Text style={styles.title}>Who is Onfido?</Text>
        <Text style={styles.discription}>
          Onfido Inc ("Onfido") provides identity verification services to
          corporate clients including the company thet owns or operaters the
          website or app thet you are using or is providing the services you
          wish to access ("Company")
        </Text>
        <Text style={styles.heightLight}>
          {' '}
          What checks will Onfido perform and how will my information be used ?
        </Text>
        <Text style={{...styles.discription, marginBottom: '5%'}}>
          Onfido Inc ("Onfido") provides identity verification services to
          corporate clients including the company thet owns or operaters the
          website or app thet you are using or is providing the services you
          wish to access ("Company")
        </Text>

        <Buttons
          title="Accept"
          container={styles.btn}
          onpress={() => handal()}
        />
        <Buttons title="Do not Accept" onpress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
};
export default VerifieIdTermAndCondition;

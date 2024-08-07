import {Image, Text, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {Cross, SuccessTick} from '../../assest/Images';
import {useEffect} from 'react';
import SCREEN from '../../data/ScrName';
import React from 'react';

const SucceseVerify = (props: any) => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate(SCREEN.Home2);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Headers
        title="Transfer Money"
        iconBack={Cross}
        onpressBack={() => navigation.goBack()}
      />
      <Image source={SuccessTick} style={styles.ProfieImage} />
      <Text style={styles.nameStyle}>Success Verify!</Text>
      <Text style={styles.discripton}>We received your documents </Text>
    </View>
  );
};
export default SucceseVerify;

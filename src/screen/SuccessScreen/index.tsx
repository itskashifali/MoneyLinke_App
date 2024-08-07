import {Image, Text, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {Cross, SuccessTick} from '../../assest/Images';
import {useEffect} from 'react';
import SCREEN from '../../data/ScrName';
import React from 'react';

const SuccessScreen = (props: any) => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREEN.Home2);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Headers title="Transfer Money" iconBack={Cross} onpressBack={()=>navigation.goBack()} />
      <Image source={SuccessTick} style={styles.ProfieImage} />
      <Text style={styles.nameStyle}>Success!</Text>
      <Text style={styles.discripton}>
        The transaction completed successfully
      </Text>
    </View>
  );
};
export default SuccessScreen;

import React, { useEffect, useState } from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {sunglasses, UserIcon} from '../../assest/Images';
import Buttons from '../../component/common/Buttons';
import {  handleOpenScannerSelfieCamera } from '../../component/other/Camera';

const TakeSelfiTerms = (prop: any) => {
  const {navigation} = prop;

  const handal=()=>{


    handleOpenScannerSelfieCamera(navigation)
  }
  return (
    <View style={styles.container}>
      <Headers
        title="Verify your identity"
        onpressBack={() => navigation.goBack()}
      />

      <Text style={styles.Title}>Take Selfie</Text>

      <Text style={{...styles.discription, marginLeft: '5%'}}>
        We,ll compare this with your document
      </Text>
      <View style={styles.discContainer}>
        <Image style={styles.icon} source={UserIcon} />
        <Text style={styles.discription}>
          Face forward and make sure your eyes are clearly visible
        </Text>
      </View>
      <View style={styles.discContainer}>
        <Image style={styles.icon} source={sunglasses} />
        <Text style={styles.discription}>Remove your glasses if necessary</Text>
      </View>
      <Buttons title='Take Selfie' container={styles.btn}  onpress={()=>handal()} />
    </View>
  );
};
export default TakeSelfiTerms;

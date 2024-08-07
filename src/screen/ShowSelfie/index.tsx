import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Headers from '../../component/common/Headers';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';

const ShowSelfie = (props: any) => {
  const {navigation} = props;

  const [imageUri, setImageUri] = useState(null);
  const [newUri, setNewUri] = useState(null);

  useEffect(() => {
    const getImageUri = async () => {
      try {
        const uri = await AsyncStorage.getItem('ImageSelfie-key');
        if (uri !== null) {
          setImageUri(uri);
        }
      } catch (e) {
        console.error('Error retrieving image URI from AsyncStorage:', e);
      }
    };

    getImageUri();
  }, [newUri]);

  return (
    <View style={styles.container}>
      <Headers
        title="Verify your identity"
        onpressBack={() => navigation.goBack()}
      />

      <Image source={{uri: imageUri}} style={styles.image} />

      <View style={styles.BtnContainer}>
        <Buttons
          title="Submit Photo"
          container={styles.btn}
          onpress={() => navigation.navigate(SCREEN.SucceseVerify)}
        />
      </View>
    </View>
  );
};
export default ShowSelfie;

import {Image, Text, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Headers from '../../component/common/Headers';
import Buttons from '../../component/common/Buttons';
import SCREEN from '../../data/ScrName';
import styles from './style';

const ShowImage = (props: any) => {
  const {navigation} = props;
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    const getImageUri = async () => {
      try {
        const uri = await AsyncStorage.getItem('ImageStore-key');
        console.log('Retrieved Image URI:', uri);
        if (uri !== null) {
          setImageUri(uri);
        }
      } catch (e) {
        console.error('Error retrieving image URI from AsyncStorage:', e);
      }
    };

    getImageUri();
  }, []);

  const handleRetakePhoto = () => {
    navigation.navigate(SCREEN.VisionCamera);
  };

  return (
    <View style={styles.container}>
      <Headers
        title="Verify your identity"
        onpressBack={() => navigation.goBack()}
      />
      {imageUri ? (
        <Image source={{uri: `file://${imageUri}`}} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
      <Text style={styles.Title}>
        Make Sure Your Details Are Clear And Unobstructed
      </Text>
      <View style={styles.BtnContainer}>
        <Buttons
          title="Submit Photo"
          container={styles.btn}
          onpress={() => navigation.navigate(SCREEN.TakeSelfiTerms)}
        />
        <Buttons title="Retake photo" onpress={handleRetakePhoto} />
      </View>
    </View>
  );
};

export default ShowImage;

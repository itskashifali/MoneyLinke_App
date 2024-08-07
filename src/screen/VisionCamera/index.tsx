import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {CameraPermission} from '../../component/other/CameraPermission';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import {Platform} from 'react-native';
import RNFS from 'react-native-fs';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SCREEN from '../../data/ScrName';
const VisionCamera = (prop: any) => {
  const {navigation} = prop;
  const [hasPermission, setHasPermission] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const devices = useCameraDevice('back');
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      console.log('Requesting camera permission...');
      const status = await Camera.requestCameraPermission();
      //   console.log("Camera permission status:", status);
      if (status === 'granted') {
        setHasPermission(true);
        await CameraPermission();
        setIsActive(true);
      } else {
        setHasPermission(false);
      }
    })();
  }, []);

  useEffect(() => {
    // console.log('Device:', devices);
    // console.log('Has Permission:', hasPermission);
    // console.log('Is Active:', isActive);
  }, [devices, hasPermission, isActive]);

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: 'balanced',
        });

        await AsyncStorage.removeItem('ImageStore-key');
        await AsyncStorage.setItem('ImageStore-key', photo.path);
        console.log('Photo taken:', photo);
        const filePath =
          Platform.OS === 'android' ? `file://${photo.path}` : photo.path;

        // Check if the file exists
        const fileExists = await RNFS.exists(filePath);
        if (!fileExists) {
          throw new Error('File does not exist');
        }

        // Perform text recognition
        const result = await TextRecognition.recognize(filePath);

        console.log('Text Recognition Result:', result);
        navigation.navigate(SCREEN.ShowImage);
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };

  if (devices == null) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      {hasPermission ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            isActive={isActive}
            device={devices}
            video={false}
            photo={true}
            ref={cameraRef}
          />
          <View style={styles.box} />
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <View style={styles.btnView} />
          </TouchableOpacity>
        </>
      ) : (
        <ActivityIndicator size="large" color={COLOR.white} />
      )}
    </View>
  );
};

export default VisionCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.black,
  },
  button: {
    width: 60,
    height: 60,
    borderColor: COLOR.white,
    borderWidth: 2,
    borderRadius: 30,
    ...commonStyles.center,
    alignSelf: 'center',
    position: 'absolute',
    bottom: '5%',
  },
  btnView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLOR.white,
  },
  box: {
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: COLOR.white,
    alignSelf: 'center',
  },
});

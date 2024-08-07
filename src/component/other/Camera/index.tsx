import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CameraPermission} from '../../../data/CameraPermission';
import SCREEN from '../../../data/ScrName';

export const handleOpenScannerCamera = async (
  navigation?: any,
  setNewUri?: any,
) => {
  await CameraPermission();

  const options = {
    cropping: true,
    width: 300,
    height: 200,
    includeBase64: true,
    mediaType: 'photo',
  };

  try {
    const image = await ImagePicker.openCamera(options);
    const imageUri = image.path;

    try {
      navigation.navigate(SCREEN.ShowImage);
      if (setNewUri) {
        setNewUri(imageUri);
      }
    } catch (e) {
      // console.error("Error saving data to AsyncStorage:", e);
    }
  } catch (error) {
    if (error.code !== 'E_PICKER_CANCELLED') {
      // console.error("Error opening camera:", error);
    }
  }
};

export const handleOpenScannerSelfieCamera = async (
  navigation?: any,
  setNewUri?: any,
) => {
  await CameraPermission();

  const options = {
    cropping: true,

    includeBase64: true,
    mediaType: 'photo',
    cameraType: 'front',
  };

  try {
    const image = await ImagePicker.openCamera(options);
    const imageUri = image.path;
    console.log('Image captured and cropped:', imageUri);

    try {
      await AsyncStorage.removeItem('ImageSelfie-key');
      await AsyncStorage.setItem('ImageSelfie-key', imageUri);
      console.log('Data saved to AsyncStorage');
      navigation.navigate(SCREEN.ShowSelfie);
      if (setNewUri) {
        setNewUri(imageUri);
      }
    } catch (e) {
      console.error('Error saving data to AsyncStorage:', e);
    }
  } catch (error) {
    if (error.code !== 'E_PICKER_CANCELLED') {
      console.error('Error opening camera:', error);
    }
  }
};

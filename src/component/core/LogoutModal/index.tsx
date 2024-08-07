import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';

interface DeleteModalProp {
  canCel?: () => void;
  Confiram?: () => void;
}

const LogoutModal = (prop: DeleteModalProp) => {
  const {canCel, Confiram} = prop;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>
          Are you sure you want to delete your account?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={Confiram}>
            <Text style={{...styles.ConfiramText, color: COLOR.black}}>
              Confirm
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={canCel}>
            <Text style={{...styles.ConfiramText, color: COLOR.errorRed}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LogoutModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.center,
  },
  modal: {
    width: '90%',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: COLOR.DarKGray_8,
    alignSelf: 'center',
    paddingVertical: '5%',
  },
  title: {
    fontSize: 17,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    width: '70%',
    flexWrap: 'wrap',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '10%',
    marginTop: '7%',
  },
  ConfiramText: {fontSize: 15, fontFamily: FONT.Inter_SemiBold},
});

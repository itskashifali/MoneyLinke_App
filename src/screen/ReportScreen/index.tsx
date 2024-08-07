import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Headers from '../../component/common/Headers';
import { PhoneIcon,  tick } from '../../assest/Images';
import styles from './styles';
import { COLOR } from '../../themes/StyleGuides';

const ReportScreen = (prop: any) => {
  const { navigation } = prop;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSendPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Headers
        title="Report a problem"
        onpressBack={() => navigation.goBack()}
      />

      <View style={styles.PhoneContainer}>
        <Image source={PhoneIcon} style={styles.phoneIcon} />
        <Text style={styles.PhoneText}>Phone</Text>
      </View>
      <View style={styles.numbers}>
        <Text style={styles.PhoneText}>US call Call </Text>
        <Text style={styles.numberText}>+1 909 111 2233</Text>
      </View>
      <View style={styles.numbers}>
        <Text style={styles.PhoneText}>US call Call </Text>
        <Text style={styles.numberText}>+254 712 345 678</Text>
      </View>
      <TextInput
        style={styles.report}
        placeholderTextColor={COLOR.black}
        multiline
        placeholder="Add the Report"
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
        <View style={styles.btnView} >
        <Text style={styles.btnText}>Send</Text>

          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : success && (
            <Image source={tick} style={styles.tickIcon} />
          ) }
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;

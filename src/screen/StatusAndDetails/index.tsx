import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {BackArrow, linkmobile} from '../../assest/Images';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import Status from '../../component/core/Status';
import Details from '../../component/core/Details';
import SCREEN from '../../data/ScrName';

const StatusAndDetails = (props: any) => {
  const {navigation} = props;
  const [select, setSelect] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.firstCOntainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{...commonStyles.horizontalView}}>
          <Image style={styles.HeaderIcon} source={BackArrow} />
          <Text style={styles.BackText}>Back</Text>
        </TouchableOpacity>

        <View>
          <Image source={linkmobile} style={styles.mobile} />
          <Text style={styles.title}>
            Sending 40,000,000.00 Kes to Alspencer Omondi
          </Text>
          <TouchableOpacity style={styles.btnpress} onPress={()=>navigation.navigate(SCREEN.SuccessScreen)} >
            <Text style={styles.btnText}>In progress</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondCOntainer}></View>
      <View style={styles.Card}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={{
              ...styles.selectbtn,
              backgroundColor: select == 0 ? COLOR.white : COLOR.gray_6,
            }}
            onPress={() => setSelect(0)}>
            <Text
              style={{
                ...styles.text,
                color: select == 0 ? COLOR.primary : COLOR.black,
              }}>
              Status
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.selectbtn,
              backgroundColor: select == 1 ? COLOR.white : COLOR.gray_6,
            }}
            onPress={() => setSelect(1)}>
            <Text
              style={{
                ...styles.text,
                color: select == 1 ? COLOR.primary : COLOR.black,
              }}>
              Status
            </Text>
          </TouchableOpacity>
        </View>
        {select==0?<Status/>:<Details/>}
      </View>
    </View>
  );
};
export default StatusAndDetails;

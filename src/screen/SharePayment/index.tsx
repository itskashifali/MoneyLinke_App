import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './style';
import Headers from '../../component/common/Headers';
import {leftArrow} from '../../assest/Images';
import Buttons from '../../component/common/Buttons';
import {data} from '../../data/DummayData';
import PaymentList from '../../component/other/PaymentList';

export default function SharePayment() {
  return (
    <View style={styles.containar}>
      <Headers iconBack={leftArrow} title="Share Payment" />
      <Text style={styles.Discription}>
        What kind of expense would you like to share?
      </Text>
      <View style={styles.ListContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <PaymentList
              title={item.title}
              discription={item.discription}
              image={item.image}
            />
          )}
        />
      </View>

      <View style={styles.BottomView}>
        <Buttons title="Continue" />
      </View>
    </View>
  );
}

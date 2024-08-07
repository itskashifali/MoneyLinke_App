import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';
import {users} from '../../../assest/Images';
import {PaymentListProp} from '../../../data/PropType';
interface propTyp {
  discription: any;
  title?: string;
  image?: any;
}
export default function PaymentList(props: PaymentListProp) {
  const {title, discription, image} = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.discription}>{discription}</Text>
      </View>
      <Image source={image} style={styles.Icon} />
    </View>
  );
}

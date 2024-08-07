import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeListComponent from '../../HomeList';
import {ProfileList} from '../../../../data/DummayData';
import {COLOR, FONT, commonStyles} from '../../../../themes/StyleGuides';
import {DropDownIcon} from '../../../../assest/Images';
import React from 'react';

const Sent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Containers}>
        <Text style={styles.TransectionText}>Transaction Date</Text>
        <Image style={styles.IconStyle} source={DropDownIcon} />
      </TouchableOpacity>
      <ScrollView>
        {ProfileList.map((item, index) => (
          <HomeListComponent
            containerStyle={styles.ListContainer}
            key={index}
            index={index}
            title={item.title}
            image={item.image}
            balance={item.balance}
            transferId={item.transactionId}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default Sent;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TransectionText: {
    fontSize: 10,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.primary,
  },
  IconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'center',
    tintColor: COLOR.primary,
    bottom: 2,
  },
  Containers: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '5%',
    marginTop: '3%',
  },
  ListContainer: {paddingHorizontal: '3.5%'},
});

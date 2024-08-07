import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/common/HomeHeader';
import {ProfileImage, RightArrow} from '../../assest/Images';
import {userHelpList} from '../../data/DummayData';
import SCREEN from '../../data/ScrName';
import BottomBarNavigation from '../../navigation/BottomBarNavigation';
import React from 'react';

const UsersHelp = (prop: any) => {
  const {navigation} = prop;
  const handalNavigation = (item: any) => {
    if (item == 0) {
      navigation.navigate(SCREEN.ReportScreen);

    } else if (item == 1) {
      navigation.navigate(SCREEN.AccountStatus);
    } else {
      navigation.navigate(SCREEN.CustomerCare);
    }
  };

  return (
    <View style={styles.container}>
      <HomeHeader ProfileImage={ProfileImage} />
      <View>
        <FlatList
          data={userHelpList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => handalNavigation(index)}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <Image style={styles.IconStyle} source={RightArrow} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {/* <BottomBarNavigation selectedScreen={'UsersHelp'} /> */}
      </View>
    </View>
  );
};
export default UsersHelp;

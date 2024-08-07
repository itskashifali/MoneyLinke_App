import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {Chat} from '../../assest/Images';
import Buttons from '../../component/common/Buttons';
import {GroupList, notifications} from '../../data/DummayData';
import SCREEN from '../../data/ScrName';
import React from 'react';

const Groups = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Headers
        title="Groups"
        rightIcon={Chat}
        onpressBack={() => navigation.goBack()}
      />

      <FlatList
        data={GroupList}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.ListContainer}
            onPress={() =>
              navigation.navigate(SCREEN.GroupChat, {title: item.title})
            }>
            <View style={styles.imageContainer}>
              <Image style={styles.listProfile} source={item.icon} />
              <ScrollView horizontal style={styles.listprofile}>
                {notifications.map(({image}, index) => {
                  return (
                    <View
                      key={index}
                      style={{marginLeft: index == 0 ? 0 : -15, zIndex: 1}}>
                      <Image source={image} style={styles.profile} />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.titleList}>{item.title}</Text>
                <Text style={styles.NoList}>{item.balance}</Text>
              </View>

              {item.sms ? (
                <View style={styles.smsContainer}>
                  <Text style={styles.smstext}>{item.sms}</Text>
                </View>
              ) : (
                <Text style={styles.day}>{item.day}</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.BottomView}>
        <Buttons
          title="Continue"
          container={styles.ButttonStyle}
          tiileStyle={styles.ButtonTitle}
        />
      </View>
    </View>
  );
};
export default Groups;

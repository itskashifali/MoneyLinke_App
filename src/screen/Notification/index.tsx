import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {NotificationList, notifications} from '../../data/DummayData';
import React from 'react';

const Notification = (prop: any) => {
  const {navigation} = prop;

  return (
    <View style={styles.container}>
      <Headers title="Notifications" onpressBack={() => navigation.goBack()} />

      <FlatList
        data={NotificationList}
        renderItem={({item}) => (
          <View style={styles.list}>
            <View style={styles.imageContainer}>
              <Image style={styles.listProfile} source={item.profile} />
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

            <View>
              <Text style={styles.titleList}>{item.title}</Text>
              <Text style={styles.NoList}>
                {item.notifications} Notifications
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Notification;

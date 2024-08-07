import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Headers from '../../component/common/Headers';
import {MesgData} from '../../data/DummayData';
import {useState} from 'react';
import {RightArrow, emojysmile, gelleres} from '../../assest/Images';
import {COLOR} from '../../themes/StyleGuides';
import React from 'react';

const CustomerCare = (props: any) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Headers title="Customer Care" onpressBack={() => navigation.goBack()} />
      <ScrollView>
        <FlatList
          data={MesgData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ListContainer}
          renderItem={({item, index}) => {
            const isLastSender =
              index === MesgData?.length - 1 && item?.type === 'sender';
            return (
              <View
                style={[
                  styles.MessageCard,
                  {
                    flexDirection:
                      item?.type === 'receiver' ? 'row' : 'row-reverse',
                  },
                ]}
                key={index}>
                {item.type == 'receiver' && (
                  <Image source={item.image} style={styles.profile} />
                )}

                <View
                  style={
                    item?.type === 'receiver'
                      ? styles.MainCOntainer
                      : styles.mainContainer2
                  }>
                  {item.type == 'receiver' && (
                    <Text style={styles.name}>{item.name}</Text>
                  )}
                  {item.sms == 'send' ? (
                    <TouchableOpacity
                      style={
                        item?.type === 'receiver'
                          ? styles.MessageContainer
                          : styles.MesgSenderContainer
                      }
                      onPress={() => setModalVisible(true)}>
                      <Text
                        style={
                          item?.type === 'receiver'
                            ? styles.MessageLabel
                            : styles.MessageLabel2
                        }>
                        {item?.text}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.typingView}>
                      <View style={styles.typing} />
                      <View style={styles.typing} />
                      <View style={styles.typing} />
                    </View>
                  )}

                  {item.sms == 'send' && (
                    <Text
                      style={
                        item?.type === 'receiver' ? styles.time : styles.time1
                      }>
                      {item.time}
                    </Text>
                  )}
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
      <View style={styles.BottomContainer}>
        <Image style={styles.icon} source={emojysmile} />
        <TextInput
          placeholder={'Reply...'}
          style={styles.InputStyle}
          placeholderTextColor={COLOR.DarkGray_2}
        />
        <View style={styles.gallerieContainer}>
          <Image style={styles.GellerieIcon} source={gelleres} />
          <View style={styles.sendsmsContainer}>
            <Image style={styles.RightIcon} source={RightArrow} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CustomerCare;

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
import {useRoute, RouteProp} from '@react-navigation/native';
import {GroupMembers, MesgData} from '../../data/DummayData';
import {useState} from 'react';
import {COLOR} from '../../themes/StyleGuides';
import {RightArrow, emojysmile, gelleres} from '../../assest/Images';
import SCREEN from '../../data/ScrName';
import React from 'react';

type GroupChatRouteParams = {
  title: string;
};

type GroupChatRouteProp = RouteProp<{params: GroupChatRouteParams}, 'params'>;

export default function GroupChat(props: any) {
  const route = useRoute<GroupChatRouteProp>();
  const {navigation} = props;
  const {title} = route.params;
  const headertitle = `${title} Group Payment`;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Headers
        title={headertitle}
        view={{width: 0}}
        onpressBack={() => navigation.goBack()}
      />

      <View style={styles.comtainerBalance}>
        <View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>balance</Text>
            <Text style={styles.amout}>$500</Text>
          </View>
          <Text style={styles.Admins}>Admins Account</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(SCREEN.GroupPayment)}>
          <Text style={styles.ButtonText}>Group Members</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.memberListContaioner}>
        <FlatList
          horizontal
          data={GroupMembers}
          renderItem={({item}) => (
            <View style={styles.Memberlist}>
              <View style={styles.RecentListContainer}>
                <Image style={styles.ProfileImage} source={item.icon} />
                <Text style={styles.RecentTitleList}>{item.title}</Text>
              </View>
              {item.status && <Text style={styles.Status}>{item.status}</Text>}
            </View>
          )}
        />
      </View>

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
      <View style={styles.ButtonPayContainer}>
        <TouchableOpacity
          style={{...styles.Buttons, backgroundColor: COLOR.primary}}>
          <Text style={{...styles.ButtonsText, color: COLOR.gray_1}}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.Buttons, backgroundColor: COLOR.gray_1}}>
          <Text style={{...styles.ButtonsText, color: COLOR.primary}}>
            Request
          </Text>
        </TouchableOpacity>
      </View>

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
}

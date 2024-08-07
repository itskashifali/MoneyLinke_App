import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import InputText from '../../common/InputText';
import {search} from '../../../assest/Images';
import {HomeRecenTranfer, HomeRecentList} from '../../../data/DummayData';

interface PropType {
  refs?: any;
  onPressNavigate?: () => void;
  title?: string;
}

const TransferRequestSheet = (Prop: PropType) => {
  const {refs, onPressNavigate, title} = Prop;

  return (
    <RBSheet
      ref={refs}
      customStyles={{
        wrapper: {},
        container: {
          height: 550,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLOR.gray_1,
        },
      }}>
      <View style={styles.draggableIcon}>
        <View style={styles.line} />
      </View>
      <InputText
        PlaceHolder="Search"
        Icon={search}
        textfield={styles.textinput}
      />
      <ScrollView>
        <View style={styles.RecenetContainer}>
          <Text style={styles.RecentTitle}>Recent Transfers</Text>
          <View style={{alignItems: 'center'}}>
            <FlatList
              horizontal
              data={HomeRecentList}
              renderItem={({item}) => (
                <View style={styles.RecentListContainer}>
                  <Image style={styles.ProfileImage} source={item.icon} />
                  <Text style={styles.RecentTitleList}>{item.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.RecenetContainer}>
          <View>
            {HomeRecenTranfer.map((item: any, index) => (
              <View style={styles.ListContainer} key={index}>
                <Image style={styles.ProfileImage} source={item.icon} />
                <Text style={{...styles.RecentTitleList, marginLeft: '8%'}}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </RBSheet>
  );
};

export default TransferRequestSheet;

const styles = StyleSheet.create({
  draggableIcon: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  line: {
    width: '30%',
    height: 7,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  textinput: {
    borderColor: COLOR.darKGray_5,
    borderRadius: 12,
    width: '81%',
    alignSelf: 'center',
    marginLeft: 0,
  },
  RecenetContainer: {
    width: '80%',
    backgroundColor: COLOR.white,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: '4%',
    paddingTop: '3%',
    paddingBottom: '5%',
  },
  RecentTitle: {
    fontSize: 16,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black_1,
    marginTop: '2%',
    marginBottom: '4%',
    marginLeft: '5%',
  },
  ProfileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  RecentListContainer: {
    marginHorizontal: 4,
    alignItems: 'center',
  },
  RecentTitleList: {
    fontSize: 14,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black_1,
  },
  ListContainer: {
    marginHorizontal: 4,
    ...commonStyles.horizontalView,
    paddingHorizontal: '5%',
    height: 60,
  },
});

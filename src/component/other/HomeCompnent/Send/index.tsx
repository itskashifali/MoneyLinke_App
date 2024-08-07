import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {QRCode} from '../../../../assest/Images';
import {COLOR, FONT, commonStyles} from '../../../../themes/StyleGuides';
import {HomeRecentList, HomeServeicsList} from '../../../../data/DummayData';
import HomeServicesList from '../../HomeServicesList';
import React from 'react';
import TransferRequestSheet from '../../../core/TransferRequestSheet';
import RBSheet from 'react-native-raw-bottom-sheet';
interface sendPropsType {
  QRButton?: () => void;
}
const Send = (props: sendPropsType) => {
  const {QRButton} = props;
  const SearchSheet = React.useRef<RBSheet>(null);

  const openAddCategorySheet = () => {
    SearchSheet.current?.open();
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.QRcontainer} onPress={QRButton}>
        <Image style={styles.QRImage} source={QRCode} />
        <Text style={styles.QRText}>Receive Money through QR-Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.QRcontainer}
        onPress={() => {
          openAddCategorySheet();
        }}>
        <View style={styles.inputText}>
          <Text style={styles.seacrhText}>Search Contacts...</Text>
        </View>
        <Text style={styles.QRText}>Receive Money through QR-Code</Text>
      </TouchableOpacity>

      <View style={styles.RecenetContainer}>
        <Text style={styles.RecentTitle}>Recent Receipts</Text>
        <View>
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
        <Text style={styles.RecentTitle}>Add New Contact</Text>
      </View>

      <View style={styles.containerList}>
        {HomeServeicsList.map((item, index) => (
          <HomeServicesList key={index} icon={item.icon} title={item.title} />
        ))}
      </View>
      <TransferRequestSheet refs={SearchSheet} />
    </ScrollView>
  );
};
export default Send;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    backgroundColor: COLOR.white_1,
  },
  QRcontainer: {
    width: '90%',
    height: 70,
    backgroundColor: COLOR.white,
    borderRadius: 15,
    ...commonStyles.center,
    alignSelf: 'center',
    marginTop: '3%',
    borderColor: COLOR.darKGray_5,
  },
  QRImage: {width: 40, height: 40, resizeMode: 'contain'},
  QRText: {fontSize: 12, fontFamily: FONT.Inter_SemiBold, color: COLOR.black},
  inputText: {
    width: '65%',
    height: 30,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: COLOR.gray_4,
    borderColor: COLOR.darKGray_5,
    paddingHorizontal: '3%',
    justifyContent: 'center',
    marginVertical: '2%',
  },
  seacrhText: {
    fontSize: 10,
    fontFamily: FONT.Inter_Regular,
    color: COLOR.DarkGary_6,
  },
  containerList: {
    alignSelf: 'center',
    backgroundColor: COLOR.white,
    borderRadius: 13,
    width: '90%',
    overflow: 'hidden',
    marginTop: '5%',
  },

  RecenetContainer: {
    width: '90%',
    height: 150,
    backgroundColor: COLOR.white,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: '4%',
    paddingHorizontal: '7%',
    // alignItems:"center"
  },
  RecentTitle: {
    fontSize: 14,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black_1,
    marginTop: '2%',
    marginBottom: '4%',
  },
  ProfileImage: {width: 40, height: 40, resizeMode: 'contain'},
  RecentListContainer: {...commonStyles.center, marginHorizontal: 4},
  RecentTitleList: {
    fontSize: 10,
    fontFamily: FONT.Inter_Medium,
    color: COLOR.black_1,
  },
});

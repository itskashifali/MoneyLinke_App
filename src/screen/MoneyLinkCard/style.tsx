import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  sentAmountContainer: {
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingTop: 5,
    marginTop: '10%',
  },
  sending: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  sendingText: {color: COLOR.black},
  sendingInput: {
    maxWidth: 50,
  },
  transactionOptionsContainer: {
    marginTop: 20,
    width: '90%',
  },
  transactionOptionsText: {
    marginLeft: 20,
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  transactionOptions: {
    width: '100%',
    // justifyContent: "space-around",
    marginLeft: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  plusIcon: {width: 15, height: 15, resizeMode: 'contain',paddingHorizontal:"4%"},
  AddBtn: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    ...commonStyles.verticleView,
    borderRadius:10,
    marginTop:"7%"
  },
  AddText: {fontSize: 12, fontFamily: FONT.Inter_SemiBold, color: COLOR.white},
});

export default styles;

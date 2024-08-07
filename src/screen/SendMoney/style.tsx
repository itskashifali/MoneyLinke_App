import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    backgroundColor: COLOR.white_1,
  },
  balnces: {fontFamily: FONT.Montserrat_Bold},
  balanceText: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_Medium,
    color: COLOR.DarkGray_2,
    marginLeft: '5%',
  },
  balance: {
    fontSize: 30,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.primary,
  },
  AddButton: {
    width: 100,
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    ...commonStyles.verticleView,
    paddingHorizontal: '2%',
  },
  SmallText: {fontSize: 20, fontFamily: FONT.Inter_Bold, color: COLOR.black},
  addText: {fontSize: 12, fontFamily: FONT.Inter_SemiBold, color: COLOR.white},
  addIcon: {width: 12, height: 12, resizeMode: 'contain', alignSelf: 'center'},
  balanceContainer: {
    ...commonStyles.verticleView,
    marginTop: '3%',
    paddingHorizontal: '5%',
  },
  itemShare: {
    ...commonStyles.verticleView,
    marginTop: '8%',
    paddingHorizontal: '13%',
    width: '100%',
  },
  itemText: {
    fontSize: 12,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.black,
    marginTop: '4%',
  },
  itemIcon: {width: 20, height: 18, resizeMode: 'stretch', alignSelf: 'center'},
  QRImage: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
  },
  QRCodeText: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.black,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  SheetContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: COLOR.gray_2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  line: {
    width: 55,
    height: 7,
    backgroundColor: COLOR.DarkGray,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '5%',
  },
  SeeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  RecentText: {
    fontSize: 15,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.black,
  },
  SeeAllText: {
    fontSize: 12,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.DarkGray_3,
  },
  ListContainer: {
    width: '90%',
    backgroundColor: COLOR.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    alignSelf: 'center',
    marginTop: '5%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 60,
    color:COLOR.black
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color:COLOR.black
  },
  countrySearch: {
    marginTop: 10,
  },
  countryOptions: {
    position: 'absolute',
    top: 45,
    width: '100%',
    zIndex: 99,
    backgroundColor: 'white',
  },
  searchOption: {},
  countryFlag: {
    position: 'absolute',
    top: 10,
    marginLeft: 30,
    color:COLOR.black
  },
  countryInput: {},
  countryTitle: {
    marginLeft: 20,
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
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
  },
  sending: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  sendingText: {color:COLOR.black},
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
  transactionOption: {
    width: 150,
    height: 70,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    marginBottom: 10,
  },
  transactionOptionText: {
    color: 'white',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    ...commonStyles.verticleView
  },
  continueBtn: {
    width: '90%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A13A3',
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  continueBtnText: {
    color: 'white',
  },
  slidingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  slidingPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 450, // Adjust the height as needed
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  panelText: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
  },
  panelInputTitle: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
    color: 'black',
    marginBottom: 5,
  },
  panelInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 5,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 15,
  },
  panelInputContainer: {
    marginBottom: 0,
  },
  panelInputContainerFlex: {
    flexDirection: 'row',
  },
  panelInputHalf: {},
  panelInputSmall: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 16,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 15,
    marginLeft: 20,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: 'gray',
  },
  toggleButton: {
    borderRadius: 5,
    margin: 10,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  toggleLinearGradient: {
    padding: 15,
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  mpesIcon:{width:50,height:50,resizeMode:"contain"}
});

export default styles;

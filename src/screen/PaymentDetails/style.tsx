import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    backgroundColor: COLOR.white_1,
  },
  groupToggle: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    marginLeft: 20,
  },
  groupToggleText: {
    color: 'black',
    fontWeight: '500',
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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  transactionOption: {
    width: 150,
    height: 70,
    borderRadius: 10,
    overflow: 'hidden',
  },
  transactionOptionText: {
    color: 'white',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    justifyContent: 'center',
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
});

export default styles;

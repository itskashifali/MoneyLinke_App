import {StyleSheet} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  profile: {width: 150, height: 150, alignSelf: 'center'},
  textinputContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    marginLeft: '15%',
    marginTop: '8%',
    marginBottom: '3%',
  },
  Textinputs: {
    fontSize: 24,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.gray_3,
    width: '30%',
  },
  DollarText: {fontSize: 24, fontFamily: FONT.Inter_Bold, color: COLOR.gray_3},
  CollectiveText: {
    fontSize: 16,
    fontFamily: FONT.Montserrat_SemiBold,
    color: COLOR.gray_3,
    alignSelf: 'center',
    marginTop: '5%',
  },
  BuyingText: {
    fontSize: 24,
    fontFamily: FONT.Inter_Bold,
    color: COLOR.black,
    alignSelf: 'center',
  },
  costGoalContainer: {...commonStyles.horizontalView, marginLeft: '10%'},
  Goal: {
    fontSize: 14,
    fontFamily: FONT.Inter_SemiBold,
    color: COLOR.primary_1,
    marginLeft: '3%',
  },
  progreeBar: {marginTop: '3%', alignSelf: 'center'},
  ButtonStyle: {marginBottom: '15%', marginTop: '5%'},
});

export default styles;

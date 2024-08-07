import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, FONT } from '../../themes/StyleGuides';

const styles = StyleSheet.create({
    container: {
        ...commonStyles.mainContainer,
      },
      image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '7%',
        borderRadius:200
      },
      
      BtnContainer:{position:"absolute",bottom:"10%",width:"100%"},
      btn:{marginVertical:'5%'}
});

export default styles;

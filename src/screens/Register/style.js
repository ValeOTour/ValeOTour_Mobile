import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import reset from '../../styles/reset';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: reset.padTop,
      alignItems: 'center',
    },

    header:{
      flexDirection: 'row',
      paddingTop: 10,
      paddingHorizontal: reset.padH,
      // backgroundColor: 'red',
      width: '100%',
      alignItems: 'center',
      gap: 5
    },

    btnHeaderText:{
      color: colors.lightPurple,
      fontSize: 22,
      fontFamily: fonts.bold
    },

    loginPrhase:{
      paddingTop: 50,
      fontFamily: fonts.semiBold,
      fontSize: 16,
      color: colors.mediumGray,
    },

    containerLogo:{
      width: '100%',
      height: 120,
      justifyContent: 'center',
      alignItems: 'center'
    },

    containerForm:{
      paddingTop: 80,
      paddingHorizontal: reset.padH,
      width: '100%',
      gap: 20
    },

    containerInput:{
      gap: 3
    },

    labelFormInput:{
      color: colors.formLabelColor,
      fontFamily: fonts.bold,
      fontSize: 12
    },

    inputTextForm:{
      width: '100%',
      height: 58,
      borderColor: colors.formLabelColor,
      borderWidth: 2,
      borderRadius: 10,
      paddingLeft: 20,
      fontFamily: fonts.bold,
    },

    btnLogin:{
      marginTop: 50,
      width: '80%',
      height: 58,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.darkBlue
    },

    btnLoginText:{
      fontSize: 14,
      fontFamily: fonts.bold,
      color: colors.white
    },




})



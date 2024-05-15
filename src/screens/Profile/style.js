import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import reset from "../../styles/reset";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },

    containerHeader: {
        width: '100%',
        paddingHorizontal: reset.padH,
        paddingTop: reset.padTop,
        alignItems: 'flex-end'
    },

    btnSettings: {
        paddingTop: 10
    },

    containerUserProfile: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },


    imageBorder: {
        width: 84,
        height: 84,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.mainColor,
        alignItems: 'center',
        justifyContent: 'center'
    },

    userImage: {
        width: 74,
        height: 74,
        backgroundColor: colors.mainColor,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    userNameText: {
        fontFamily: fonts.semiBold,
        fontSize: 18,
        color: colors.textColor,
        paddingTop: 16
    },

    userTypeText: {
        paddingHorizontal: 18,
        paddingVertical: 3,
        backgroundColor: '#BBBBBB',
        borderRadius: 100,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: fonts.bold,
        fontSize: 12,
        color: '#545454',
        marginTop: 7
    },

    containerUserContent: {
        paddingHorizontal: reset.padH,
        paddingTop: reset.padTop,
        width: '100%',
    },

    profileSectionTitle: {
        fontFamily: fonts.semiBold,
        fontSize: 18,
        color: colors.textColor,
        paddingTop: reset.padTop
    },

    containerSectionContent: {
        width: '100%',
        minHeight: 60,
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 7,
        elevation: 1,
        marginTop: 18,
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 20,
    },

    userInfoTitle:{
        fontFamily: fonts.medium,
        fontSize: 12,
        color: colors.textColor
    },

    userInfoText:{
        fontFamily: fonts.medium,
        fontSize: 12,
        color: colors.lightGray
    },

    containerCardScheduling:{
        width: '100%',
        paddingVertical: 18,
        gap: 10
    },

    cardScheduling:{
        width: '100%',
        height: 62,
        backgroundColor: colors.white,
        elevation: 1,
        borderRadius: 7,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        gap: 16
    },

    cardSchedulingIcon:{
        width: 38,
        height: 38,
        backgroundColor: colors.lightBlue,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardSchedulingContent:{
        rowGap: 3
    }
})
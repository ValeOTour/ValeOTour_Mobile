import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import reset from "../../styles/reset";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        position: 'relative',
    },

    headerChat: {
        width: '100%',
        backgroundColor: '#EDEEF6',
        paddingTop: reset.padTop,
        paddingHorizontal: reset.padH,
        position: 'absolute',
        top: 0,
        zIndex: 100
    },

    headerChatContent: {
        paddingTop: 10,
        paddingBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerChatNameText: {
        fontFamily: fonts.medium,
        fontSize: 15,
        color: colors.brighterBlue
    },

    containerMain: {
        width: '100%',
        height: '100%',
        paddingBottom: 12,
    },

    //

    messagesArea: {
        width: '100%',
        marginTop: 140,
        paddingHorizontal: reset.padH,
    },

    containerReceivedMessage: {
        rowGap: 7,
        marginBottom: 12,
        alignItems: 'flex-start',
    },

    messageReceivedArea: {
        maxWidth: '78%',
        minHeight: 10,
        padding: 10,
        backgroundColor: colors.white,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
        position: 'relative'
    },

    messageReceived: {
        maxWidth: '100%',
        fontSize: 12,
        color: colors.mediumGray,
        fontFamily: fonts.medium,
        textAlign: 'left',
        paddingBottom: 14
    },

    messageReceivedHour: {
        fontSize: 7,
        color: colors.textColor,
        fontFamily: fonts.semiBold,
        position: 'absolute',
        bottom: 2,
        right: 10
    },

    // Sent Messages


    containerSentMessage: {
        rowGap: 7,
        marginBottom: 12,
        alignItems: 'flex-end',
    },
    messageSentArea: {
        maxWidth: '78%',
        minHeight: 10,
        padding: 10,
        backgroundColor: colors.mainColor,
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
        position: 'relative'
    },

    messageSent: {
        maxWidth: '100%',
        fontSize: 12,
        color: colors.white,
        fontFamily: fonts.medium,
        textAlign: 'left',
        paddingBottom: 19
    },

    messageSentHour: {
        fontSize: 7,
        color: colors.white,
        fontFamily: fonts.semiBold,
        position: 'absolute',
        bottom: 5,
        right: 10
    },

    scheduleText: {
        minWidth: '100%',
        padding: 10,
        backgroundColor: colors.brighterBlue,
        marginBottom: 10,
        fontSize: 12,
        color: colors.white,
        fontFamily: fonts.medium,
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
    },

    btnShowMoreSchedule: {
        minWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    btnShowMoreText: {
        fontSize: 12,
        color: '#8B90BE',
        fontFamily: fonts.medium,
    },

    //

    containerInputChat: {
        width: '100%',
        paddingHorizontal: reset.padH,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputMessage: {
        width: '85%',
        height: 47,
        borderRadius: 100,
        backgroundColor: colors.white,
        paddingLeft: 20
    },

    btnSendMessages: {
        width: 47,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.mainColor,
        borderRadius: 20
    },
})
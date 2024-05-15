import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import reset from "../../styles/reset";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        paddingBottom: 50
    },

    containerHeader: {
        width: '100%',
        height: 250,
        backgroundColor: colors.mainColor,
        paddingTop: reset.padTop,
        paddingHorizontal: reset.padH,
        borderBottomLeftRadius: 30,
    },

    containerSearch: {
        width: '100%',
        paddingTop: reset.padTop,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    containerInputSearch: {
        position: 'relative',
        width: '84%',
        height: 45,
        backgroundColor: colors.brighterBlue,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12
    },

    inputSearch: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 100,
        paddingLeft: 50,
        fontFamily: fonts.medium,
        fontSize: 12,
        color: colors.lightBlue
    },

    btnFilter: {
        width: 45,
        height: 45,
        backgroundColor: colors.lightBlue,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerMainContent: {
        width: '100%',
        paddingHorizontal: reset.padH,
        paddingTop: reset.padTop,
    },

    mainContentTitle: {
        fontSize: 18,
        fontFamily: fonts.semiBold,
        color: colors.textColor
    },

    mainContentSubtitle: {
        color: colors.mediumGray,
        fontSize: 13,
        fontFamily: fonts.medium
    },

    mainCard: {
        marginTop: 25,
        width: '100%',
        height: 400,
        backgroundColor: '#135357',
        borderRadius: 15,
        position: 'relative'
    },

    mainCardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },

    mainCardContentArea: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingTop: 15,
        justifyContent: 'space-between',
        backgroundColor: '#00000033'
    },

    mainCardRating: {
        width: 100,
        height: 42,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 7
    },

    mainCardRatingText: {
        fontFamily: fonts.bold,
        fontSize: 26,
        color: colors.brighterBlue
    },

    mainCardContentBottom: {
        width: '100%',
        rowGap: 5,
        paddingBottom: 30
    },

    mainCardPlaceName: {
        fontSize: 18,
        fontFamily: fonts.semiBold,
        color: colors.white,
        width: '70%'
    },

    mainCardPlaceLocation:{
        fontSize: 11,
        fontFamily: fonts.medium,
        color: colors.white
    },

    mainCardBottomArea: {
        width: '100%',
        height: 130,
        gap: 10,
        paddingTop: 18
    },

    mainCardName: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff'
    },

    mainCardRankArea: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    mainCardRankText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff'
    },

    mainCardButton: {
        width: 50,
        height: 50,
        backgroundColor: '#399CA2',
        position: 'absolute',
        bottom: 5,
        right: 0,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerSuggestion: {
        width: '100%',
        paddingTop: reset.padTop
    },

    suggestionTitle: {
        fontSize: 18,
        fontFamily: fonts.semiBold,
        color: colors.textColor
    },

    containerCardSuggestion: {
        width: '100%',
        marginTop: 15,
    },

    cardSuggestion: {
        width: '100%',
        minHeight: 108,
        padding: 7,
        backgroundColor: colors.white,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 10
    },

    cardSuggestionImage: {
        width: 105,
        height: '100%',
        backgroundColor: '#399CA3',
        borderRadius: 5
    },

    cardSuggestionInfo: {
        width: '62%',
        height: '100%',
        paddingVertical: 6,
        rowGap: 3
    },

    cardSuggestionName:{
        fontSize: 11,
        fontFamily: fonts.medium,
        color: colors.textColor,
        width: '70%'
    },

    cardSuggestionLocation:{
        fontSize: 10,
        fontFamily: fonts.medium,
        color: colors.mediumGray
    },

    cardSuggestionBottom:{
        width: '100%',
        minHeight: 40,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    cardSuggestionRating:{
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center'
    },

    cardSuggestionRatingText:{
        fontSize: 11,
        color: colors.brighterBlue,
        fontFamily: fonts.medium
    },

    cardSuggestionStatus:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },

    cardSuggestionStatusText:{
        fontSize: 10,
        fontFamily: fonts.medium,
        color: colors.mainGreen
    }
})
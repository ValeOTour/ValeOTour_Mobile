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
        height: 352,
        backgroundColor: colors.mainColor,
        paddingTop: reset.padTop,
        paddingHorizontal: reset.padH,
        borderBottomLeftRadius: 30,
    },

    containerTopButtonsHeader: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    containerProfileButtonHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    btnProfileHeader: {
        width: 32,
        height: 32,
        backgroundColor: colors.mainGreen,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerMainText: {
        width: '100%',
        paddingTop: reset.padTop,
    },

    mainText: {
        fontFamily: fonts.bold,
        fontSize: 26,
        color: colors.white
    },

    containerGroupButtons: {
        width: '100%',
        paddingTop: reset.padTop,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerTourismTypeButtons: {
        alignItems: 'center',
        gap: 5,
    },

    btnTourismType: {
        width: 64,
        height: 64,
        backgroundColor: colors.brighterBlue,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    tourismTypeText: {
        fontFamily: fonts.medium,
        fontSize: 10,
        color: colors.white,
        fontWeight: '300'
    },

    containerMainContent:{
        width: '100%',
        paddingTop: reset.padTop,
    },

    titleMainContent:{
        fontFamily: fonts.semiBold,
        color: colors.textColor,
        fontSize: 18,
        paddingLeft: reset.padH
    },

    containerMostPopularPlacesFilters: {
        width: '100%',
        marginTop: 15
    },

    containerFilters: {
        flexDirection: 'row',
        gap: 10,
        paddingLeft: reset.padH
    },

    btnFilter: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D1E5E9'
    },

    btnFilterText:{
        fontFamily: fonts.medium,
        fontSize: 13,
        color: colors.mediumGray
    },

    containerCardPlaces:{
        width: '100%',
        paddingTop: reset.padTop,
        paddingHorizontal: reset.padH,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    cardPlaces:{
        width: '49%',
        rowGap: 5,
        marginTop: 10
    },

    cardPlacesImg:{
        width: '100%',
        height: 130,
        borderRadius: 7
    },

    cardPlacesBottom:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },

    cardPlacesText:{
        fontFamily: fonts.medium,
        color: colors.textColor,
        fontSize: 11,
        width: '70%',
        textAlign: 'left'
    },

    cardPlacesRating:{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },

    cardPlacesRatingText:{
        fontFamily: fonts.medium,
        color: colors.brighterBlue,
        fontSize: 11
    }
})
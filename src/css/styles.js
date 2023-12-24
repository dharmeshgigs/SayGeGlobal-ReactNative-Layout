import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Metrics";

export const Style = () => StyleSheet.create({
    linkTextStyle: {
        color: colors.text_terms_n_condition,
        fontSize: moderateScale(13),
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: '400'
    },
    body: {
        flex: 1,
    },
    flexGrowStyle: {
        flexGrow: 1,
    },
    content: {
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: verticalScale(48),
        paddingHorizontal: horizontalScale(12),
        position: 'absolute'
    },
    contentNoPadding: {
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    skipTextStyle: {
        color: colors.appPrimary,
        fontSize: moderateScale(17),
        alignSelf: 'center'
    },
    poppinSemiBoldTextStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        fontSize: moderateScale(24),
        color: colors.appPrimary
    },
    poppinRegularTextStyle: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: moderateScale(17),
        color: colors.text_msg
    },
    interRegularTextStyle: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: moderateScale(16),
        color: colors.text_msg
    },
    flex1CenterStyle: {
        alignItems:'center',
        justifyContent:'center'
    },
    normalPage: {
        flex: 1,
        backgroundColor:colors.white
    },
    colorPage: {
        flex: 1,
        backgroundColor:colors.signup_bg
    },
    flexCenterStyle: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    interRegular13TextStyle:{
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(13),
        color: colors.text_msg 
    },
    poppinRegular15TextStyle:{
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        fontSize: moderateScale(15),
        color: colors.icon_label 
    },
    interLight13TextStyle:{
        fontFamily:'Inter-Light',
        fontSize:moderateScale(13),
        fontWeight:'400',
        color:colors.text_msg
    },
    interRegular1340026:{
        fontFamily:'Inter-Regular',
        fontSize:moderateScale(13),
        fontWeight:'400',
        color:colors.text_msg  
    }
})

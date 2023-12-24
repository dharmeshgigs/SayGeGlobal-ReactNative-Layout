import React from 'react';
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextComponent from '../../appcomponents/TextComponent';
import { colors } from '../../css/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';


interface Props {
    onDismiss: () => void,
    screen: string,
    visible: boolean
}

const TermsAndConditionModal = ({
    onDismiss,
    screen,
    visible = false }: Props) => {

    const onOkClicked = () => {
        onDismiss();
    }

    function getContent() {
        if(screen === 'Terms & Conditions'){
            return "Thanks for being a part of the SAYge Link community!\nIn order for users to have the best experience with our platform, we have to employ terms of appropriate use. Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the SAYge Link platform (the “Service”) operated by Sayge Link, Inc.\nThis is a contract between you (the user) and our platform, the Service, SAYge Link. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part, you may not access the Service.\nOur Service:\nWe are not a network or organization offering medical advice or professional therapy. We connect women for peer to peer support, in hopes that wisdom is learned from experience and can offer insight. However, everyone’s situation is different and unique. What works for one person or circumstance may not carry to another. The purpose of our Service is to connect women and support them by reducing stigma and helping them feel less alone in what they are going through. In the near future, we will also be providing a user-rated guide to professional resources and interactive education from professionals/experts but these features are not yet offered.\nGeneral Rules:\nYou must be at least 18 years old to use our service.\nYou cannot use or view another person’s account without permission.\nYou must represent yourself accurately. You must provide true, accurate information on your profile and registration information. You agree for all information shared to maintain truthfulness (exception: username does not have to be the name on your birth certificate).\nYou cannot sell or solicit any goods or services on our platform.\nYou may not access, tamper with or use non-public areas of our platform or system.\nBehavior, including content (photos, language), displayed through the use of our Service must not contain violent, abusive, discriminatory, or threatening connotations.\nYou will not use our Service for harmful or nefarious purposes.\nYou may not modify, alter, reproduce, or distribute the Service. You may not copy, decompile, reverse engineer, or attempt to derive the source code of any portion of the service.\nSAYge Link has the right to promptly terminate without notice the accounts of users that are determined not to be in compliance with our Terms.\nOur platform is aimed at creating a network of women that can exchange insight on shared issues. By agreeing to these Terms, as a user of our Service, you are held to representing yourself accurately in your profile. Your gender should be consistent with what you identify with. \nWe do not discriminate based on gender, all genders are able to access and use our platform. Users will have a choice in who they connect with and female users may choose to connect solely with other female users. By agreeing to the Terms, you are held to using the platform \nand Service as it is indicated, to connect with others to share or gain insight on specific topics, with good intent. Content and information shared are at your own discretion, and by agreeing to these Terms, you understand that other users may see content shared and learn \ninformation disclosed by you. You consent for this information to be shared with other Users.\nIf you are currently at risk of harm or feel at risk of harming yourself or others, our platform does not offer the appropriate level of support for you at this time. Please go to the emergency room or call 911. If you are experiencing thoughts of suicide please call 1-800-273-8255.\nIf you have any questions about these Terms, please contact us at support@saygelink.com.";
        }else{
           return "Thanks for being a part of the SAYge Link community!\nIn order for users to have the best experience with our platform, we have to employ terms of appropriate use. Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the SAYge Link platform (the “Service”) operated by Sayge Link, Inc.\nThis is a contract between you (the user) and our platform, the Service, SAYge Link. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part, you may not access the Service.\nOur Service:\nWe are not a network or organization offering medical advice or professional therapy. We connect women for peer to peer support, in hopes that wisdom is learned from experience and can offer insight. However, everyone’s situation is different and unique. What works for one person or circumstance may not carry to another. The purpose of our Service is to connect women and support them by reducing stigma and helping them feel less alone in what they are going through. In the near future, we will also be providing a user-rated guide to professional resources and interactive education from professionals/experts but these features are not yet offered.\nGeneral Rules:\nYou must be at least 18 years old to use our service.\nYou cannot use or view another person’s account without permission.\nYou must represent yourself accurately. You must provide true, accurate information on your profile and registration information. You agree for all information shared to maintain truthfulness (exception: username does not have to be the name on your birth certificate).\nYou cannot sell or solicit any goods or services on our platform.\nYou may not access, tamper with or use non-public areas of our platform or system.\nBehavior, including content (photos, language), displayed through the use of our Service must not contain violent, abusive, discriminatory, or threatening connotations.\nYou will not use our Service for harmful or nefarious purposes.\nYou may not modify, alter, reproduce, or distribute the Service. You may not copy, decompile, reverse engineer, or attempt to derive the source code of any portion of the service.\nSAYge Link has the right to promptly terminate without notice the accounts of users that are determined not to be in compliance with our Terms.\nOur platform is aimed at creating a network of women that can exchange insight on shared issues. By agreeing to these Terms, as a user of our Service, you are held to representing yourself accurately in your profile. Your gender should be consistent with what you identify with. \nWe do not discriminate based on gender, all genders are able to access and use our platform. Users will have a choice in who they connect with and female users may choose to connect solely with other female users. By agreeing to the Terms, you are held to using the platform \nand Service as it is indicated, to connect with others to share or gain insight on specific topics, with good intent. Content and information shared are at your own discretion, and by agreeing to these Terms, you understand that other users may see content shared and learn \ninformation disclosed by you. You consent for this information to be shared with other Users.\nIf you are currently at risk of harm or feel at risk of harming yourself or others, our platform does not offer the appropriate level of support for you at this time. Please go to the emergency room or call 911. If you are experiencing thoughts of suicide please call 1-800-273-8255.\nIf you have any questions about these Terms, please contact us at support@saygelink.com."; 
        }
    }

    return (
        <Modal style={styles.body}
            visible={visible}
            animationType='slide'
            onRequestClose={() => {
                onDismiss();
            }}
            presentationStyle="fullScreen">
            <SafeAreaView style={styles.body}>
                <StatusBarAndroid
                    bar_style={'light-content'}
                    bgColor={colors.black}
                    translucent={false} />
                <View style={styles.content}>

                    <View style={styles.appBarStyle}>
                        <WrapInputLabelComponent
                            text={screen}
                            textStyle={styles.titleTextStyle}
                        />
                        <TouchableOpacity style={styles.okButtonStyle}
                            onPress={onOkClicked}>
                            <TextComponent
                                text='OK'
                                textStyle={styles.okTextStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                    {screen === 'Terms & Conditions' ? <Text style={styles.termsTextStyle}>Thanks for being a part of the SAYge Link community!
                       {'\n\n'}
                       In order for users to have the best experience with our platform, we have to employ terms of appropriate use. Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the SAYge Link platform (the “Service”) operated by Sayge Link, Inc.
                       {'\n\n'}
                       This is a contract between you (the user) and our platform, the Service, SAYge Link. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part, you may not access the Service.
                       {'\n\n'}
                       Our Service:{'\n'}
                       We are not a network or organization offering medical advice or professional therapy. We connect women for peer to peer support, in hopes that wisdom is learned from experience and can offer insight. However, everyone’s situation is different and unique. What works for one person or circumstance may not carry to another. The purpose of our Service is to connect women and support them by reducing stigma and helping them feel less alone in what they are going through. In the near future, we will also be providing a user-rated guide to professional resources and interactive education from professionals/experts but these features are not yet offered.
                       {'\n\n'}
                       General Rules:{'\n'}
                       You must be at least 18 years old to use our service.
                       You cannot use or view another person’s account without permission.
                       You must represent yourself accurately. You must provide true, accurate information on your profile and registration information. You agree for all information shared to maintain truthfulness (exception: username does not have to be the name on your birth certificate).
                       You cannot sell or solicit any goods or services on our platform.
                       You may not access, tamper with or use non-public areas of our platform or system.
                       Behavior, including content (photos, language), displayed through the use of our Service must not contain violent, abusive, discriminatory, or threatening connotations.
                       You will not use our Service for harmful or nefarious purposes.
                       You may not modify, alter, reproduce, or distribute the Service. You may not copy, decompile, reverse engineer, or attempt to derive the source code of any portion of the service.
                       {'\n\n'}
                       SAYge Link has the right to promptly terminate without notice the accounts of users that are determined not to be in compliance with our Terms.
                       {'\n\n'}
                       Our platform is aimed at creating a network of women that can exchange insight on shared issues. By agreeing to these Terms, as a user of our Service, you are held to representing yourself accurately in your profile. Your gender should be consistent with what you identify with.
                       We do not discriminate based on gender, all genders are able to access and use our platform. Users will have a choice in who they connect with and female users may choose to connect solely with other female users. By agreeing to the Terms, you are held to using the platform 
                       and Service as it is indicated, to connect with others to share or gain insight on specific topics, with good intent. Content and information shared are at your own discretion, and by agreeing to these Terms, you understand that other users may see content shared and learn information disclosed by you. You consent for this information to be shared with other Users.
                       If you are currently at risk of harm or feel at risk of harming yourself or others, our platform does not offer the appropriate level of support for you at this time. Please go to the emergency room or call 911. If you are experiencing thoughts of suicide please call 1-800-273-8255.\nIf you have any questions about these Terms, please contact us at support@saygelink.com.
                    </Text> : 
                    <Text style={styles.termsTextStyle}>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                    {'\n\n'}
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    {'\n\n'}
                    Information Collection and Use{'\n'}
                    For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to name, email, zip code, search topics. The information that we request will be retained by us and used as described in this privacy policy. The app does not use third party services that may collect information used to identify you.
                    {'\n\n'}
                    Cookies{'\n'}
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                    {'\n\n'}
                    Service Providers{'\n'}
                    May employ third-party companies and individuals due to the following reasons:{'\n'}
                    To facilitate our Service;{'\n'}
                    To provide the Service on our behalf;{'\n'}
                    To perform Service-related services; or{'\n'}
                    To assist us in analyzing how our Service is used.{'\n'}
                    We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                    {'\n\n'}
                    Security{'\n'}
                    We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    {'\n\n'}
                    Children’s Privacy{'\n'}
                    These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                    {'\n\n'}
                    Changes to This Privacy Policy{'\n'}
                    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page. Contact Us If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@saygelink.com. 
                    </Text>}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        margin: 0,
        backgroundColor: colors.black
    },
    content: {
        flex: 1,
        backgroundColor: colors.white
    },
    appBarStyle: {
        height: verticalScale(48),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.topbar_privacy_bg
    },
    titleTextStyle: {
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(17),
        color: colors.text_msg
    },
    okButtonStyle: {
        position: 'absolute',
        right: 24
    },
    okTextStyle: {
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(17),
        color: colors.text_msg
    },
    termsTextStyle: {
        fontWeight: '400',
        paddingHorizontal: horizontalScale(12),
        paddingVertical: verticalScale(8),
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(16),
        color: colors.text_msg
    }
});

export default TermsAndConditionModal;
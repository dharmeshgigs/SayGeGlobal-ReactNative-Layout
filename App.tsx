/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { MyTheme } from './src/css/colors';
import IntroPage from './src/ui/Intro/IntroPage';
import SignUpPage from './src/ui/SignUp/SignUpPage';
import SplashPage from './src/ui/splash/SplashPage';
import SignInPage from './src/ui/SignIn/SignInPage';
import ForgotPasswordPage from './src/ui/ForgotPassword/ForgotPasswordPage';
import CheckEmailPage from './src/ui/CheckEmail/CheckEmailPage';
import LocationPermissionPage from './src/ui/OnBoarding/LocationPermissionPage';
import NotificationPermissionPage from './src/ui/OnBoarding/NotificationPermissionPage';
import CommunityPage from './src/ui/OnBoarding/CommunityPage';
import ChooseSelectedPage from './src/ui/ChooseSelected/ChooseSelected';
import BeASeygePage from './src/ui/ChooseSelected/BeASeyge';
import AboutYouPage from './src/ui/ChooseSelected/AboutYou';
import AddNamePage from './src/ui/ChooseSelected/AddName';
import UploadProfilePage from './src/ui/ChooseSelected/UploadProfile';
import StorySelectionPage from './src/ui/MyInsight/StorySelection';
import MyExperiencesPage from './src/ui/MyInsight/MyExperiences';
import MyProfilePage from './src/ui/MyProfile/MyProfile';
import MyAvailabilityPage from './src/ui/MyProfile/MyAvailability';
import EditProfilePage from './src/ui/MyProfile/EditProfile';
import UploadCommunityPhotoPage from './src/ui/FindCommunity/UploadCommunityPhoto';
import AddCommunityNamePage from './src/ui/FindCommunity/AddCommunityName';
import FindCommunityPage from './src/ui/FindCommunity/FindCommunity';
import AboutCommunityPage from './src/ui/FindCommunity/AboutCommunity';
import FindSayGePage from './src/ui/FindSAYge/FindSayGe';
import MatchesPage from './src/ui/FindSAYge/Matches';
import ViewProfilePage from './src/ui/FindSAYge/ViewProfile';

export type RootStackParams = {
  Intro: any;
  SignUp: any;
  SignIn: any;
  ForgotPassword: any;
  CheckEmail: any;
  LocationPermission: any;
  NotificationPermission: any;
  Community: any;
  ChooseSelected: any;
  BeASeyge: any;
  AboutYou: any;
  AddName: any;
  UploadProfile: any;
  StorySelection: {
    story?: any | null;
  };
  MyExperiences: any;
  MyProfile: any;
  MyAvailability: any;
  EditProfile: any;
  AddCommunityName: any;
  UploadCommunityPhoto: any;
  FindCommunity:any;
  AboutCommunity:any;
  FindSayGe:any;
  Matches:any;
  ViewProfile:any;
}

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      setSplash(false);
    }, 3000)
  }, []);

  return (splash ? <SplashPage /> :
    <GestureHandlerRootView style={styles.appBody}>
      <NavigationContainer theme={MyTheme}     >
        <Stack.Navigator screenOptions={headerStyle}
          initialRouteName='Intro'  >
          <Stack.Screen name="Intro" component={IntroPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="SignIn" component={SignInPage} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
          <Stack.Screen name="CheckEmail" component={CheckEmailPage} />
          <Stack.Screen name="LocationPermission" component={LocationPermissionPage} />
          <Stack.Screen name="NotificationPermission" component={NotificationPermissionPage} />
          <Stack.Screen name="Community" component={CommunityPage} />
          <Stack.Screen name="ChooseSelected" component={ChooseSelectedPage} />
          <Stack.Screen name="BeASeyge" component={BeASeygePage} />
          <Stack.Screen name="AboutYou" component={AboutYouPage} />
          <Stack.Screen name="AddName" component={AddNamePage} />
          <Stack.Screen name="UploadProfile" component={UploadProfilePage} />
          <Stack.Screen name="StorySelection" component={StorySelectionPage} />
          <Stack.Screen name="MyExperiences" component={MyExperiencesPage} />
          <Stack.Screen name="MyProfile" component={MyProfilePage} />
          <Stack.Screen name="MyAvailability" component={MyAvailabilityPage} />
          <Stack.Screen name="EditProfile" component={EditProfilePage} />
          <Stack.Screen name="AddCommunityName" component={AddCommunityNamePage} />
          <Stack.Screen name="UploadCommunityPhoto" component={UploadCommunityPhotoPage} />
          <Stack.Screen name="FindCommunity" component={FindCommunityPage} />
          <Stack.Screen name="AboutCommunity" component={AboutCommunityPage} />
          <Stack.Screen name="FindSayGe" component={FindSayGePage} />
          <Stack.Screen name="Matches" component={MatchesPage} />
          <Stack.Screen name="ViewProfile" component={ViewProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const headerStyle = {
  headerShown: false
};

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
  },
});

export default App;

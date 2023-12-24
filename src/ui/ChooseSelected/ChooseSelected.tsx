import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { RootStackParams } from '../../../App';
import CardComponent from '../../appcomponents/CardComponent';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import WizardProgressComponent from '../../appcomponents/WizardProgressComponent';
import BeASaygeIcon from '../../assets/images/be_a_sayge.svg';
import CommunityIcon from '../../assets/images/community.svg';
import FindASayage from '../../assets/images/find_sayge.svg';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

type Props = NativeStackScreenProps<RootStackParams, "ChooseSelected">;

const ChooseSelectedPage = ({ navigation }: Props) => {

  const [beASayge, setBeASaygeChecked] = useState(false);
  const [findASayge, setFindASaygeChecked] = useState(false);
  const [community, setCommunityChecked] = useState(false);

  const onBeASaygeClicked = () => {
    setBeASaygeChecked(!beASayge)
    navigation.navigate("BeASeyge");
  }

  const onFindASaygeClicked = () => {
    setFindASaygeChecked(!findASayge)
    navigation.navigate("AddCommunityName");
  }

  const onCommunityClicked = () => {
    setCommunityChecked(!community)
    navigation.navigate("AddCommunityName");
  }

  return (
    <SafeAreaView style={[Style().normalPage]}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false} />
      <ScrollView contentContainerStyle={styles.body}>
        <View>
          <WizardProgressComponent
            widthStyle={styles.progressStyle}/>
          <InputLabelComponent
            text={'What brings you to Sayge?'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.whatBrignYou]} />
          <InputLabelComponent
            noOfLine={3}
            text={'Choose one option for now, you will be able to explore other options later on'}
            textStyle={[Style().poppinRegularTextStyle, styles.chooseOneOption]} />
          <CardComponent
            left={<BeASaygeIcon height={verticalScale(96)} width={horizontalScale(81)} />}
            checked={beASayge}
            title={'Be a Sayge'}
            subtitle={'Share my story with members'}
            onPress={onBeASaygeClicked} />
          <CardComponent
            left={<FindASayage height={verticalScale(96)} width={horizontalScale(81)} />}
            checked={findASayge}
            style={styles.verticalItemSpacing}
            title={'Find a Sayge'}
            subtitle={'Connect with members'}
            onPress={onFindASaygeClicked} />
          <CardComponent
            left={<CommunityIcon height={verticalScale(96)} width={horizontalScale(81)} />}
            checked={community}
            style={styles.verticalItemSpacing}
            title={'Community'}
            subtitle={'Join & create groups, explore SAYge content'}
            onPress={onCommunityClicked} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(24)
  },
  progressStyle: {
    width: '25%'
  },
  whatBrignYou: {
    marginTop: verticalScale(48)
  },
  chooseOneOption: {
    marginTop: verticalScale(12),
    textAlign: 'justify',
    marginBottom: verticalScale(24)
  },
  verticalItemSpacing: {
    marginTop: verticalScale(20)
  }
});

export default ChooseSelectedPage;
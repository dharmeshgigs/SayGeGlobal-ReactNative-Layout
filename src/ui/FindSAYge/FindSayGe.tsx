import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { RootStackParams } from '../../../App';
import LabelIconComponent from '../../appcomponents/LabelIconComponent';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextInputComponent from '../../appcomponents/TextInputComponent';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import CareerIcon from '../../assets/images/career.svg';
import CareerUnselectedIcon from '../../assets/images/career_unselected.svg';
import InfertilityIcon from '../../assets/images/infertility.svg';
import InfertilityUnselectedIcon from '../../assets/images/infertility_unselected.svg';
import ParentingIcon from '../../assets/images/parenting.svg';
import ParentingUnselectedIcon from '../../assets/images/parenting_unselected.svg';
import PregnanceIcon from '../../assets/images/pregnancy.svg';
import PregnancyUnselectedIcon from '../../assets/images/pregnancy_unselected.svg';
import RelationshipIcon from '../../assets/images/relationships.svg';
import RelationshipIconUnselectedIcon from '../../assets/images/relationships_unselected.svg';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = NativeStackScreenProps<RootStackParams, "FindSayGe">;

interface ItemProps {
  item: any
}

const FindSayGePage = ({ navigation }: Props) => {

  const [pregnancy, setPregnancy] = useState(true);
  const [relationships, setRelationships] = useState(false);
  const [parenting, setParenting] = useState(false);
  const [infertility, setInfertility] = useState(false);
  const [career, setCareer] = useState(false);

  const list = [
    {
      "id": "1",
      "title": "Nausea-Vomitting",
      "selected": false,
      "subitems": [
        {
          "id": "1",
          "title": 'A',
          "selected": false
        },
        {
          "id": "2",
          "title": 'B',
          "selected": false
        },
        {
          "id": "3",
          "title": 'C',
          "selected": false
        }
      ]
    },
    {
      "id": "2",
      "title": "Weight & Fitness",
      "selected": true,
      "subitems": [
        {
          "id": "4",
          "title": 'A',
          "selected": true
        },
        {
          "id": "5",
          "title": 'B',
          "selected": false
        },
        {
          "id": "6",
          "title": 'C',
          "selected": false
        }
      ]
    },
    {
      "id": "3",
      "title": "Fear & Anxiety",
      "selected": false,
      "subitems": [
        {
          "id": "7",
          "title": 'A',
          "selected": false
        },
        {
          "id": "8",
          "title": 'B',
          "selected": false
        },
        {
          "id": "9",
          "title": 'C',
          "selected": false
        }
      ]
    },
    {
      "id": "4",
      "title": "Gestational Diabetes",
      "selected": false,
      "subitems": [
        {
          "id": "10",
          "title": 'A',
          "selected": false
        },
        {
          "id": "11",
          "title": 'B',
          "selected": false
        },
        {
          "id": "12",
          "title": 'C',
          "selected": false
        }
      ]
    },
    {
      "id": "5",
      "title": "Genetic testing",
      "selected": false,
      "subitems": [
        {
          "id": "13",
          "title": 'A',
          "selected": false
        },
        {
          "id": "14",
          "title": 'B',
          "selected": false
        },
        {
          "id": "15",
          "title": 'C',
          "selected": false
        }
      ]
    },
    {
      "id": "6",
      "title": "Pregnancy after 40s",
      "selected": false,
      "subitems": [
        {
          "id": "16",
          "title": 'A',
          "selected": false
        },
        {
          "id": "17",
          "title": 'B',
          "selected": false
        },
        {
          "id": "18",
          "title": 'C',
          "selected": false
        }
      ]
    },
    {
      "id": "7",
      "title": "Miscarriage",
      "selected": false,
      "subitems": [
        {
          "id": "19",
          "title": 'A',
          "selected": false
        },
        {
          "id": "20",
          "title": 'B',
          "selected": false
        },
        {
          "id": "21",
          "title": 'C',
          "selected": false
        }
      ]
    }
  ];

  const onContinueClicked = () => navigation.navigate("Matches");

  const SubItem = ({ item }: ItemProps) => (
    <View >
      <WrapInputLabelComponent
        text={item.title}
        textStyle={item.selected ? styles.subtitleSelectedStyle : styles.subtitleStyle} />
    </View>
  )

  const Item = ({ item }: ItemProps) => {

    const [data,setData] = useState(item);

    const onCollapseClicked = () => {
      const newData : any = {};
      newData.id = item.id;
      newData.title = item.title;
      newData.selected = false;
      newData.subitems = item.subitems;
      setData(newData);
    }

    const onExpandClicked = () => {
      const newData : any = {};
      newData.id = item.id;
      newData.title = item.title;
      newData.selected = true;
      newData.subitems = item.subitems;
      setData(newData);
    }

    return (
    <View>
      <TouchableOpacity onPress={() => {
        if(data.selected == true){
          onCollapseClicked();
        }else{
          onExpandClicked();
        }
      }}>
      <View style={styles.itemContainer}>
        <InputLabelComponent
          text={data.title}
          textStyle={data.selected ? styles.titleSelectedStyle : styles.titleStyle} />
        {data.selected ?
          <Iconify icon='dashicons:arrow-up-alt2'
            height={horizontalScale(24)}
            width={verticalScale(24)}
            color={colors.ico_location}
            style={styles.iconMarginTop} />
          : <Iconify icon='dashicons:arrow-down-alt2'
            height={horizontalScale(24)}
            width={verticalScale(24)}
            color={colors.down_arrow}
            style={styles.iconMarginTop} />}
      </View>
      </TouchableOpacity>
      {data.selected ? <View style={styles.subitemContainer}>
        {data.subitems.map((item_: any) => <SubItem key={item_.id.toString()} item={item_} />)}
      </View> : null}
    </View>
  ) 
};

  return (
    <SafeAreaView style={[Style().normalPage]}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false} />
      <ScrollView >
        <View>
          <WrapInputLabelComponent
            text={'Find a SAYge'}
            textStyle={[Style().poppinSemiBoldTextStyle, styles.whatYourName]} />
          <WrapInputLabelComponent
            text={'Members have insight from their life experiences are waiting to share their story with you!'}
            textStyle={[Style().poppinRegularTextStyle, styles.nameWilBeVisible]} />
          <TextInputComponent
            onChangeText={(text) => { }}
            inputStyle={styles.searchInput}
            textStyle={styles.textStyle}
            inputOuterStyle={styles.searchInputOuter}
            leftIcon={<Iconify icon="basil:search-outline"
              height={verticalScale(28)}
              width={horizontalScale(28)}
              color={colors.chip_option_text} />}
            placeHolderText={'Search for a topic any topic, ex. ‘miscarriage’'}
            placeholderTextColor={colors.chip_option_text} />
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalItems}>
              <LabelIconComponent
                onPress={() => { 
                  onContinueClicked();
                }}
                caption={'Pregnancy'}
                containerStyle={styles.firstItemPadding}
                icon={pregnancy ? <PregnanceIcon height={28} width={28} /> :
                  <PregnancyUnselectedIcon height={28} width={28} />}
                selected={pregnancy}
                captionStyle={pregnancy ? styles.iconSelectedCaption : styles.iconCaption} />
              <LabelIconComponent
                onPress={() => { }}
                caption={'Relationships'}
                containerStyle={styles.itemPadding}
                icon={relationships ? <RelationshipIcon height={28} width={28} /> :
                  <RelationshipIconUnselectedIcon height={28} width={28} />}
                selected={relationships}
                captionStyle={relationships ? styles.iconSelectedCaption : styles.iconCaption} />
              <LabelIconComponent
                onPress={() => { }}
                caption={'Parenting'}
                containerStyle={styles.itemPadding}
                icon={parenting ? <ParentingIcon height={28} width={28} /> :
                  <ParentingUnselectedIcon height={28} width={28} />}
                selected={parenting}
                captionStyle={parenting ? styles.iconSelectedCaption : styles.iconCaption} />
              <LabelIconComponent
                onPress={() => { }}
                caption={'Infertility'}
                containerStyle={styles.itemPadding}
                icon={infertility ? <InfertilityIcon height={28} width={28} /> :
                  <InfertilityUnselectedIcon height={28} width={28} />}
                selected={infertility}
                captionStyle={infertility ? styles.iconSelectedCaption : styles.iconCaption} />
              <LabelIconComponent
                onPress={() => { }}
                caption={'Infertility'}
                containerStyle={styles.itemPadding}
                icon={career ? <CareerIcon height={28} width={28} /> :
                  <CareerUnselectedIcon height={28} width={28} />}
                selected={career}
                captionStyle={career ? styles.iconSelectedCaption : styles.iconCaption} />
            </View>
          </ScrollView>
          <View style={styles.listContainer}>
            {list.map(item => <Item key={item.id.toString()} item={item} />)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  continue: {
    marginVertical: verticalScale(8),
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(24)
  },
  whatYourName: {
    marginTop: verticalScale(24),
    marginHorizontal: horizontalScale(24)
  },
  nameWilBeVisible: {
    marginTop: verticalScale(12),
    textAlign: 'justify',
    fontSize: moderateScale(15),
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(24)
  },
  searchInputOuter: {
    marginHorizontal: horizontalScale(20)
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.border_about,
    backgroundColor: colors.signup_bg,
    borderRadius: 20
  },
  textStyle: {
    fontFamily: 'Inter-Light',
    fontWeight: '400',
    fontSize: moderateScale(13),
    color: colors.chip_option_text
  },
  iconCaption: {
    color: colors.icon_label,
    marginVertical: verticalScale(8),
    alignSelf: 'center',
    fontSize: moderateScale(9)
  },
  iconSelectedCaption: {
    color: colors.appPrimary,
    marginVertical: verticalScale(8),
    alignSelf: 'center',
    fontSize: moderateScale(9)
  },
  firstItemPadding: {
    marginStart: horizontalScale(24),
    marginEnd: horizontalScale(0)
  },
  itemPadding: {
    marginHorizontal: horizontalScale(10)
  },
  selectedView: {
    borderColor: colors.appPrimary,
    borderWidth: moderateScale(1),
    width: 60,
    borderRadius: 10,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unselectedView: {
    borderColor: colors.topbar_privacy_bg,
    borderWidth: moderateScale(1),
    width: 60,
    borderRadius: 10,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontalItems: {
    flexDirection: 'row',
    marginVertical: verticalScale(24)
  },
  listContainer: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
    borderColor: colors.topbar_privacy_bg,
    borderWidth: 1,
    borderRadius: 15
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    borderWidth: moderateScale(1),
    borderRadius: 10,
    paddingVertical: verticalScale(8),
    marginTop: verticalScale(8),
    borderColor: colors.topbar_privacy_bg
  },
  titleStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: moderateScale(11),
    color: colors.icon_label
  },
  titleSelectedStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: moderateScale(11),
    color: colors.appPrimary
  },
  iconMarginTop: {
    padding:8
  },
  subitemContainer: {
    paddingHorizontal: horizontalScale(12),
    borderWidth: moderateScale(1),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopWidth: 0,
    marginHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    borderColor: colors.topbar_privacy_bg
  },
  subtitleStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: moderateScale(11),
    marginVertical: verticalScale(4),
    color: colors.icon_label
  },
  subtitleSelectedStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: moderateScale(11),
    marginVertical: verticalScale(4),
    color: colors.ico_location
  }
});

export default FindSayGePage;
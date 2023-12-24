import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, SectionList, StyleSheet, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../../../App';
import InputLabelComponent from '../../appcomponents/InputLabelComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';
import StoryList from './StoryList';

type Props = NativeStackScreenProps<RootStackParams, "StorySelection">;

const StorySelectionPage = ({ navigation,route }: Props) => {

  const onBackClicked = () => navigation.goBack();

  const onContinueClicked = () => navigation.navigate("MyExperiences");

  const topics = [
    {
      "topic": "Relationships",
      "data": [{
        "index":0,
        "data": [
          {
            "id": "1",
            "story": "Divorce",
            "selected": true
          },
          {
            "id": "2",
            "story": "Cultural issues",
            "selected": false
          },
          {
            "id": "3",
            "story": "Age gap",
            "selected": false
          },
          {
            "id": "4",
            "story": "In-Laws",
            "selected": false
          },
          {
            "id": "42",
            "story": "Feeling stuck",
            "selected": false
          }
        ]
      }]
    },
    {
      "topic": "Parenting",
      "data": [
        {
          "index":1,
          "data": [
            {
              "id": "5",
              "story": "New mom",
              "selected": false
            },
            {
              "id": "6",
              "story": "General",
              "selected": false
            },
            {
              "id": "7",
              "story": "Special needs child",
              "selected": false
            },
            {
              "id": "8",
              "story": "Single parenting",
              "selected": false
            },
            {
              "id": "9",
              "story": "Stay at home",
              "selected": false
            },
            {
              "id": "10",
              "story": "Working mom",
              "selected": false
            },
            {
              "id": "11",
              "story": "Back to school",
              "selected": false
            },
            {
              "id": "12",
              "story": "Post-partum anxiety & depression",
              "selected": false
            },
            {
              "id": "13",
              "story": "Adoption",
              "selected": false
            }
          ]
        }
      ]
    },
    {
      "topic": "Pregnancy",
      "data": [
        {
          "index":2,
          "data": [
            {
              "id": "14",
              "story": "Nausea & vomiting",
              "selected": false
            },
            {
              "id": "15",
              "story": "Weight & Fitness",
              "selected": false
            },
            {
              "id": "16",
              "story": "Fear & Anxiety",
              "selected": false
            },
            {
              "id": "17",
              "story": "Gestational diabetes",
              "selected": false
            },
            {
              "id": "18",
              "story": "Genetic testing",
              "selected": false
            },
            {
              "id": "19",
              "story": "Pregnancy over 40",
              "selected": false
            },
            {
              "id": "20",
              "story": "Pregnancy lost",
              "selected": false
            }
          ]
        }
      ]
    },
    {
      "topic": "Infertility",
      "data": [{
        "index":3,
        "data": [
          {
            "id": "21",
            "story": "Emotions surrounding",
            "selected": false
          },
          {
            "id": "22",
            "story": "UII Hormones",
            "selected": false
          },
          {
            "id": "23",
            "story": "IVF",
            "selected": false
          },
          {
            "id": "24",
            "story": "Gestational diabetes",
            "selected": false
          },
          {
            "id": "25",
            "story": "Genetic testing",
            "selected": false
          },
          {
            "id": "26",
            "story": "Pregnancy over 40",
            "selected": false
          },
          {
            "id": "27",
            "story": "Pregnancy lost",
            "selected": false
          }
        ]
      }]
    },
    {
      "topic": "Career",
      "data": [{
        "index":4,
        "data": [
          {
            "id": "28",
            "story": "Emotions surrounding",
            "selected": false
          },
          {
            "id": "29",
            "story": "UII Hormones",
            "selected": false
          },
          {
            "id": "30",
            "story": "IVF",
            "selected": false
          },
          {
            "id": "31",
            "story": "Gestational diabetes",
            "selected": false
          },
          {
            "id": "32",
            "story": "Genetic testing",
            "selected": false
          },
          {
            "id": "33",
            "story": "Pregnancy over 40",
            "selected": false
          },
          {
            "id": "34",
            "story": "Pregnancy lost",
            "selected": false
          }
        ]
      }]
    },
    {
      "topic": "Health",
      "data": [{
        "index":5,
        "data": [
          {
            "id": "35",
            "story": "Emotions surrounding",
            "selected": false
          },
          {
            "id": "36",
            "story": "UII Hormones",
            "selected": false
          },
          {
            "id": "37",
            "story": "IVF",
            "selected": false
          },
          {
            "id": "38",
            "story": "Gestational diabetes",
            "selected": false
          },
          {
            "id": "39",
            "story": "Genetic testing",
            "selected": false
          },
          {
            "id": "40",
            "story": "Pregnancy over 40",
            "selected": false
          },
          {
            "id": "41",
            "story": "Pregnancy lost",
            "selected": false
          }
        ]
      }]
    }
  ]

  return (
    <SafeAreaView style={Style().normalPage}>
      <StatusBarAndroid
        bgColor={colors.white}
        translucent={false}
      />
      <View style={styles.content}>
        <Iconify icon="ion:chevron-back"
          onPress={onBackClicked}
          height={28} width={28} color={colors.divider_or}
          style={styles.backIcon} />
        <InputLabelComponent
          noOfLine={2}
          text={'We all have a story. What’s your story?'}
          textStyle={[Style().poppinSemiBoldTextStyle, styles.weAllHaveAStory]} />

        <InputLabelComponent
          noOfLine={3}
          text={'Select one or more topics below that you have experience on and are willing to share with others!'}
          textStyle={[Style().poppinRegularTextStyle, styles.selectOneOrMore]}
        />
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={topics}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any, index: number) => index.toString() }
          renderItem={({ item,index}) => {
           return (
            <StoryList
              data={item.data}
              index={item.index}
              edit={route.params?.story ? true : false}
              size={topics.length}
            />
          )}}
          renderSectionHeader={({ section: { topic } }) => (
            <InputLabelComponent
              text={topic}
              textStyle={[Style().poppinSemiBoldTextStyle, route.params?.story ? styles.headerEditItem : styles.headerItem]}
            />
          )}
        />
         <JoinButton
          text={route.params?.story ? 'Finish & back to profile' :'Continue'}
          outerStyle={styles.continue}
          onPress={onContinueClicked} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  weAllHaveAStory: {
    marginTop: verticalScale(16),
    marginHorizontal:horizontalScale(20)
  },
  selectOneOrMore: {
    marginTop: verticalScale(12),
    textAlign: 'justify',
    marginHorizontal:horizontalScale(20)
  },
  continue: {
    position: 'absolute',
    width:Dimensions.get('window').width - horizontalScale(40),
    alignSelf:'center',
    bottom: verticalScale(64),
  },
  headerItem: {
    color: colors.ico_location,
    marginHorizontal:horizontalScale(20),
    fontSize: moderateScale(15),
    marginTop:verticalScale(20)
  },
  headerEditItem: {
    fontFamily:'Inter-Regular',
    color: colors.text_msg,
    fontWeight:'400',
    marginHorizontal:horizontalScale(20),
    fontSize: moderateScale(16),
    marginTop:verticalScale(20)
  },
  content:{
    flex: 1,
    paddingTop:verticalScale(12),
  },
  backIcon:{
    marginLeft: horizontalScale(12)
  }
});

export default StorySelectionPage;
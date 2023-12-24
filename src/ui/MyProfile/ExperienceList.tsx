import { FlatList, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageComponent from "../../appcomponents/ImageComponent";
import InputLabelComponent from "../../appcomponents/InputLabelComponent";
import WrapInputLabelComponent from "../../appcomponents/WrapInputLabelComponent";
import { colors } from "../../css/colors";
import { Style } from "../../css/styles";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Metrics";

interface Props {
    data: {}[],
    onItemClick: (item: any) => void
}

interface ItemProps {
    item: any,
    onItemClick: (item: any) => void
}

const Item = ({ item, onItemClick }: ItemProps) => (
    <TouchableOpacity onPress={() => {
        onItemClick(item);
    }}>
        <View style={styles.itemContainer}>
            <ImageComponent
                url={require('../../assets/images/splash_logo.png')}
                imgStyle={styles.itemIcon}
                resizeMode="contain"
            />
            <View style={[Style().body]}>
                <InputLabelComponent
                    text={item.subcategory}
                    noOfLine={3}
                    textStyle={[Style().poppinRegularTextStyle, styles.subcategory]}
                />
                <WrapInputLabelComponent
                    text={item.story}
                    textStyle={[Style().interRegular13TextStyle, styles.story]}
                />
                <InputLabelComponent
                    text={item.tag}
                    noOfLine={3}
                    textStyle={[Style().interRegularTextStyle, styles.tag]}
                />
            </View>
        </View>
    </TouchableOpacity>
);

const HeaderComponent = () => (
    <InputLabelComponent
        text={'Experiences'}
        textStyle={[Style().poppinSemiBoldTextStyle, styles.header]}
    />
)

const ExperienceList = ({ data, onItemClick }: Props) => {
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={HeaderComponent}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => <Item item={item} onItemClick={onItemClick} />}
                keyExtractor={(item: any) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(12),
        marginHorizontal: horizontalScale(24)
    },
    header: {
        fontSize: moderateScale(15),
        color: colors.text_msg,
        marginBottom: verticalScale(8)
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: verticalScale(8)
    },
    itemIcon: {
        width: horizontalScale(47),
        height: verticalScale(44),
        marginEnd: horizontalScale(8)
    },
    subcategory: {
        fontSize: moderateScale(15)
    },
    story: {
        marginTop: verticalScale(8)
    },
    tag: {
        fontSize: moderateScale(13),
        marginTop: verticalScale(4),
        color: colors.appPrimary
    }
});

export default ExperienceList
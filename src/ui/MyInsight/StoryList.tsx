import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../css/colors";
import InputLabelComponent from "../../appcomponents/InputLabelComponent";
import { Style } from "../../css/styles";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Metrics";

interface Props {
    data: {}[],
    index:number,
    size:number,
    edit: boolean
}

interface ItemProps {
    item: any;
    index:number;
    size:number;
    edit:boolean;
}

const Item = ({ item,index,size,edit }: ItemProps) => (
    <View style={item.selected == true ? (size-1 == index) ? edit ? styles.lastEditSelectedItem :  styles.lastSelectedItem : edit ? styles.editSelectedItem : styles.selectedItem : (size-1 == index) ? styles.lastItem: styles.item}>
        <InputLabelComponent
            text={item.story}
            noOfLine={3}
            textStyle={[Style().interRegularTextStyle, item.selected == true ? edit ? styles.editTitle : styles.title : styles.title]}
        />
    </View>
);

const StoryList = ({ data,index, size, edit}: Props) => {
    return (
        <View style={[size-1 == index ? styles.lastOuterItem : styles.outerItem ]}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                style={styles.flatListContainer}
                renderItem={({ item,index }) => <Item item={item} index={index} size={data.length} edit={edit} />}
                keyExtractor={(item: any) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        height: 80,
        width: 100,
        alignItems: 'center',
        margin: 8,
        borderRadius: 12,
        borderColor: colors.topbar_privacy_bg,
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        paddingHorizontal:horizontalScale(8),
    },
    lastItem: {
        height: 80,
        marginEnd:horizontalScale(32),
        width: 100,
        alignItems: 'center',
        margin: 8,
        borderRadius: 12,
        borderColor: colors.topbar_privacy_bg,
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        paddingHorizontal:horizontalScale(8),
    },
    selectedItem: {
        height: 80,
        width: 100,
        elevation: 8,
        alignItems: 'center',
        margin: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderColor: colors.appPrimary,
        paddingHorizontal:horizontalScale(8),
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    editSelectedItem: {
        height: 80,
        width: 100,
        elevation: 8,
        alignItems: 'center',
        margin: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderColor: colors.photo_upload,
        paddingHorizontal:horizontalScale(8),
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    lastSelectedItem: {
        height: 80,
        width: 100,
        elevation: 8,
        paddingHorizontal:horizontalScale(8),
        marginEnd:horizontalScale(32),
        alignItems: 'center',
        margin: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderColor: colors.appPrimary,
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    lastEditSelectedItem: {
        height: 80,
        width: 100,
        elevation: 8,
        paddingHorizontal:horizontalScale(8),
        marginEnd:horizontalScale(32),
        alignItems: 'center',
        margin: 8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderColor: colors.photo_upload,
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    editTitle: {
        fontSize: moderateScale(13),
        color: colors.ico_location,
        textAlign: 'center'
    },
    title: {
        fontSize: moderateScale(13),
        color: colors.text_disable_accept,
        textAlign: 'center'
    },
    outerItem:{
        paddingBottom:0
    },
    lastOuterItem:{
        paddingBottom:verticalScale(120)
    },
    flatListContainer:{
        paddingStart:horizontalScale(12)
    }
});

export default StoryList
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../appcomponents/AppBar';
import CheckBoxComponent from '../../appcomponents/CheckBoxComponent';
import JoinButton from '../../appcomponents/JoinButton';
import StatusBarAndroid from '../../appcomponents/StatusBarAndroid';
import TextInputComponent from '../../appcomponents/TextInputComponent';
import WrapInputLabelComponent from '../../appcomponents/WrapInputLabelComponent';
import { colors } from '../../css/colors';
import { Style } from '../../css/styles';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics';

interface Props {
    onClosed: () => any
}

interface ItemProps {
    item: any
}

const SelectLanguages = ({ onClosed }: Props) => {

    const [switchEnabled, setSwitchEnabled] = useState(false);

    // const [selectedLanguages,setSelectedLanguages] = useState([]);

    const selectedLanguages = [
        {
            "name": "English",
            "lang": "English",
            "selected": true
        },
        {
            "name": "Spanish",
            "lang": "Spanish",
            "selected": true
        }
    ];

    const unselectedLanguages = [
        {

            "name": "Abkhaz",
            "nativeName": "аҧсуа",
            "selected": false
        },
        {
            "name": "Afar",
            "nativeName": "Afaraf",
            "selected": false
        },
        {
            "name": "Afrikaans",
            "nativeName": "Afrikaans",
            "selected": false
        },
        {
            "name": "Akan",
            "nativeName": "Akan",
            "selected": false
        },
        {
            "name": "Albanian",
            "nativeName": "Shqip",
            "selected": false
        },
        {
            "name": "Amharic",
            "nativeName": "አማርኛ",
            "selected": false
        },
        {
            "name": "Arabic",
            "nativeName": "العربية",
            "selected": false
        },
        {
            "name": "Aragonese",
            "nativeName": "Aragonés",
            "selected": false
        },
        {
            "name": "Armenian",
            "nativeName": "Հայերեն",
            "selected": false
        },
        {
            "name": "Assamese",
            "nativeName": "অসমীয়া",
            "selected": false
        },
        {
            "name": "Avaric",
            "nativeName": "авар мацӀ, магӀарул мацӀ",
            "selected": false
        },
        {
            "name": "Avestan",
            "nativeName": "avesta",
            "selected": false
        },
        {
            "name": "Aymara",
            "nativeName": "aymar aru",
            "selected": false
        },
        {
            "name": "Azerbaijani",
            "nativeName": "azərbaycan dili",
            "selected": false
        },
        {
            "name": "Bambara",
            "nativeName": "bamanankan",
            "selected": false
        },
        {
            "name": "Bashkir",
            "nativeName": "башҡорт теле",
            "selected": false
        },
        {
            "name": "Basque",
            "nativeName": "euskara, euskera",
            "selected": false
        },
        {
            "name": "Belarusian",
            "nativeName": "Беларуская",
            "selected": false
        },
        {
            "name": "Bengali",
            "nativeName": "বাংলা",
            "selected": false
        },
        {
            "name": "Bihari",
            "nativeName": "भोजपुरी",
            "selected": false
        },
        {
            "name": "Bislama",
            "nativeName": "Bislama",
            "selected": false
        },
        {
            "name": "Bosnian",
            "nativeName": "bosanski jezik",
            "selected": false
        },
        {
            "name": "Breton",
            "nativeName": "brezhoneg",
            "selected": false
        },
        {
            "name": "Bulgarian",
            "nativeName": "български език",
            "selected": false
        },
        {
            "name": "Burmese",
            "nativeName": "ဗမာစာ",
            "selected": false
        },
        {
            "name": "Catalan; Valencian",
            "nativeName": "Català",
            "selected": false
        },
        {
            "name": "Chamorro",
            "nativeName": "Chamoru",
            "selected": false
        },
        {
            "name": "Chechen",
            "nativeName": "нохчийн мотт",
            "selected": false
        },
        {
            "name": "Chichewa; Chewa; Nyanja",
            "nativeName": "chiCheŵa, chinyanja",
            "selected": false
        },
        {
            "name": "Chinese",
            "nativeName": "中文 (Zhōngwén), 汉语, 漢語",
            "selected": false
        },
        {
            "name": "Chuvash",
            "nativeName": "чӑваш чӗлхи",
            "selected": false
        },
        {
            "name": "Cornish",
            "nativeName": "Kernewek",
            "selected": false
        },
        {
            "name": "Corsican",
            "nativeName": "corsu, lingua corsa",
            "selected": false
        },
        {
            "name": "Cree",
            "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ",
            "selected": false
        },
        {
            "name": "Croatian",
            "nativeName": "hrvatski",
            "selected": false
        },
        {
            "name": "Czech",
            "nativeName": "česky, čeština",
            "selected": false
        },
        {
            "name": "Danish",
            "nativeName": "dansk",
            "selected": false
        },
        {
            "name": "Divehi; Dhivehi; Maldivian;",
            "nativeName": "ދިވެހި",
            "selected": false
        },
        {
            "name": "Dutch",
            "nativeName": "Nederlands, Vlaams",
            "selected": false
        },
        {
            "name": "English",
            "nativeName": "English",
            "selected": false
        },
        {
            "name": "Esperanto",
            "nativeName": "Esperanto",
            "selected": false
        },
        {
            "name": "Estonian",
            "nativeName": "eesti, eesti keel",
            "selected": false
        },
        {
            "name": "Ewe",
            "nativeName": "Eʋegbe",
            "selected": false
        },
        {
            "name": "Faroese",
            "nativeName": "føroyskt",
            "selected": false
        },
        {
            "name": "Fijian",
            "nativeName": "vosa Vakaviti",
            "selected": false
        },
        {
            "name": "Finnish",
            "nativeName": "suomi, suomen kieli",
            "selected": false
        },
        {
            "name": "French",
            "nativeName": "français, langue française",
            "selected": false
        },
        {
            "name": "Fula; Fulah; Pulaar; Pular",
            "nativeName": "Fulfulde, Pulaar, Pular",
            "selected": false
        },
        {
            "name": "Galician",
            "nativeName": "Galego",
            "selected": false
        },
        {
            "name": "Georgian",
            "nativeName": "ქართული",
            "selected": false
        },
        {
            "name": "German",
            "nativeName": "Deutsch",
            "selected": false
        },
        {
            "name": "Greek, Modern",
            "nativeName": "Ελληνικά",
            "selected": false
        },
        {
            "name": "Guaraní",
            "nativeName": "Avañeẽ",
            "selected": false
        },
        {
            "name": "Gujarati",
            "nativeName": "ગુજરાતી",
            "selected": false
        },
        {
            "name": "Haitian; Haitian Creole",
            "nativeName": "Kreyòl ayisyen",
            "selected": false
        },
        {
            "name": "Hausa",
            "nativeName": "Hausa, هَوُسَ",
            "selected": false
        },
        {
            "name": "Hebrew (modern)",
            "nativeName": "עברית",
            "selected": false
        },
        {
            "name": "Herero",
            "nativeName": "Otjiherero",
            "selected": false
        },
        {
            "name": "Hindi",
            "nativeName": "हिन्दी, हिंदी",
            "selected": false
        },
        {
            "name": "Hiri Motu",
            "nativeName": "Hiri Motu",
            "selected": false
        },
        {
            "name": "Hungarian",
            "nativeName": "Magyar",
            "selected": false
        },
        {
            "name": "Interlingua",
            "nativeName": "Interlingua",
            "selected": false
        },
        {
            "name": "Indonesian",
            "nativeName": "Bahasa Indonesia",
            "selected": false
        },
        {
            "name": "Interlingue",
            "nativeName": "Originally called Occidental; then Interlingue after WWII",
            "selected": false
        },
        {
            "name": "Irish",
            "nativeName": "Gaeilge",
            "selected": false
        },
        {
            "name": "Igbo",
            "nativeName": "Asụsụ Igbo",
            "selected": false
        },
        {
            "name": "Inupiaq",
            "nativeName": "Iñupiaq, Iñupiatun",
            "selected": false
        },
        {
            "name": "Ido",
            "nativeName": "Ido",
            "selected": false
        },
        {
            "name": "Icelandic",
            "nativeName": "Íslenska",
            "selected": false
        },
        {
            "name": "Italian",
            "nativeName": "Italiano",
            "selected": false
        },
        {
            "name": "Inuktitut",
            "nativeName": "ᐃᓄᒃᑎᑐᑦ",
            "selected": false
        },
        {
            "name": "Japanese",
            "nativeName": "日本語 (にほんご／にっぽんご)",
            "selected": false
        },
        {
            "name": "Javanese",
            "nativeName": "basa Jawa",
            "selected": false
        },
        {
            "name": "Kalaallisut, Greenlandic",
            "nativeName": "kalaallisut, kalaallit oqaasii",
            "selected": false
        },
        {
            "name": "Kannada",
            "nativeName": "ಕನ್ನಡ",
            "selected": false
        },
        {
            "name": "Kanuri",
            "nativeName": "Kanuri",
            "selected": false
        },
        {
            "name": "Kashmiri",
            "nativeName": "कश्मीरी, كشميري‎",
            "selected": false
        },
        {
            "name": "Kazakh",
            "nativeName": "Қазақ тілі",
            "selected": false
        },
        {
            "name": "Khmer",
            "nativeName": "ភាសាខ្មែរ",
            "selected": false
        },
        {
            "name": "Kikuyu, Gikuyu",
            "nativeName": "Gĩkũyũ",
            "selected": false
        },
        {
            "name": "Kinyarwanda",
            "nativeName": "Ikinyarwanda",
            "selected": false
        },
        {
            "name": "Kirghiz, Kyrgyz",
            "nativeName": "кыргыз тили",
            "selected": false
        },
        {
            "name": "Komi",
            "nativeName": "коми кыв",
            "selected": false
        },
        {
            "name": "Kongo",
            "nativeName": "KiKongo",
            "selected": false
        },
        {
            "name": "Korean",
            "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)",
            "selected": false
        },
        {
            "name": "Kurdish",
            "nativeName": "Kurdî, كوردی‎",
            "selected": false
        },
        {
            "name": "Kwanyama, Kuanyama",
            "nativeName": "Kuanyama",
            "selected": false
        },
        {
            "name": "Latin",
            "nativeName": "latine, lingua latina",
            "selected": false
        },
        {
            "name": "Luxembourgish, Letzeburgesch",
            "nativeName": "Lëtzebuergesch",
            "selected": false
        },
        {
            "name": "Luganda",
            "nativeName": "Luganda",
            "selected": false
        },
        {
            "name": "Limburgish, Limburgan, Limburger",
            "nativeName": "Limburgs",
            "selected": false
        },
        {
            "name": "Lingala",
            "nativeName": "Lingála",
            "selected": false
        },
        {
            "name": "Lao",
            "nativeName": "ພາສາລາວ",
            "selected": false
        },
        {
            "name": "Lithuanian",
            "nativeName": "lietuvių kalba",
            "selected": false
        },
        {
            "name": "Luba-Katanga",
            "nativeName": "",
            "selected": false
        },
        {
            "name": "Latvian",
            "nativeName": "latviešu valoda",
            "selected": false
        },
        {
            "name": "Manx",
            "nativeName": "Gaelg, Gailck",
            "selected": false
        },
        {
            "name": "Macedonian",
            "nativeName": "македонски јазик",
            "selected": false
        },
        {
            "name": "Malagasy",
            "nativeName": "Malagasy fiteny",
            "selected": false
        },
        {
            "name": "Malay",
            "nativeName": "bahasa Melayu, بهاس ملايو‎",
            "selected": false
        },
        {
            "name": "Malayalam",
            "nativeName": "മലയാളം",
            "selected": false
        },
        {
            "name": "Maltese",
            "nativeName": "Malti",
            "selected": false
        },
        {
            "name": "Māori",
            "nativeName": "te reo Māori",
            "selected": false
        },
        {
            "name": "Marathi (Marāṭhī)",
            "nativeName": "मराठी",
            "selected": false
        },
        {
            "name": "Marshallese",
            "nativeName": "Kajin M̧ajeļ",
            "selected": false
        },
        {
            "name": "Mongolian",
            "nativeName": "монгол",
            "selected": false
        },
        {
            "name": "Nauru",
            "nativeName": "Ekakairũ Naoero",
            "selected": false
        },
        {
            "name": "Navajo, Navaho",
            "nativeName": "Diné bizaad, Dinékʼehǰí",
            "selected": false
        },
        {
            "name": "Norwegian Bokmål",
            "nativeName": "Norsk bokmål",
            "selected": false
        },
        {
            "name": "North Ndebele",
            "nativeName": "isiNdebele",
            "selected": false
        },
        {
            "name": "Nepali",
            "nativeName": "नेपाली",
            "selected": false
        },
        {
            "name": "Ndonga",
            "nativeName": "Owambo",
            "selected": false
        },
        {
            "name": "Norwegian Nynorsk",
            "nativeName": "Norsk nynorsk",
            "selected": false
        },
        {
            "name": "Norwegian",
            "nativeName": "Norsk",
            "selected": false
        },
        {
            "name": "Nuosu",
            "nativeName": "ꆈꌠ꒿ Nuosuhxop",
            "selected": false
        },
        {
            "name": "South Ndebele",
            "nativeName": "isiNdebele",
            "selected": false
        },
        {
            "name": "Occitan",
            "nativeName": "Occitan",
            "selected": false
        },
        {
            "name": "Ojibwe, Ojibwa",
            "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ",
            "selected": false
        },
        {
            "name": "Old Church Slavonic, Church Slavic,\nChurch Slavonic, Old Bulgarian, Old Slavonic",
            "nativeName": "ѩзыкъ словѣньскъ",
            "selected": false
        },
        {
            "name": "Oromo",
            "nativeName": "Afaan Oromoo",
            "selected": false
        },
        {
            "name": "Oriya",
            "nativeName": "ଓଡ଼ିଆ",
            "selected": false
        },
        {
            "name": "Ossetian, Ossetic",
            "nativeName": "ирон æвзаг",
            "selected": false
        },
        {
            "name": "Panjabi, Punjabi",
            "nativeName": "ਪੰਜਾਬੀ, پنجابی‎",
            "selected": false
        },
        {
            "name": "Pāli",
            "nativeName": "पाऴि",
            "selected": false
        },
        {
            "name": "Persian",
            "nativeName": "فارسی",
            "selected": false
        },
        {
            "name": "Polish",
            "nativeName": "polski",
            "selected": false
        },
        {
            "name": "Pashto, Pushto",
            "nativeName": "پښتو",
            "selected": false
        },
        {
            "name": "Portuguese",
            "nativeName": "Português",
            "selected": false
        },
        {
            "name": "Quechua",
            "nativeName": "Runa Simi, Kichwa",
            "selected": false
        },
        {
            "name": "Romansh",
            "nativeName": "rumantsch grischun",
            "selected": false
        },
        {
            "name": "Kirundi",
            "nativeName": "kiRundi",
            "selected": false
        },
        {
            "name": "Romanian, Moldavian, Moldovan",
            "nativeName": "română",
            "selected": false
        },
        {
            "name": "Russian",
            "nativeName": "русский язык",
            "selected": false
        },
        {
            "name": "Sanskrit (Saṁskṛta)",
            "nativeName": "संस्कृतम्",
            "selected": false
        },
        {
            "name": "Sardinian",
            "nativeName": "sardu",
            "selected": false
        },
        {
            "name": "Sindhi",
            "nativeName": "सिन्धी, سنڌي، سندھی‎",
            "selected": false
        },
        {
            "name": "Northern Sami",
            "nativeName": "Davvisámegiella",
            "selected": false
        },
        {
            "name": "Samoan",
            "nativeName": "gagana faa Samoa",
            "selected": false
        },
        {
            "name": "Sango",
            "nativeName": "yângâ tî sängö",
            "selected": false
        },
        {
            "name": "Serbian",
            "nativeName": "српски језик",
            "selected": false
        },
        {
            "name": "Scottish Gaelic; Gaelic",
            "nativeName": "Gàidhlig",
            "selected": false
        },
        {
            "name": "Shona",
            "nativeName": "chiShona",
            "selected": false
        },
        {
            "name": "Sinhala, Sinhalese",
            "nativeName": "සිංහල",
            "selected": false
        },
        {
            "name": "Slovak",
            "nativeName": "slovenčina",
            "selected": false
        },
        {
            "name": "Slovene",
            "nativeName": "slovenščina",
            "selected": false
        },
        {
            "name": "Somali",
            "nativeName": "Soomaaliga, af Soomaali",
            "selected": false
        },
        {
            "name": "Southern Sotho",
            "nativeName": "Sesotho",
            "selected": false
        },
        {
            "name": "Spanish; Castilian",
            "nativeName": "español, castellano",
            "selected": false
        },
        {
            "name": "Sundanese",
            "nativeName": "Basa Sunda",
            "selected": false
        },
        {
            "name": "Swahili",
            "nativeName": "Kiswahili",
            "selected": false
        },
        {
            "name": "Swati",
            "nativeName": "SiSwati",
            "selected": false
        },
        {
            "name": "Swedish",
            "nativeName": "svenska",
            "selected": false
        },
        {
            "name": "Tamil",
            "nativeName": "தமிழ்",
            "selected": false
        },
        {
            "name": "Telugu",
            "nativeName": "తెలుగు",
            "selected": false
        },
        {
            "name": "Tajik",
            "nativeName": "тоҷикӣ, toğikī, تاجیکی‎",
            "selected": false
        },
        {
            "name": "Thai",
            "nativeName": "ไทย",
            "selected": false
        },
        {
            "name": "Tigrinya",
            "nativeName": "ትግርኛ",
            "selected": false
        },
        {
            "name": "Tibetan Standard, Tibetan, Central",
            "nativeName": "བོད་ཡིག",
            "selected": false
        },
        {
            "name": "Turkmen",
            "nativeName": "Türkmen, Түркмен",
            "selected": false
        },
        {
            "name": "Tagalog",
            "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔",
            "selected": false
        },
        {
            "name": "Tswana",
            "nativeName": "Setswana",
            "selected": false
        },
        {
            "name": "Tonga (Tonga Islands)",
            "nativeName": "faka Tonga",
            "selected": false
        },
        {
            "name": "Turkish",
            "nativeName": "Türkçe",
            "selected": false
        },
        {
            "name": "Tsonga",
            "nativeName": "Xitsonga",
            "selected": false
        },
        {
            "name": "Tatar",
            "nativeName": "татарча, tatarça, تاتارچا‎",
            "selected": false
        },
        {
            "name": "Twi",
            "nativeName": "Twi",
            "selected": false
        },
        {
            "name": "Tahitian",
            "nativeName": "Reo Tahiti",
            "selected": false
        },
        {
            "name": "Uighur, Uyghur",
            "nativeName": "Uyƣurqə, ئۇيغۇرچە‎",
            "selected": false
        },
        {
            "name": "Ukrainian",
            "nativeName": "українська",
            "selected": false
        },
        {
            "name": "Urdu",
            "nativeName": "اردو",
            "selected": false
        },
        {
            "name": "Uzbek",
            "nativeName": "zbek, Ўзбек, أۇزبېك‎",
            "selected": false
        },
        {
            "name": "Venda",
            "nativeName": "Tshivenḓa",
            "selected": false
        },
        {
            "name": "Vietnamese",
            "nativeName": "Tiếng Việt",
            "selected": false
        },
        {
            "name": "Volapük",
            "nativeName": "Volapük",
            "selected": false
        },
        {
            "name": "Walloon",
            "nativeName": "Walon",
            "selected": false
        },
        {
            "name": "Welsh",
            "nativeName": "Cymraeg",
            "selected": false
        },
        {
            "name": "Wolof",
            "nativeName": "Wollof",
            "selected": false
        },
        {
            "name": "Western Frisian",
            "nativeName": "Frysk",
            "selected": false
        },
        {
            "name": "Xhosa",
            "nativeName": "isiXhosa",
            "selected": false
        },
        {
            "name": "Yiddish",
            "nativeName": "ייִדיש",
            "selected": false
        },
        {
            "name": "Yoruba",
            "nativeName": "Yorùbá",
            "selected": false
        },
        {
            "name": "Zhuang, Chuang",
            "nativeName": "Saɯ cueŋƅ, Saw cuengh",
            "selected": false
        }
    ];

    const onBackClicked = () => {
        onClosed();
    }

    const LanguageItem = ({ item }: ItemProps) => (
        <TouchableOpacity onPress={() => { }}>
            <View style={styles.languageSelected}>
                <WrapInputLabelComponent
                    text={item.name}
                    textStyle={styles.languageName} />
                <CheckBoxComponent
                    checked={item.selected} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.body}>
            <StatusBarAndroid
                bgColor={colors.white}
                translucent={false} />
            <AppBar
                title={'My languages'}
                titleStyle={styles.title}
                showback={true}
                onBackClicked={onBackClicked} />
            <View style={styles.dialogHeight}>
                <WrapInputLabelComponent
                    text={'Select up to 3 languages'}
                    textStyle={styles.selectUpto3} />
                <TextInputComponent
                    onChangeText={(text) => { }}
                    inputStyle={styles.searchInput}
                    textStyle={styles.textStyle}
                    inputOuterStyle={styles.searchInputOuter}
                    leftIcon={<Iconify icon="basil:search-outline"
                        height={verticalScale(28)}
                        width={horizontalScale(28)}
                        color={colors.chip_option_text} />}
                    placeHolderText={'Search for language'}
                    placeholderTextColor={colors.chip_option_text} />
                <ScrollView
                    bounces={false}>
                    <View >
                        <View style={styles.selectedItemContainer}>
                            {selectedLanguages.length > 0 ?
                                selectedLanguages.map((lang, index) =>
                                    <LanguageItem key={index.toString()} item={lang} />
                                )
                                : null}
                        </View>
                        <View style={styles.horizontalDivider} />
                        <View style={styles.selectedItemBottomContainer}>
                            {unselectedLanguages.length > 0 ?
                                unselectedLanguages.map((lang, index) =>
                                    <LanguageItem key={index.toString()} item={lang} />
                                )
                                : null}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.saveOverlay}>
            <View style={styles.horizontalDivider} />
                <View style={styles.saveContainer}>
                    <JoinButton
                        text='Save'
                        outerStyle={styles.saveButton}
                        onPress={() => { }} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: moderateScale(17),
        color: colors.appPrimary
    },
    selectUpto3: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: moderateScale(13),
        color: colors.text_msg,
        alignSelf: "center"
    },
    horizontalDivider: {
        height: verticalScale(0.5),
        backgroundColor: colors.divider_vertical
    },
    saveButton: {
        alignSelf: 'center',
        paddingHorizontal: horizontalScale(24),
        marginVertical: verticalScale(24)
    },
    saveContainer: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF90',
        justifyContent: 'center'
    },
    searchInputOuter: {
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(16)
    },
    searchInput: {
        borderWidth: 1,
        borderColor: colors.border_about,
        backgroundColor: colors.border_about_65,
        borderRadius: 20
    },
    languageName: {
        fontFamily: 'Inter-Light',
        fontWeight: '400',
        fontSize: moderateScale(13),
        color: colors.black
    },
    languageSelected: {
        paddingVertical: verticalScale(4),
        marginHorizontal: horizontalScale(24),
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row'
    },
    selectedItemContainer: {
        marginVertical: verticalScale(12)
    },
    selectedItemBottomContainer: {
        marginTop: verticalScale(12),
        paddingBottom:verticalScale(100)
    },
    textStyle: {
        fontFamily: 'Inter-Light',
        fontWeight: '400',
        fontSize: moderateScale(13),
        color: colors.chip_option_text
    },
    dialogHeight: {
        height: Dimensions.get('window').height/2 + (Dimensions.get('window').height/2 )/2
    },
    saveOverlay:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0
    }
});

export default SelectLanguages;
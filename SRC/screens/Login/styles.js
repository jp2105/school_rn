import { StyleSheet } from 'react-native';
import Colors from '../../Constants/colors';
import { font_size, hp, wp, normalize } from '../../Constants/globalVariables'
export default StyleSheet.create({
    upperView: {
        flex: 1,
        backgroundColor: Colors.pewter,
        // alignItems: "center",
    },
    schoolName: {
        fontSize: font_size.xlarge,
        fontWeight: "bold",
        color: Colors.yellow,
        // marginLeft: wp(6),
        backgroundColor: "rgba(56, 68, 78, 0.5)",
        padding: hp(1),

    },
    schoolNameView: {
        flex: 1
    },
    image: {
        flex: 1,
        // height: "10%"
    },
    heading: {
        fontSize: font_size.large,
        fontWeight: "500",
        color: Colors.blueGray,
    },
    lowerView: {
        backgroundColor: Colors.pewter,
        flex: 1,
        borderTopLeftRadius: wp(10),
        borderTopRightRadius: wp(10),
        paddingTop: hp(3),
        paddingHorizontal: wp(6),
    }
})
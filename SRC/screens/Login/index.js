import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import styles from './styles';
import globalStyle from '../../Constants/globalStyle';
const LoginScreen = (props) => {
    return (
        <View style={globalStyle.container}>
            <View style={styles.upperView}>
                <ImageBackground source={require('../../Assets/IMG/loginBG.jpeg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.schoolNameView}>
                        <Text style={styles.schoolName}>
                            JP School
                        </Text>
                    </View>
                    <View style={styles.lowerView}>
                        <Text style={styles.heading}>
                            Login
                        </Text>
                    </View>
                </ImageBackground>

            </View>
        </View>
    )
}

export default LoginScreen;
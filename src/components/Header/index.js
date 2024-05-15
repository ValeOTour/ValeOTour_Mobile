import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';

const DadosProps = {
    title: string = ""
}

export const Header = ({ title } = DadosProps) => {
    const navigation = any = useNavigation();

    return (
        <View style={styles.containerMenu}>
            <View style={styles.menuLeftArea}>
                <TouchableOpacity
                    style={styles.btnLeft}
                    onPress={() => navigation.push("Home")}
                >
                    <Ionicons name="chevron-back-outline" size={18} color={colors.white} ></Ionicons>
                </TouchableOpacity>
                <Text style={styles.menuTitle}>{title}</Text>
            </View>

            <TouchableOpacity>
                <Ionicons name='information-circle-outline' size={26} color={colors.lightPurple}></Ionicons>
            </TouchableOpacity>

        </View>


    )

}
export default Header;
import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function Profile() {



    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);


    const user = { ...userData.dados } || {}

    async function listUserData() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`valeOTour/usuarios/listar_id.php?id=${user}`);
            setUserData(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);

        }
    }

    useEffect(() => {
        listUserData();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listUserData();
    };



    return (
        <View>
            {isLoading ? <Load /> :
                <ScrollView showsVerticalScrollIndicator={false} 
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                >
                    <View style={styles.container}>
                        <View style={styles.containerHeader}>
                            <TouchableOpacity
                                style={styles.btnSettings}
                            >
                                <Ionicons name='settings-outline' color={colors.mediumGray} size={25}></Ionicons>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerUserProfile}>
                            <View style={styles.imageBorder}>
                                <View style={styles.userImage}>
                                    <Ionicons name='person' color={colors.lightBlue} size={30}></Ionicons>
                                </View>
                            </View>
                            <Text style={styles.userNameText}>{user.nome}</Text>
                            <Text style={styles.userTypeText}>Cliente</Text>
                        </View>

                        <View style={styles.containerUserContent}>
                            <Text style={styles.profileSectionTitle}>Informações Gerais</Text>

                            <View style={styles.containerSectionContent}>
                                <View>
                                    <Text style={styles.userInfoTitle}>E-mail</Text>
                                    <Text style={styles.userInfoText}>{user.email}</Text>
                                </View>
                                {/* <View>
                                    <Text style={styles.userInfoTitle}>Telefone</Text>
                                    <Text style={styles.userInfoText}>{user.telefone}</Text>
                                </View> */}
                            </View>

                            <Text style={styles.profileSectionTitle}>Últimos agendamentos</Text>
                            <View style={styles.containerCardScheduling}>
                                <View style={styles.cardScheduling}>
                                    <View style={styles.cardSchedulingIcon}>
                                        <Ionicons name='calendar-outline' color={colors.mainColor} size={18}></Ionicons>
                                    </View>
                                    <View style={styles.cardSchedulingContent}>
                                        <Text style={styles.userInfoTitle}>Rota do chá</Text>
                                        <Text style={styles.userInfoText}>20/06/2024</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            }
        </View>

    )
}
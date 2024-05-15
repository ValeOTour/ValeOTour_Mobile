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

export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    // const [usu, setUsu] = useState('');

    const user = { ...userData.dados } || {}

    async function listUserData() {

        try {
            const userID = await AsyncStorage.getItem('@user');
            const res = await api.get(`valeOTour/usuarios/listar_id.php?id=${userID}`);
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }>
                    <View style={styles.container}>
                        <View style={styles.containerHeader}>
                            <View style={styles.containerTopButtonsHeader}>
                                <View style={styles.containerProfileButtonHeader}>
                                    <TouchableOpacity style={styles.btnProfileHeader}
                                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    >
                                        <Ionicons name='person' color={colors.white} size={16}></Ionicons>
                                    </TouchableOpacity>
                                    <Text style={{ color: colors.white, fontFamily: fonts.medium, fontSize: 14 }}>Olá,
                                        <Text style={
                                            { color: colors.mainGreen, fontFamily: fonts.bold }}> {user.nome}!
                                        </Text>
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => console.log(userData)}
                                >
                                    <Ionicons name='notifications-outline' color={colors.white} size={25}></Ionicons>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.containerMainText}>
                                <Text style={styles.mainText}>Para onde</Text>
                                <View style={{ paddingLeft: 16 }}>
                                    <Text style={styles.mainText}>você irá hoje?</Text>
                                </View>
                            </View>

                            <View style={styles.containerGroupButtons}>
                                <View style={styles.containerTourismTypeButtons}>
                                    <TouchableOpacity style={styles.btnTourismType}>
                                        <Ionicons name='book-outline' size={30} color={colors.lightBlue}></Ionicons>
                                    </TouchableOpacity>
                                    <Text style={styles.tourismTypeText}>Histórico</Text>
                                </View>
                                <View style={styles.containerTourismTypeButtons}>
                                    <TouchableOpacity
                                        style={styles.btnTourismType}
                                        onPress={() => navigation.push("Gastronomic")}
                                    >
                                        <Ionicons name='restaurant-outline' size={30} color={colors.lightBlue}></Ionicons>
                                    </TouchableOpacity>
                                    <Text style={styles.tourismTypeText}>Gastronômico</Text>
                                </View>
                                <View style={styles.containerTourismTypeButtons}>
                                    <TouchableOpacity
                                        style={styles.btnTourismType}
                                        onPress={() => navigation.push("Chat")}
                                    >
                                        <Ionicons name='leaf-outline' size={30} color={colors.lightBlue}></Ionicons>
                                    </TouchableOpacity>
                                    <Text style={styles.tourismTypeText}>Ecológico</Text>
                                </View>
                                <View style={styles.containerTourismTypeButtons}>
                                    <TouchableOpacity style={styles.btnTourismType}>
                                        <Ionicons name='bicycle-outline' size={30} color={colors.lightBlue}></Ionicons>
                                    </TouchableOpacity>
                                    <Text style={styles.tourismTypeText}>Aventura</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.containerMainContent}>
                            <Text style={styles.titleMainContent}>Populares</Text>

                            <View style={styles.containerMostPopularPlacesFilters}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    <View style={styles.containerFilters}>
                                        <TouchableOpacity style={{
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            borderRadius: 100,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: colors.mainGreen
                                        }}>
                                            <Text style={{
                                                fontFamily: fonts.bold,
                                                fontSize: 13,
                                                color: colors.white
                                            }}>Todos</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btnFilter}>
                                            <Text style={styles.btnFilterText}>Alimentação</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btnFilter}>
                                            <Text style={styles.btnFilterText}>Hospedagem</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btnFilter}>
                                            <Text style={styles.btnFilterText}>Compras</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btnFilter}>
                                            <Text style={styles.btnFilterText}>Lazer</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={styles.containerCardPlaces}>
                                <View style={styles.cardPlaces}>
                                    <Image style={styles.cardPlacesImg} source={require('../../assets/gaivota-place.jpg')}></Image>
                                    <View style={styles.cardPlacesBottom}>
                                        <Text style={styles.cardPlacesText}>Restaurante e Lanchonete Gaivota</Text>
                                        <View style={styles.cardPlacesRating}>
                                            <Text style={styles.cardPlacesRatingText}>4,50</Text>
                                            <Ionicons name='star' color={colors.brighterBlue} size={11}></Ionicons>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.cardPlaces}>
                                    <Image style={styles.cardPlacesImg} source={require('../../assets/gaivota-place.jpg')}></Image>
                                    <View style={styles.cardPlacesBottom}>
                                        <Text style={styles.cardPlacesText}>Restaurante e Lanchonete Gaivota</Text>
                                        <View style={styles.cardPlacesRating}>
                                            <Text style={styles.cardPlacesRatingText}>4,50</Text>
                                            <Ionicons name='star' color={colors.brighterBlue} size={11}></Ionicons>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.cardPlaces}>
                                    <Image style={styles.cardPlacesImg} source={require('../../assets/gaivota-place.jpg')}></Image>
                                    <View style={styles.cardPlacesBottom}>
                                        <Text style={styles.cardPlacesText}>Restaurante e Lanchonete Gaivota</Text>
                                        <View style={styles.cardPlacesRating}>
                                            <Text style={styles.cardPlacesRatingText}>4,50</Text>
                                            <Ionicons name='star' color={colors.brighterBlue} size={11}></Ionicons>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.cardPlaces}>
                                    <Image style={styles.cardPlacesImg} source={require('../../assets/gaivota-place.jpg')}></Image>
                                    <View style={styles.cardPlacesBottom}>
                                        <Text style={styles.cardPlacesText}>Restaurante e Lanchonete Gaivota</Text>
                                        <View style={styles.cardPlacesRating}>
                                            <Text style={styles.cardPlacesRatingText}>4,50</Text>
                                            <Ionicons name='star' color={colors.brighterBlue} size={11}></Ionicons>
                                        </View>
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
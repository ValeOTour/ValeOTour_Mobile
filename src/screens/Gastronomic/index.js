import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Header from '../../components/Header';

export default function Gastronomic() {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Header title='Turismo Gastronômico'></Header>

                    <View style={styles.containerSearch}>
                        <View style={styles.containerInputSearch}>
                            <Ionicons name='search-outline' color={colors.lightBlue} size={20}></Ionicons>
                            <TextInput style={styles.inputSearch} placeholder='Toque para pesquisar' placeholderTextColor={colors.lightBlue}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.btnFilter}>
                            <Ionicons name='filter-outline' color={colors.mainColor} size={20}></Ionicons>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerMainContent}>
                    <Text style={styles.mainContentTitle}>Descubra</Text>
                    <Text style={styles.mainContentSubtitle}>Melhor avaliado</Text>

                    <View style={styles.mainCard}>
                        <Image style={styles.mainCardImage} source={require('../../assets/gaivota-place.jpg')}></Image>
                        <View style={styles.mainCardContentArea}>
                            <View style={styles.mainCardRating}>
                                <Text style={styles.mainCardRatingText}>5,0</Text>
                                <Ionicons name='star' size={24} color={colors.brighterBlue}></Ionicons>
                            </View>
                            <View style={styles.mainCardContentBottom}>
                                <Text style={styles.mainCardPlaceName}>Restaurante e Lanchonete Gaivota</Text>
                                <Text style={styles.mainCardPlaceLocation}>Rua xxx, Bairro xxx, 99</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerSuggestion}>
                        <Text style={styles.suggestionTitle}>Sugestões</Text>

                        <View style={styles.containerCardSuggestion}>
                            <View style={styles.cardSuggestion}>
                                <Image source={require('../../assets/gaivota-place.jpg')} style={styles.cardSuggestionImage}></Image>
                                <View style={styles.cardSuggestionInfo}>
                                    <Text style={styles.cardSuggestionName}>Restaurante e Lanchonete Gaivota</Text>
                                    <Text style={styles.cardSuggestionLocation}>Rua xxx, Bairro xxx, 99</Text>
                                    <View style={styles.cardSuggestionBottom}>
                                        <View style={styles.cardSuggestionRating}>
                                            <Ionicons name='star' size={13} color={colors.brighterBlue}></Ionicons>
                                            <Text style={styles.cardSuggestionRatingText}>4,50</Text>
                                        </View>
                                        <View style={styles.cardSuggestionStatus}>
                                            <Text style={styles.cardSuggestionStatusText}>Aberto</Text>
                                            <Ionicons name='time-outline' size={13} color={colors.mainGreen}></Ionicons>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.containerCardSuggestion}>
                            <View style={styles.cardSuggestion}>
                                <Image source={require('../../assets/gaivota-place.jpg')} style={styles.cardSuggestionImage}></Image>
                                <View style={styles.cardSuggestionInfo}>
                                    <Text style={styles.cardSuggestionName}>Restaurante e Lanchonete Gaivota</Text>
                                    <Text style={styles.cardSuggestionLocation}>Rua xxx, Bairro xxx, 99</Text>
                                    <View style={styles.cardSuggestionBottom}>
                                        <View style={styles.cardSuggestionRating}>
                                            <Ionicons name='star' size={13} color={colors.brighterBlue}></Ionicons>
                                            <Text style={styles.cardSuggestionRatingText}>4,50</Text>
                                        </View>
                                        <View style={styles.cardSuggestionStatus}>
                                            <Text style={styles.cardSuggestionStatusText}>Aberto</Text>
                                            <Ionicons name='time-outline' size={13} color={colors.mainGreen}></Ionicons>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View style={styles.containerCardSuggestion}>
                            <View style={styles.cardSuggestion}>
                                <Image source={require('../../assets/gaivota-place.jpg')} style={styles.cardSuggestionImage}></Image>
                                <View style={styles.cardSuggestionInfo}>
                                    <Text style={styles.cardSuggestionName}>Restaurante e Lanchonete Gaivota</Text>
                                    <Text style={styles.cardSuggestionLocation}>Rua xxx, Bairro xxx, 99</Text>
                                    <View style={styles.cardSuggestionBottom}>
                                        <View style={styles.cardSuggestionRating}>
                                            <Ionicons name='star' size={13} color={colors.brighterBlue}></Ionicons>
                                            <Text style={styles.cardSuggestionRatingText}>4,50</Text>
                                        </View>
                                        <View style={styles.cardSuggestionStatus}>
                                            <Text style={styles.cardSuggestionStatusText}>Aberto</Text>
                                            <Ionicons name='time-outline' size={13} color={colors.mainGreen}></Ionicons>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>


                    </View>
                </View>
            </View>


        </ScrollView>
    )
}
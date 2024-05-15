import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {

    const navigation = any = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.headerChat}>
                <View style={styles.headerChatContent}>

                    <TouchableOpacity
                        // Navegação provisória
                        onPress={() => navigation.push("Home")}
                    >
                        <Ionicons name='chevron-back-outline' color={colors.brighterBlue} size={22}></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.headerChatNameText}>João Muniz</Text>
                    <TouchableOpacity>
                        <Ionicons name='calendar-outline' color={colors.brighterBlue} size={22}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerMain}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', marginBottom: 12 }}>
                    <View style={styles.messagesArea}>
                        <View style={styles.containerReceivedMessage}>
                            <View style={styles.messageReceivedArea}>
                                <Text style={styles.messageReceived}>Olá, Maria!</Text>
                                <Text style={styles.messageReceivedHour}>00:00</Text>
                            </View>
                        </View>

                        {/* Sent messages */}

                        <View style={styles.containerSentMessage}>
                            <View style={styles.messageSentArea}>
                                <Text style={styles.messageSent}>Olá, João! Eu gostaria de realizar um agendamento</Text>
                                <Text style={styles.messageSentHour}>00:01</Text>
                            </View>
                        </View>

                        <View style={styles.containerSentMessage}>
                            <View style={styles.messageSentArea}>
                                <Text style={styles.scheduleText}>Você solicitou um agendamento</Text>
                                <TouchableOpacity
                                    style={styles.btnShowMoreSchedule}
                                >
                                    <Text style={styles.btnShowMoreText}>Clique para ver mais</Text>
                                </TouchableOpacity>
                                <Text style={styles.messageSentHour}>00:05</Text>
                            </View>
                        </View>


                    </View>
                </ScrollView >

                <View style={styles.containerInputChat}>
                    <TextInput placeholder='Mensagem' style={styles.inputMessage}></TextInput>
                    <TouchableOpacity
                        style={styles.btnSendMessages}
                    >
                        <Ionicons name='chevron-forward-outline' color={colors.white} size={20}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        </View >

    )
}

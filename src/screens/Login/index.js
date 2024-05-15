import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";

import api from '../../services/api';
import colors from "../../styles/colors";

export default function Login() {
  const navigation = useNavigation();

  const [logged, setLogged] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  async function login() {
    const obj = { userEmail, userPassword };
    const res = await api.post('valeOTour/login/login.php', obj);

    if (res.data.result === 'Dados Incorretos!') {
      Alert.alert('Ops!', 'Dados Incorretos!');
    } else {
      const user = res.data.result[0];
      await AsyncStorage.setItem('@user', JSON.stringify(user.userID));

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }
  }


  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');

    if (user) {
      setLogged(1);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      setLogged(2)
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.loginPrhase}>Não importa o destino</Text>
      <View style={styles.containerLogo}>
        <Text style={{ fontSize: 26, fontFamily: 'Montserrat_700Bold', color: colors.mainColor }}>ValeOTour!</Text>
      </View>

      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Text style={styles.labelFormInput}>E-mail</Text>
          <TextInput
            style={styles.inputTextForm}
            placeholder="Digite seu e-mail"
            placeholderTextColor={colors.formLabelColor}
            value={userEmail}
            onChangeText={(userEmail) => setUserEmail(userEmail)}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.labelFormInput}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputTextForm}
            placeholder="Digite sua senha"
            placeholderTextColor={colors.formLabelColor}
            value={userPassword}
            onChangeText={(userPassword) => setUserPassword(userPassword)}
          />
        </View>




      </View>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={login}
      >
        <Text style={styles.btnLoginText}>ENTRAR</Text>
      </TouchableOpacity>
      <View style={styles.containerBtnRegister}>
        <Text style={styles.registerText}>Não tem conta?</Text>
        <TouchableOpacity
          onPress={() => navigation.push('userRegister', { id_reg: '0' })}
        >
          <Text style={styles.btnRegisterText}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
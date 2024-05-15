import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from "react";
import { styles } from './style';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Success } from '../../lotties/Success';
import api from '../../services/api';
import colors from "../../styles/colors";

ParamList = {
  Detail: {
    id_reg: string,
  }
};

export default function Register() {

  const route = useRoute<RouteProp<ParamList; 'Detail';
  const id_reg = route?.params?.id_reg;
  const navigation = useNavigation();


  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);


  async function userRegister() {
    if (!userName || !userEmail || !userPassword) {
      showMessage({
        message: "Erro ao cadastrar-se",
        description: 'Preencha os todos os campos!',
        type: "warning",
      });
      return;
    }

    try {
      const obj = {
        regID: id_reg,
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userType: 'Cliente'
      }

      const res = await api.post('valeOTour/usuarios/salvar.php', obj);
      console.log(res.data.success)

      if (res.data.success === false) {
        showMessage({
          message: "Erro ao Salvar",
          description: res.data.mensagem,
          type: "warning",
          duration: 3000,
        });

        return;
      }

      setSucess(true);
      showMessage({
        message: "Salvo com Sucesso",
        description: "Registro Salvo",
        type: "success",
        duration: 800,
      });
      navigation.push("Login")

    } catch (error) {
      console.log(error)
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSucess(false);
    }
  }

if (loading === true) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
        </View>
    )
}

if (sucess) {
    return <Success />
}



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push('Login')}>
          <Ionicons name={'chevron-back'} size={24} color={colors.lightPurple}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.btnHeaderText}>Cadastro</Text>
      </View>
      <Text style={styles.loginPrhase}>Não importa o destino</Text>
      <View style={styles.containerLogo}>
        <Text style={{ fontSize: 26, fontFamily: 'Montserrat_700Bold', color: colors.mainColor }}>ValeOTour!</Text>
      </View>

      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Text style={styles.labelFormInput}>Nome</Text>
          <TextInput
            style={styles.inputTextForm}
            placeholder="Digite seu nome"
            placeholderTextColor={colors.formLabelColor}
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.labelFormInput}>Email</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputTextForm}
            placeholder="Digite sua senha"
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
        onPress={() => {
          setSucess(true);
          userRegister();
          setSucess(false);
      }}
      >
        <Text style={styles.btnLoginText}>CADASTRAR-SE</Text>
      </TouchableOpacity>
    </View>
  )
}
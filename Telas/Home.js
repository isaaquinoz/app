import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import logo from '../assets/oi.png';



export default function App({ navigation }) {
  function cadastro() {
    navigation.navigate("Cadastro")
  }
  function cadastroPlaneta() {
    navigation.navigate("CadastroPlaneta")
  }
  function listar() {
    navigation.navigate("Listar")
  }
  function listarPlaneta() {
    navigation.navigate("ListarPlaneta")
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image source={logo} style={styles.logo} />
       
      </View>
  
      <View style={styles.botoes}>

      <Button
        style={styles.botao}
          mode="contained"
          buttonColor="#7f4fbe"
          onPress={cadastro}
        >
          Cadastrar Galáxia
        </Button>

        <Button
          style={styles.botao}
          mode="contained"
          buttonColor="#7f4fbe"
          onPress={cadastroPlaneta}
        >
         Cadastrar Planeta
        </Button>
        <Button
          style={styles.botao}
          mode="contained"
          buttonColor="#7f4fbe"
          onPress={listar}
        >
          Galáxias Cadastradas
        </Button>
        <Button
          style={styles.botao}
          mode="contained"
          buttonColor="#7f4fbe"
          onPress={listarPlaneta}
        >
           Planetas Cadastrados
        </Button>
       
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#15091c',
  },
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'


  },
  logo: {
    width: '65%',
    height: '29%',
    marginBottom:'5%',
    resizeMode: 'contain',
  },
  botoes: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50%',
  },
  botao:{
    marginTop:'5%',
  }

});

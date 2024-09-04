import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Listas } from '../Componentes/Listas';



export default function Listar({ navigation }) {
  function voltar() {
    navigation.navigate("Home")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.titulo}> 
        <Text style={styles.tituloCor}>Caláxias Cadastradas:</Text>
        <Text onPress={voltar} style={styles.voltar}>Voltar</Text>
      </View>
      <Listas/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15091c',
    justifyContent: 'center', 
    textAlign:'center'
  },
  voltar:{
    color:'white'
  },
  titulo:{
    position: 'absolute', //explicar que essa nao é boa 
    top: 0, 
    left: 0,
    right: 0,
    alignItems: 'center',
    marginTop: '20%',
  },
  tituloCor:{

    color:'white',  

  },
 

});

import React, { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Listas } from '../Componentes/Listas';
import Voltar from '../assets/voltar.png';


export default function Listar({ navigation }) {
  function voltar() {
    navigation.navigate("Home")
  }
  return (
    <SafeAreaView style={styles.container}>
     
     <View style={styles.voltarView}>  
     <Pressable onPress={voltar}>
       <Image source={Voltar} />
    </Pressable>
           
        </View>
        <View style={styles.titulo}>
        <Text style={styles.tituloCor}>Caláxias Cadastradas:</Text>
        </View>
   


      <Listas/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15091c',
    justifyContent: 'top', 
    textAlign:'center'
  },

  voltar:{
    color:'white'
  },
  voltarView:{
    marginTop:'13%',
    position: 'absolute',//explicar que essa nao é boa 
    left: 16,
  },

  titulo:{
    marginTop:'9%',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 16, 
    position: 'relative',
  },
  tituloCor:{

    color:'white',  
    fontSize: 18,
    fontWeight: 'bold',

  },
 

});

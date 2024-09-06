import React from 'react';
import { StyleSheet, View, SafeAreaView, TextInput,Image, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import Voltar from '../assets/voltar.png';
export default function Cadastro({ navigation }) {

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
      <View style={styles.botoes}>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Nome da Galáxia"
          placeholderTextColor="white" 
        />

      
        <Button
          mode="contained"
          buttonColor="#7f4fbe"
         
        >
          Salvar
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
    justifyContent: 'center', 
  },
  botoes: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50%',
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    color: '#fff', 
  },
  voltar:{
    color:'white'
  },
  voltarView:{
    marginTop:'13%',
    position: 'absolute',//explicar que essa nao é boa 
    left: 0,
    top:0,

  },
});

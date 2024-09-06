import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, TextInput,Image, Pressable, Text } from 'react-native';
import { Button, RadioButton} from 'react-native-paper';
import Voltar from '../assets/voltar.png';
export default function Cadastro({ navigation }) {

  function voltar() {
    navigation.navigate("Home")
  }
  const [checked, setChecked] = useState('first');

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
        placeholder="Nome do Planeta"
        placeholderTextColor="white" 
      />
      <View style={styles.botaozinhos}>
          <View style={styles.botaozinhosView}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              color="#D8BFD8" 
              uncheckedColor="white" 
            />
            <Text style={styles.botaozinhosTexto}>Opção 1</Text>
          </View>
          
          <View style={styles.botaozinhosView}>
            <RadioButton
              value="firs"
              status={checked === 'firs' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('firs')}
              color="#D8BFD8" 
              uncheckedColor="white" 
            />
            <Text style={styles.botaozinhosTexto}>Opção 2</Text>
          </View>
        </View>

      <Button mode="contained" buttonColor="#7f4fbe">
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
 botaozinhos: {
    flexDirection: 'column',
    paddingRight:'60%',
    marginBottom: 20,
  },
  botaozinhosView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  botaozinhosTexto: {
    color: 'white',
    marginLeft: 8,
  },
});

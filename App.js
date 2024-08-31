import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image,Text, SafeAreaView } from 'react-native';
import { Button,  TextInput  } from 'react-native-paper';
import styled from 'styled-components/native';
import logo from './assets/logo.png';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image
          source={logo}
          style={styles.logo}
        />
      
      </View>

      <View style={styles.login}>
        <View>
      <TextInput style={styles.input}
      label="Email"

    />
     <TextInput style={styles.input}
      label="Senha"

    />
      </View>     
      <View style={styles.botoes}>
        <Button mode="contained" style={styles.botao}>Login</Button>
        <Text>Cadastrar-se</Text>
      </View>
     
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#2b0b54',
  },
  img: {

    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    marginTop:'30%',
  },
  logo: {
    width: 240,
    height: 100,

  },
  login: {
    marginBottom:'5%',
    marginLeft:'4%',
    marginRight:'4%'

  },
 botoes: {
   
    justifyContent: 'center',
    paddingBottom: '70%',
  
  },
  input:{
    marginBottom:'4%',
    
  }

});

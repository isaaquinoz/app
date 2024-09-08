import React, {useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, TextInput,Image, Pressable, Text } from 'react-native';
import { Button, RadioButton} from 'react-native-paper';
import Voltar from '../assets/voltar.png';
import axios from 'axios';
import { URL } from '../constantes/apiURL';




export default function Cadastro({ navigation }) {

  function voltar() {
    navigation.navigate("Home")
  }
  function voltarTrue(batata) {
    navigation.navigate("ListarPlaneta",{batata})
  }
  const [galaxias, setGalaxias] = useState([]);
  const [nome,setNome] = useState();
  const [galaxia,setGalaxia] = useState(0);



  const buscaAxios = () => {
    axios.get(URL + 'galaxias')
      .then(function (response) {
        console.log(response.data);
        setGalaxias(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    buscaAxios();
  }, []);




  const Axios = () => {
     
    axios.post(URL+'planetas',{
      nome: nome,
      galaxia_id:galaxia
    })
      .then((response) => {voltarTrue('Planeta criado :D')})
      .catch((erro) => {
        voltarTrue('Planta NÃO FOI criado ;(') 
        console.log(erro.message)
      });
}; 

    useEffect(() => {
        console.log('msg vai aparecer qnd carreagar a pg na 1° vez')
    }, []);

    useEffect(() => {
      console.log('msg vai aparecer qnd a variavel nova for atualizada', nome)
  }, [nome]);



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
        onChangeText={(text) => setNome(text)} 
      />
      <View style={styles.botaozinhos}>
          

         {
             galaxias.map(queijo => {
            return ( <View style={styles.botaozinhosView}>
              <RadioButton
                value= {queijo.id}
                status={galaxia === queijo.id ? 'checked' : 'unchecked'} 
                onPress={() => setGalaxia( queijo.id)}
                color="#D8BFD8" 
                uncheckedColor="white" 
              />
              <Text style={styles.botaozinhosTexto}>{queijo.nome}</Text>
                </View> )
          }) 
         }
        </View>

      <Button mode="contained" buttonColor="#7f4fbe" onPress={() => Axios()}>
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

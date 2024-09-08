import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import Voltar from '../assets/voltar.png';
import axios from 'axios';
import { URL } from '../constantes/apiURL';
import { useRoute } from '@react-navigation/native';
import DE from '../assets/de.png';
import UP from '../assets/up.png';

export default function ListarPlanetaID({ navigation }) {
  const [nome, setNome] = useState('');
  const [id_galaxia, setIdGalaxia] = useState(0);
  const [planetas, setPlanetas] = useState();
  const route = useRoute();
  const id = route.params.id;

  function voltarTrue(batata) {
    navigation.navigate("ListarPlaneta", { batata });
  }

  const buscaPlanetaComID = (id) => {
    axios.get(URL + 'planetas/' + id)
      .then(function (response) {
        console.log('finding', response.data.data);
        setPlanetas(response.data.data); 
      })
      .catch(function (error) {
        console.log(error);
      });
  };
console.log('merda: ', planetas?.nome)


  const upAxios = (id) => {
    axios.put(`${URL}planetas/${id}`, { 
      nome: nome,
      galaxia_id: id_galaxia,
    })
      .then((response) => {
        voltarTrue('Planeta atualizado:D');
      })
      .catch((erro) => {
        voltarTrue('Planeta NÃO FOI atualizado;(');
        console.log(erro.message);
        console.error("ops! ocorreu um erro: " + erro);
      });
  };

  const deAxios = (id) => {
    axios.delete(URL+'planetas/'+id)
      .then((response) => {
        voltarTrue('Planeta deletado');
      })
      .catch((erro) => {
        voltarTrue('Planeta NÃO FOI deletado');
        console.log(erro.message);
        console.error("ops! ocorreu um erro: " + erro);
      });
  };
console.log('id',id)

  useEffect(() => {
    buscaPlanetaComID(id);
  }, []);

  function voltar() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.voltarView}>
        <Pressable onPress={voltar}>
          <Image source={Voltar} />
        </Pressable>
      </View>
      <View style={styles.contentTabela}>
        <Text style={styles.tituloCor}>Editando Planeta {planetas?.nome}</Text>
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          keyboardType="default"
           value={planetas?.nome}
          onChangeText={(text) => setNome(text)}
          placeholderTextColor="white"
        />
            <TextInput
          style={styles.input}
          keyboardType="default"
          value={planetas?.galaxia?.nome} 
          onChangeText={(text) => setIdGalaxia(text)}
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.botoes}>
        <Button
          style={styles.botaoUP}
          mode="contained"
          buttonColor="#194d00"
          onPress={() => upAxios(id)} 
        >
          <Image source={UP} style={{ width: 18, height: 18 }} />
        </Button>
        <Button
          style={styles.botaoDE}
          mode="contained"
          buttonColor="#c70000"
          onPress={() => deAxios(id)}
        >
          <Image source={DE} style={{ width: 18, height: 18 }} />
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15091c',
    paddingHorizontal: 16,
  },
  voltarView: {
    marginTop: '7%',
    left: 16,
  },
  tituloCor: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '7%',
  },
  botoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botao: {
    marginLeft: '3%',
    marginRight: '6%',
    marginTop: '3%',
  },
  botaoUP: {
    backgroundColor: '#00b93b',
    marginLeft: '3%',
  },
  botaoDE: {
    backgroundColor: '#c70000',
    marginLeft: '3%',
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
  inputs: {
    marginTop: '43%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

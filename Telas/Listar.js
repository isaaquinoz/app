import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import Voltar from '../assets/voltar.png';
import axios from 'axios';
import { URL } from '../constantes/apiURL';
import { DataTable } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

export default function Listar({ navigation }) {
  const route = useRoute();
  const batata = route.params?.batata || ''; // p n dar erro

  const [galaxias, setGalaxias] = useState([]);

  function proximo(id) {
    navigation.navigate("ListarIDGalaxia", { id: id });
  }

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
        <Text style={styles.tituloCor}>Galáxias Cadastradas:</Text>
        <Text style={styles.subTituloCor}>Para edita-las, basta clicar no nome</Text>
        {batata !== '' && <Text style={styles.subTituloCor}>{batata}</Text>} {/* Exibe batata apenas se tiver valor */}
      </View>

      <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title textStyle={styles.tableTitle}>ID</DataTable.Title>
          <DataTable.Title textStyle={styles.tableTitle}>Nome</DataTable.Title>
        </DataTable.Header>

        {galaxias.map((galaxia) => (
          <DataTable.Row key={galaxia.id} style={styles.tableRow}>
            <DataTable.Cell textStyle={styles.tableText}>{galaxia.id}</DataTable.Cell>
            <DataTable.Cell onPress={() => proximo(galaxia.id)} textStyle={styles.tableText}>{galaxia.nome}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
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
    marginTop: '13%',
    position: 'absolute',
    left: 16,
  },
  contentTabela: {
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloCor: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTituloCor: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    backgroundColor: '#1f1b2e',
    borderRadius: 8,
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: '#2d283d',
  },
  tableRow: {
    backgroundColor: '#2d283d',
    borderBottomColor: '#4e4767',
    borderBottomWidth: 1,
  },
  tableTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  tableText: {
    color: 'white',
  },
});

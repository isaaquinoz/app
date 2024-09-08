import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import Voltar from '../assets/voltar.png';
import axios from 'axios';
import { URL } from '../constantes/apiURL';
import { DataTable } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

export default function Listar({ navigation }) {
  const [planetas, setPlanetas] = useState([]);

  const route = useRoute();
  const batata = route.params?.batata || ''; 

  function proximo(id) {
    navigation.navigate("ListarIDPlaneta", { id: id });
  }

  const buscaAxios = () => {
    axios.get(URL + 'planetas')
      .then(function (response) {
        console.log(response.data);
        setPlanetas(response.data);
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
        <Text style={styles.tituloCor}>Planetas Cadastrados:</Text>
        {batata !== '' && <Text style={styles.subTituloCor}>{batata}</Text>} {/* Exibe 'batata' somente se tiver valor */}
      </View>

      <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title textStyle={styles.tableTitle}>ID</DataTable.Title>
          <DataTable.Title textStyle={styles.tableTitle}>Nome</DataTable.Title>
          <DataTable.Title textStyle={styles.tableTitle}>Galaxia</DataTable.Title>
        </DataTable.Header>

        {planetas.map((batata) => (
          <DataTable.Row key={batata.id} style={styles.tableRow}>
            <DataTable.Cell textStyle={styles.tableText}>{batata.id}</DataTable.Cell>
            <DataTable.Cell onPress={()=> proximo(batata.id)} textStyle={styles.tableText}>{batata.nome}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.tableText}>{batata.galaxia?.nome || 'N/A'}</DataTable.Cell>
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
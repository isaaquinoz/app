import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

export default function Cadastro() {

  const [solarSystemName, setSolarSystemName] = useState('');
  const [galaxyName, setGalaxyName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.botoes}>
        <TextInput
          style={styles.input}
          onChangeText={setSolarSystemName}
          value={solarSystemName}
          keyboardType="default"
          placeholder="Nome do sistema solar"
          placeholderTextColor="white" 
        />

        <TextInput
          style={styles.input}
          onChangeText={setGalaxyName}
          value={galaxyName}
          keyboardType="default"
          placeholder="Galáxia materna"
          placeholderTextColor="white" 
        />

        <Button
          mode="contained"
          buttonColor="#7f4fbe"
          onPress={() => console.log('Salvar')}
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
});

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'; 
import { Button } from 'react-native-paper'; 

export function Listas() {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView >
      <View>
      <Button
       onPress={() => setOpen(!open)} 
        mode="contained"
        style={styles.botao}
        
        >
        Galaxia Andrômedra +
        </Button>
      </View>
      
      {open && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  card: {
    width: 200,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
  },
  botao: {
      marginLeft:'3%',
      marginRight:'3%',
      marginTop:'3%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

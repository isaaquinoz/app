import React, { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, TextInput, View } from 'react-native'; 
import { Button } from 'react-native-paper'; 
import DE from '../../assets/de.png';
import UP from '../../assets/up.png';
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
        <View style={styles.lista}>
           <TextInput style={styles.input}/>

       <View style={styles.botoes}> 
        <Button
        style={styles.botaoUP}
        mode="contained"
        // buttonColor="#194d00  " DANDO ERRO ????????????????????  
        >
       <Image source={UP} style={{ width: 18, height: 18 }}/>
      
        </Button>
        <Button
        style={styles.botaoDE}
        mode="contained"
          // buttonColor="#c70000"
     
        >
              <Image source={DE} style={{ width: 18, height: 18 }}/>
               
          </Button></View>
      

        </View>
        
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  lista:{
    marginTop:'2%', 
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  botoes:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  input: {
    marginTop:'1%',
      color:'white',
      borderColor: 'white',
      borderWidth: 1,
      paddingLeft: '5%',
  },
  botao: {
      marginLeft:'3%',
      marginRight:'6%',
      marginTop:'3%',
  },
  botaoUP: {
    backgroundColor:'#00b93b',
    marginLeft:'3%',



},  
botaoDE: {
  backgroundColor:'#c70000',
  marginLeft:'3%',


},

});

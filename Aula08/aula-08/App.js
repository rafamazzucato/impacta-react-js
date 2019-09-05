import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {

  return (
    <View>
        <View style={styles.container}>
          <Text style={styles.texto}>Página inicial</Text>
        </View>

        <View style={styles.botao}>
          <Button
            title="Lista de Compromissos"
            onPress={() => {}} />  
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    flex: 1,
    fontSize: 20
  },
  botao: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

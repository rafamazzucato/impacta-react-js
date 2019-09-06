import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Home extends React.Component{
    render(){
        return (
            <View style={[styles.container]}>
                <View>
                    <Text style={styles.texto}>ABC Cursos</Text>
                </View>

                <View style={styles.botao}>
                    <Button
                        title="Lista de Cursos"
                        onPress={() => this.props.navigation.navigate('Cursos')} />  
                </View>
                <View style={styles.botao}>
                    <Button
                        title="Lista de Contatos"
                        onPress={() => this.props.navigation.navigate('Contatos')} />  
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      color:'#000000', 
      fontSize: 20
    },
    botao: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class CompromissoLista extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Lista de Compromissos</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

import React from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'

export default class CompromissoLista extends React.Component{

    initialState = {
        data: [],
        refreshing: false
    }

    constructor(props){
        super(props)
        this.state = this.initialState;
    }

    componentWillMount(){
        this._getLista()
    }

    _getLista = async () => {
        this.setState({refreshing: true})
        axios.get('http://172.16.20.43:3200/api/compromissos').then(response => {
            this.setState({data: response.data, refreshing: false})
        }).catch(error => {
            console.log(error)
            this.setState({refreshing: false})
        })
    }

    render(){
        return (
            <View>
                <Text style={styles.texto}>Lista de Compromissos</Text>

                <View>
                    <SafeAreaView>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index.toString()}
                            refreshing={this.state.refreshing}
                            onRefresh={() => this._getLista()}
                            renderItem={({ item }) => {
                                return (

                                    <View style={styles.item}>
                                        <Text style={styles.conteudo}>{item.data}</Text>
                                        <Text style={styles.conteudo}>{item.descricao}</Text>
                                        <Text style={styles.conteudo}>{item.responsavel}</Text>
                                        <Text style={styles.conteudo}>{item.telefone}</Text>
                                    </View>
                                )
                            }}
                        />
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteudo: {
        margin: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        fontSize: 20
    },
    texto: {
        alignItems: "center",
        fontSize: 30,
        margin: 20,
        color: '#FF0000',
    },
    item: {
        alignItems: "center",
        backgroundColor: "#dcda44",
        flexGrow: 1,
        margin: 4,
        padding: 20
    },
    conteudo: {
        color: "#333333"
    }
});

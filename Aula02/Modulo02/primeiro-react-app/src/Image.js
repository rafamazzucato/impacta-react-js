import React from 'react';
import './App.css';
import json from './teste.json'

export default class Image extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (<img src={json.img1} className="App-logo" alt="logo" />)
    }
}
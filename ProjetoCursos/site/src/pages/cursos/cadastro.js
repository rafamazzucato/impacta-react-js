import React from 'react'
import Form from './form'
import List from './list'

export default class CursoCadastro extends React.Component {

    render(){
        return (
            <div className="row border-bottom ">
                <div className="col-md-4">
                    <Form></Form>
                </div>
                <div className="col-md-8">
                    <List></List>
                </div>
            </div> 
        )
    }
}

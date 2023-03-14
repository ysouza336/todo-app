import React,{Component} from "react";
import axios from "axios";


import PageHeader from "../templante/pageheader";
import TodoForm from "./todoform";

const URL = 'mongodb+srv://yurisilva474:<password>@cluster0.f1xka86.mongodb.net/?retryWrites=true&w=majority'

export default class Todo extends Component{
   
    constructor(props){
        super(props)
        this.state = {description: '', list:[] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description})
        .then(resp => console.log('Funcionou!'))
    }
    
    render(){
        return(
            <div>
               <PageHeader name='Tarefas' small='Cadastro' />
               <TodoForm description={this.state.description} 
               handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
            </div>
        )
    }
}
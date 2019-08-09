import React, { Component } from 'react'
import { Card, Container, Row, Col,
    CardTitle, CardSubtitle, Table, Jumbotron} from 'reactstrap';

export default class contactDetails extends Component {


    constructor(props){
        super(props);
        this.state={
            names: [],
            isLoading:false,
            error: null
        }
    }
    componentDidMount(){

        fetch("http://localhost:5000/name/"+this.props.match.params.ssn, {method: "GET"})
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                else{
                    throw new Error('Something went wrong')
                }
            })
            .then(data => this.setState({names: data, isLoading: false}))
            .catch(error => this.setState({error, isLoading: false}))
    }

    if(isLoading){
        return <p>Loading... </p>
    }
    
   
    item(){
        var pairs = [];
        for(var key in this.state.names[0]){
            pairs.push(<p> <span style={{fontWeight: "800"}}>{key}</span> : {this.state.names[0][key]}</p>)
        }
        return (<div>{pairs}</div>)
    }
    

    
    render() {
         
        
        return (
            <div>
                {this.item()}
               
                </div>
        )
    }
}

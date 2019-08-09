import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class contactPage extends Component {

    constructor(props){
        super(props);
        this.state ={
            names: [],
            isLoading: false,
            error: null
            
        }
    }


    componentDidMount(){

        fetch("http://localhost:5000/name", {method: "GET"})
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


    render() {

        if(this.state.isLoading){
            return <p>isLoading .... </p>
        }

        
        
        return (
            <div>
                
                {this.state.names.map(name =>(
                    <div key={name.Ssn}>
                    
                        <Link to ={"/name/"+name.Ssn}>{name.Fname}{name.Lname}</Link>

                    </div>


                )

                


                )}
                
            </div>
        )
        
    }
}

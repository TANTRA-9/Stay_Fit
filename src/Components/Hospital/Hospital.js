import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import fire from '../../Fire';
import Navbar from '../Navbar/Navbar';
import style from './Hospital.css';

class Hospital extends Component {

    state = {
        data: "",
        check:false,
        name:""
    }

    componentDidMount() {
        fire.database().ref('List').child("" + this.props.match.params.id).on('value', snapshot => {
            if (snapshot.val() != null) {
                this.setState({ data: snapshot.val(),name:fire.auth().currentUser.email});
                console.log(this.state.name)
            }
        });
    }

    register = () => {
        if(localStorage.getItem('login')){
            const time = new Date().toLocaleString();
            const all = {
                hospital:this.state.data.name,
                name:this.state.name,
                code:this.state.data.zip,
                date:time,
                address:this.state.data.address
            }
            fire.database().ref("Registration").push(all,err=>{
                if(err){
                    alert(err);
                }
            });
            alert("Register Successfully");
        }
        else{
            alert("You Have To Login First");
            this.setState({check:true});
        }
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Navbar />
                {this.state.check ? <Redirect to="/login" /> : null}
                { this.state.data.length === 0 ? <p>Please Wait...</p>
                :
                <section>
                    <img src={this.state.data.url} alt="Loading..." width="100%" height="440px"></img><br /><br />
                    <h4 style={{ textDecoration: "underline" }}>{this.state.data.name}</h4>
                    <br />
                    <button className={style.btn} onClick={this.register}>Register</button>
                </section>
                }
            </div>
        );
    }
}

export default Hospital;
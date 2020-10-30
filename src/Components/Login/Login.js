import React, { Component } from 'react';
import fire from '../../Fire';
import { toast } from 'react-toastify';
import style from './Login.css'
import Navbar from '../Navbar/Navbar';

class Login extends Component {

    state = {
        name: "",
        pass: ""
    }

    signIn = (e) => {
        e.preventDefault();
        if(this.state.name.length < 1){
            alert("UserName field is empty");
        }
        else if(this.state.pass.length < 1){
            alert("Password field is empty");
        }
        else{
            fire.auth().signInWithEmailAndPassword(this.state.name, this.state.pass).then(response => {
                localStorage.setItem('login', this.state);
                this.props.history.push('list');
                this.notify();
            }).catch(err => {
                alert(err.message);
            })
        }
    }

    signUp = (e) => {
        e.preventDefault();
        if(this.state.name.length < 1){
            alert("UserName field is empty");
        }
        else if(this.state.pass.length < 1){
            alert("Password field is empty");
        }
        else{
            fire.auth().createUserWithEmailAndPassword(this.state.name, this.state.pass).then(response => {
                alert("Successful Sign Up");
            }).catch(err => {
                alert(err.message);
            })
        }
    }

    notify = () => {
        toast.info('Successful Login In!', { position: toast.POSITION.BOTTOM_CENTER })
    }

    render() {
        return (
            <div className={style.login_box}>
                <Navbar/>
                {toast.configure()}
                <div className={style.page}>
                    <h2>
                     Login
                    </h2>
                    <br/>
                    <input type="mail" onChange={(event)=>this.setState({name:event.target.value})} placeholder="Gmail" name="mail"/>
                    <br/><br/>
                    <input type="password" onChange={(event)=>this.setState({pass:event.target.value})} placeholder="Password"/>
                    <br/><br/>
                    <button onClick={this.signIn} className={style.neon}>Log in</button>
                    <br/>
                    <button onClick={this.signUp} className={style.neon}>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default Login;
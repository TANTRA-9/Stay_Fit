import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import fire from '../../Fire';
import Navbar from '../Navbar/Navbar';
import style from './Hospital.css';
import { GiCancel } from 'react-icons/gi';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

class Hospital extends Component {

    state = {
        data: "",
        toastLogin: false,
        check: false,
        toastReg:false,
        list:false,
        name: ""
    }

    componentDidMount() {
        fire.database().ref('List').child("" + this.props.match.params.id).on('value', snapshot => {
            if (snapshot.val() != null) {
                this.setState({ data: snapshot.val() });
                if(fire.auth().currentUser != null){
                    this.setState({name: fire.auth().currentUser.email});
                }
                console.log(this.state.name)
            }
        });
    }

    setLoginToast = () => {
        this.setState({ toastLogin: !this.state.toastLogin });
    }

    setRegister = () => {
        this.setState({ toastReg : !this.state.toastReg });
    }

    gotoLogin = () => {
        this.setState({check:true});
    }

    gotoRegistration = () => {
        this.setState({list:true});
    }

    register = () => {
        if (localStorage.getItem('login')) {
            const time = new Date().toLocaleString();
            const all = {
                hospital: this.state.data.name,
                name: this.state.name,
                code: this.state.data.zip,
                date: time,
                address: this.state.data.address
            }
            fire.database().ref("Registration").push(all, err => {
                if (err) {
                    alert(err);
                }
            });
            this.setState({toastReg:true});
        }
        else {
            this.setState({ toastLogin: true });
        }
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Navbar />
                {this.state.check ? <Redirect to="/login" /> : null}
                {this.state.list ? <Redirect to="/registration"/> : null}
                { this.state.data.length === 0 ? <p>Please Wait...</p>
                    :
                    <section>
                        <div className={style.back}>
                            <img src={this.state.data.url} alt="" width="100%" height="581px"
                            style={{filter:"brightness(40%)"}}></img>
                            <h2 style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    marginTop: "70px",
                                    marginLeft: "20px",
                                    color: "white",
                            }}>{this.state.data.name}</h2>
                            <h4 style={{marginTop:"115px"}}><FiPhoneCall/> {this.state.data.phone}</h4>
                            <h4 style={{marginTop:"150px"}}><FiMail/> {this.state.data.email}</h4>
                            <button className={style.btn} onClick={this.register}>Register</button>
                        </div>
                    </section>
                }<div
                 aria-live="polite"
                    aria-atomic="true"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            marginTop: "60px",
                            marginRight:"5px"
                        }}
                    >
                        <Toast show={this.state.toastLogin} className={style.toast}>
                            <h6>For Regsitration You Have To <span onClick={this.gotoLogin} style={{
                                fontWeight:"bold",textDecoration:"underline",cursor:"pointer"
                            }}>Login</span> First <GiCancel onClick={this.setLoginToast} style={{ cursor: "pointer" }} /></h6>
                        </Toast>
                        <Toast show={this.state.toastReg} className={style.toast}>
                            <h6>Registered Successfully <GiCancel onClick={this.setRegister} style={{ cursor: "pointer" }} /> <h6 
                            onClick={this.gotoRegistration} style={{ textDecoration:"underline",cursor:"pointer"
                            }}>Registrations List</h6></h6>
                        </Toast>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hospital;
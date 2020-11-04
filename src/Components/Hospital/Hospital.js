import React, { Component } from 'react';
import { } from 'react-bootstrap';
import fire from '../../Fire';
import Navbar from '../Navbar/Navbar';
import style from './Hospital.css';

class Hospital extends Component {

    state = {
        data: ""
    }

    componentDidMount() {
        fire.database().ref('List').child("" + this.props.match.params.id).on('value', snapshot => {
            if (snapshot.val() != null) {
                this.setState({ data: snapshot.val() });
            }
        });
    }

    register = () => {
        alert("Register Successfully");
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Navbar />
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
import React, { Component } from 'react';
import style from './Registration.css';
import Navbar from '../Navbar/Navbar';
import fire from '../../Fire';
import { Container,Table } from 'react-bootstrap';

class Registration extends Component {

    state = {
        data: ""
    }

    componentDidMount() {
        fire.database().ref("Registration").on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ data: snapshot.val() });
            }
        })
    }

    render() {
        return (
            <div className={style.reg}>
                <Navbar />
                <br/>
                <h4 style={{textDecoration:"underline"}}>Registrations List</h4><br/>
                { this.state.data.length === 0 ? <p>Please Wait...</p>
                :
                <Container>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Client Id</th>
                                    <th>Hospital</th>
                                    <th>Zip Code</th>
                                    <th>Date and Time</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(this.state.data).map((id,i) => {
                                    return <tr key={id}>
                                        <td>{i}</td>
                                        <td>{this.state.data[id].name}</td>
                                        <td>{this.state.data[id].hospital}</td>
                                        <td>{this.state.data[id].code}</td>
                                        <td>{this.state.data[id].date}</td>
                                        <td>{this.state.data[id].address}</td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                </Container>}
            </div>
        );
    }
}

export default Registration;
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import fire from '../../Fire';
import { Container, Table, Form } from 'react-bootstrap';
import style from './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class List extends Component {

    state = {
        list: ""
    }

    componentDidMount() {
        fire.database().ref('List').on('value', snapshot => {
            if(snapshot.val() != null){
                this.setState({list:snapshot.val()});
            }
        });
    }

    render() {
        return (
            <div className={style.back}>
                <Navbar />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-toastify@4.5.1/dist/ReactToastify.css" />
                <br/><h4>Hospitals List</h4><br />
                {
                    this.state.list.length === 0 ? <p>Please Wait...</p>
                    :
                    <Container>
                        <Form.Control type="text" placeholder="Enter Detail" />
                        <br/>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Zip Code</th>
                                    <th>Register</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(this.state.list).map((id,i) => {
                                    return <tr key={id}>
                                        <td>{i}</td>
                                        <td>{this.state.list[id].name}</td>
                                        <td>{this.state.list[id].city}</td>
                                        <td>{this.state.list[id].address}</td>
                                        <td>{this.state.list[id].zip}</td>
                                        <td><Link to={"./hospital/"+id}><FontAwesomeIcon icon={faEdit} color="black"/> Link</Link></td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </Container>
                }
            </div>
        );
    }
}

export default List;
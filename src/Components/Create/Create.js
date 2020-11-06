import React, { Component } from 'react';
import { Container, Form, Col, Toast } from 'react-bootstrap';
import fire from '../../Fire';
import Navbar from '../Navbar/Navbar';
import style from './Create.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GiCancel } from 'react-icons/gi';
import { Redirect } from 'react-router-dom';

class Create extends Component {

    state = {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        phone: "",
        image: { name: "Choose File" },
        userUid: "",
        url: "",
        imgToast: false,
        hosToast: false,
        list:false,
    }

    componentDidMount() {
        fire.database().ref('ForUid').on('value', snapshot => {
            if (snapshot.val() != null) {
                this.setState({ userUid: fire.auth().currentUser.uid });
            }
        });
    }

    gotoList = () => {
        this.setState({list:true});
    }

    setImgToast = () => {
        this.setState({ imgToast: !this.state.imgToast });
    }

    setHosToast = () => {
        this.setState({ hosToast: !this.state.hosToast });
    }

    setImage = e => {
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] });
        }
    }

    uploadImage = e => {
        const upload = fire.storage().ref("Images/" + this.state.userUid + "/" + this.state.image.name)
            .put(this.state.image);
        upload.on('state_changed', snapshot => { }, error => { alert(error) },
            () => fire.storage().ref("Images").child(this.state.userUid).child(this.state.image.name)
                .getDownloadURL().then(url => { this.setState({ url: url }); this.setImgToast() }));
    }

    add = e => {
        if (this.state.name.length === 0 || this.state.address.length === 0 || this.state.city.length === 0
            || this.state.state.length === 0 || this.state.zip.length === 0 || this.state.url.length === 0
            || this.state.email.length === 0 || this.state.phone.length === 0) {
            alert("Below field are empty")
        }
        else {
            const check = {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                url: this.state.url,
                email: this.state.email,
                phone: this.state.phone
            }
            fire.database().ref('List').push(check, err => {
                if (err) {
                    alert(err);
                }
            });
            this.setHosToast();
            this.setState({ name: "", address: "", city: "", state: "", zip: "", image: "Choose File", url: "", email: "", phone: "" });
        }
    }

    render() {
        return (
            <div className={style.back}>
                {this.state.list ? <Redirect to="/list"/> : null}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                <Navbar />
                <h5 style={{ textDecoration: "underline", fontWeight: "bold", marginTop: "5px" }}>
                    Add Hospital</h5><br />
                <Container>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Hospital Name</label>
                            <input type="email" className="form-control" placeholder="Hospital Name"
                                onChange={event => this.setState({ name: event.target.value })}
                                value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                                onChange={event => this.setState({ address: event.target.value })}
                                value={this.state.address} />
                        </div>
                        <label htmlFor="inputZip">Hospital Image</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"
                                    style={{ cursor: "pointer" }} onClick={this.uploadImage}>Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile01"
                                    style={{ cursor: "pointer" }} onChange={this.setImage} />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">{this.state.image.name}</label>
                            </div>
                        </div>
                        <label htmlFor="inputZip">Contact Details</label>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter email"
                                    onChange={event => this.setState({ email: event.target.value })}
                                    value={this.state.email} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" placeholder="Enter Phone No"
                                    onChange={event => this.setState({ phone: event.target.value })}
                                    value={this.state.phone} />
                            </Form.Group>
                        </Form.Row>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity"
                                    onChange={event => this.setState({ city: event.target.value })}
                                    value={this.state.city} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">State</label>
                                <select id="inputState" className="form-control"
                                    onChange={event => this.setState({ state: event.target.value })} defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" disabled>Choose State</option>
                                    <option>Andhra Pardesh</option>
                                    <option>Arunachal Pardesh</option>
                                    <option>Assam</option>
                                    <option>Bihar</option>
                                    <option>Chattisgarh</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Haryana</option>
                                    <option>Himachal Pardesh</option>
                                    <option>Jammu and Kashmir</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Madhya Pardesh</option>
                                    <option>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Sikkim</option>
                                    <option>Tamil Nadu</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                                    <option>Telangana</option>
                                    <option>Andaman and Nicobar</option>
                                    <option>Chandigarh</option>
                                    <option>Daman and Diu</option>
                                    <option>Jammu and Kashmir</option>
                                    <option>Lakshadweep</option>
                                    <option>Delhi</option>
                                    <option>Puducherry</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip"
                                    onChange={event => this.setState({ zip: event.target.value })}
                                    value={this.state.zip} />
                            </div>
                        </div>
                    </form>
                </Container>
                <Form.Text className="text-muted">
                    ALL FIELDS ARE MENDATORY TO FILL
                </Form.Text>
                <br />
                <button className={style.btn} onClick={this.add}>Add <FontAwesomeIcon icon={faPlus} /></button>
                <br />
                <div
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            marginTop:"60px",
                            marginRight:"5px"
                        }}
                    >
                        <Toast show={this.state.imgToast} className={style.toast2}>
                                <h6>Image Successfully Added <GiCancel onClick={this.setImgToast} style={{cursor:"pointer"}}/></h6>
                        </Toast>

                        <Toast show={this.state.hosToast} className={style.toast2}>
                                <h6>Hospital added Successfully <GiCancel onClick={this.setHosToast} style={{cursor:"pointer"}}/></h6>
                                <h6 onClick={this.gotoList} style={{textDecoration:"underline",cursor:"pointer"}}>Hospitals List</h6>
                        </Toast>
                    </div>
                </div>
                <br /><br />
            </div>
        );
    }
} 

export default Create;
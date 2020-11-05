import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { MdArrowForward } from 'react-icons/md';

class Home extends Component {

    search = ()=> {
        this.props.history.push('list');
    }

    gotoCivil = () => {
        this.props.history.push('hospital/-MLGxklpNVSblWW4xVKL');
    }

    gotoSiddhivinayak = () => {
        this.props.history.push('hospital/-MLH-DJSUfCX9qHHX4AF');
    }

    gotoVohra = () => {
        this.props.history.push('hospital/-MLIW0bPdYTMEPHu5SUg');
    }

    list = () => {
        this.props.history.push('list');
    }

    render() {
        return (
            <div>
                <Navbar fix="top" />
                <br /><br />
                <div className={style.v1}>
                </div>
                <div className={style.v1Text}>
                        <h1>Website Help You To Stay Fit</h1>
                        <p>This Webiste Helps You To Find Hospitals Near You
                            <br/>And Fix Your Appointment Remotely
                        </p>
                        <button className={style.listBtn} onClick={this.list}>Hospitals Lists <MdArrowForward size="23px"/></button>
                </div>

                {/* Hospital Card View */}

                <div className={style.v2}>
                    <br/><br/>
                    <h2 style={{fontWeight:"bold",textDecoration:"underline"}}>Hospitals List</h2>
                    <div className={style.v2Body}>

                        <div className={style.card} onClick={this.gotoCivil}>
                            <div className={style.card_image1}></div>
                            <div className={style.card_text}>
                                <h2>Civil</h2>
                                <p>True service to mankind is service to God.
                                     Particularly for those who are poor, diseased
                                      and helpless. Government health institutions are 
                                      like an oasis in the desert which work for this noble cause</p>
                            </div>
                        </div>

                        <div className={style.card} onClick={this.gotoSiddhivinayak}>
                            <div className={style.card_image2}></div>
                            <div className={style.card_text}>
                                <h2>Siddhivinayak</h2>
                                <p>It is situated at centre of Paonta Sahib. This 
                                    Hospital Consist 50 Beddeds and hospital staff 
                                    is well trained, well educated and patient friendly</p>
                            </div>
                        </div>

                        <div className={style.card} onClick={this.gotoVohra}>
                            <div className={style.card_image3}></div>
                            <div className={style.card_text}>
                                <h2>Vohra</h2>
                                <p>The Hospital provides their 100% efforts to treat 
                                    patients. They also monitor consumer satisfaction 
                                    with regard to clinical care such as the approach of the doctor</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.search}><FontAwesomeIcon icon={faSearch} /> Search Hospital</button>
                    <br/><br/><br/>
                </div>

                <div className={style.v3}>
                    <br/><br/>
                    <h4><FaGithub size="35px"/> <a href="https://github.com/TANTRA-9/Stay_Fit.git" target = "_blank" 
                    rel = "noopener noreferrer" style={{color:"white"}}>https://github.com/TANTRA-9/Stay_Fit.git</a>
                    </h4>
                    <h4><FaLinkedin size="35px"/> <a href="https://www.linkedin.com/in/nishant-tomar-aa2b3b184/"
                    target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
                    https://www.linkedin.com/in/nishant-tomar-aa2b3b184/</a></h4>
                    <h4><ImMail4 size="35px"/> nishanttomar00009@gmail.com</h4>
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default Home;
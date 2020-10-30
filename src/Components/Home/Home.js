import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

    search = ()=> {
        this.props.history.push('list');
    }

    render() {
        return (
            <div>
                <Navbar fix="top" />
                <br /><br />
                <div className={style.v1}>
                    <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />
                    <div className={style.v1Text}>
                        <h2>Nishant</h2>
                        <p>Working</p>
                    </div>
                </div>

                {/* Hospital Card View */}

                <div className={style.v2}>
                    <br/><br/>
                    <h2 style={{fontWeight:"bold",textDecoration:"underline"}}>Hospitals List</h2>
                    <div className={style.v2Body}>
                        <div class={style.card}>
                            <div class={style.card_image1}></div>
                            <div class={style.card_text}>
                                <h2>Civil</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                            </div>
                        </div>

                        <div class={style.card}>
                            <div class={style.card_image2}></div>
                            <div class={style.card_text}>
                                <h2>Siddhivinayak</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                            </div>
                        </div>

                        <div class={style.card}>
                            <div class={style.card_image3}></div>
                            <div class={style.card_text}>
                                <h2>Vohra</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.search}><FontAwesomeIcon icon={faSearch} /> Search Hospital</button>
                    <br/><br/><br/>
                </div>

                <div className={style.v3}>
                    Nishant
                </div>
            </div>
        );
    }
}

export default Home;
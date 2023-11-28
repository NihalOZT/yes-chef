import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import yemekList from '../database/YemekList.json'
import Card from '../styles/Card.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Input from '../styles/Input.css'



export default class YemekFiltreleyici extends Component {

    constructor(props) {
        super(props);
        this.state = {
            yemekList: yemekList,
            filtreliVeriler: [],
            filtre: '',
        }
    };

    componentDidMount() {
        fetch('/yemek')
            .then(response => response.json())
            .then(data => this.setState({ yemekList: data }));
    }

    handleFiltreChange = (e) => {
        const filtre = e.target.value; //target value bir react fonskiyonu olup input alma işini
        this.setState({ filtre });
        this.filtreVeriler(filtre);
    }

    filtreVeriler = (filtre) => {
        const { yemekList } = this.state;
        const filtreliVeriler = yemekList.filter(veri => veri.malzemeler.includes(filtre));
        this.setState({ filtreliVeriler });
    }

    render() {
        const { yemekList } = this.state;

        return (

            <div>

                <input className="aramaAlani"
                    type="text"
                    placeholder="Ne Yemek Yapmak İstiyorsunuz?"
                    value={this.state.filtre}
                    onChange={this.handleFiltreChange}

                />
                <ul>
                    {this.state.filtreliVeriler.map((yemek) => (
                        <li className="card" key={yemek.id}>
                        <img className="card-img" src={yemek.href} alt="Örnek Resim" />
                        <div className="card-baslik">
                            {yemek.yemekAdı}
                        </div>
                        <div className="card-content">
                            {yemek.malzemeler.join(', ')}
                        </div>
                    </li>

                    ))}
                </ul>
                <div>
                    <ul>
                        {yemekList.map(yemek => (
                            <li className="card" key={yemek.id}>
                                <img className="card img" src={yemek.href} alt="Örnek Resim" />
                                <div className="card-baslik">
                                    {yemek.yemekAdı}
                                </div>
                                
                                <div className="card-content">
                                    {yemek.malzemeler.join(', ')}
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

                <src></src>
            </div>

        )
    }

}
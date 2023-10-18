import React, { Component } from "react";
import yemekList from '../database/YemekList.json'

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
        this.setState( { filtre } );
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
                <ul>
                    {yemekList.map(yemek => (
                        <li key={yemek.id}>
                            {yemek.yemek}
                            {yemek.malzemeler}
                            <img src={yemek.href} alt="Örnek Resim" />

                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Filtrele"
                    value={this.state.filtre}
                    onChange={this.handleFiltreChange}
                />
                <ul>
                    {this.state.filtreliVeriler.map((veri) => (
                        <li key={veri.id}>
                            {veri.yemekAdı}
                            {veri.malzemeler}
                        </li>
                    ))}
                </ul>
                <src></src>
            </div>

        )
    }

}
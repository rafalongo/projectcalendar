import React from 'react';
import Calendar from "./Calendar";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("/api/data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.genetics
                    });
                },
                // Nota: É importante lidar com os erros aqui em vez de um bloco catch()
                // para não recebermos exceções de erros dos componentes.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let plants = [];
            for(let i = 0; i < items.length; i++){
                plants.push(<Calendar key={i} name={items[i].genetic.name} start={items[i].genetic.start} vega={items[i].genetic.period.vega} flora={items[i].genetic.period.flora} />);
            }

            return (
                <div className="plants">
                    <div className="header">
                        <h1>Bem-vindo, <strong>Rafael Longo</strong>!</h1>
                        <div className="growths-list">
                            <span>Selecione um cultivo</span>
                            <ul>
                                <li className="active"><a href="?growth_id=5" className="growth_aba">Cultivo N.4</a></li>
                                <li className=""><a href="?growth_id=4" className="growth_aba">Cultivo N.3</a></li>
                                <li className=""><a href="?growth_id=2" className="growth_aba">Cultivo N.2</a></li>
                                <li className=""><a href="?growth_id=1" className="growth_aba">Cultivo N.1</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="growths">
                        <ul className="abas">
                            <li className="active"><a href="#plant_13" className="plant_aba">Amnesia</a></li>
                            <li className=""><a href="#plant_16" className="plant_aba">London Cheese</a></li>
                        </ul>
                        {plants}
                    </div>
                </div>
            );
        }
    }
}
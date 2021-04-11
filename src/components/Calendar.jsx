import React from 'react';
import Week from "./Week";

export default class App extends React.Component {
    render() {
        let vegaWeekCount = this.props.vega / 7;
            vegaWeekCount = Math.ceil(vegaWeekCount);
        let vegaWeek = [];
        let vegaDays = this.props.vega;
        for (let i = 1; i <= vegaWeekCount; i++) {
            let daysPerWeek = (vegaDays - ((i-1)*7));
                daysPerWeek = daysPerWeek > 7 ? 7 : daysPerWeek;
            let startWeek = 7 * (i - 1);

            let date = new Date(this.props.start);
            let startDate = new Date( date.setDate( date.getDate() + ((i-1)*7) ) );
            vegaWeek.push(<Week key={i} week={i} totalPerWeek={daysPerWeek} startWeek={startWeek} start={startDate} />);
        }

        let floraWeekCount = this.props.flora / 7;
            floraWeekCount = Math.ceil(floraWeekCount);
        let floraWeek = [];
        let floraDays = this.props.flora;
        for (let i = 1; i <= floraWeekCount; i++) {
            let daysPerWeek = (floraDays - ((i-1)*7));
                daysPerWeek = daysPerWeek > 7 ? 7 : daysPerWeek;
            let startDay = (this.props.vega - 7) + (7 * i);

            let date = new Date(this.props.start);
                date.setDate( date.getDate() + this.props.vega );
            let startDate = new Date( date.setDate( date.getDate() + ((i-1)*7) ) );
            floraWeek.push(<Week key={i} week={vegaWeekCount + i} totalPerWeek={daysPerWeek} startWeek={startDay} start={startDate} />);
        }

        return (
            <div className="calendar">
                <h1>{this.props.name}</h1>
                <aside>
                    <p>Início: {this.props.start}</p>
                    <p>Tempo de vega: {this.props.vega} dias</p>
                    <p>Tempo de flora: {this.props.flora} dias</p>
                    <p>Tempo de cultivo: {this.props.vega + this.props.flora} dias</p>
                </aside>
                <main>
                    <h3>Vega</h3>
                    <div className="vega">
                        {vegaWeek}
                    </div>
                    <h3>Flora</h3>
                    <div className="flora">
                        {floraWeek}
                    </div>
                </main>
            </div>
        );
    }
}
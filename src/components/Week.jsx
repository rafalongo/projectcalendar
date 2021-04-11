import React from 'react';
import Day from "./Day";

export default class App extends React.Component {
    render() {
        let rows = []
        for(let i = 1; i <= 7; i++){
            if(this.props.totalPerWeek >= i) {
                let date = new Date(this.props.start);
                let currDate = new Date(date.setDate( date.getDate() + (i-1) ));
                rows.push(<Day key={i} count={this.props.startWeek + i}>{currDate.getDate()+'/'+(currDate.getMonth()+1)}</Day>);
            } else {
                rows.push(<Day key={i} count={""}>{"-"}</Day>);
            }
        }

        return (
            <ul className="week">
                <li className="week-count">Semana {this.props.week}</li>
                {rows}
            </ul>
        )
    }
}
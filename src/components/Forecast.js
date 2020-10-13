import React from 'react';
import Card from './Card'

export default class Forecast extends React.Component {
state = {
    days: []
}

componentDidMount = () => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Rostov-on-Don&lang=ru&units=metric&APPID=5f125c81f099c4c9663f7b46c8e4d885")
    .then(res => res.json())
    .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({days: dailyData})})
    .catch((err) => {
        console.log(err);
      });
}
    formatCards = () => {
        return this.state.days.map((day, i) => <Card day={day} key={i}/>)
    }

    render () {
        return (
            <div className="container">
            <h1 className="display-5 jumbotron">Прогноз погоды на 5 дней</h1>
      <h5 className="display-7 text-muted">Ростов-на-Дону</h5>
        <div className="row justify-content-center">
          {this.formatCards()}

        </div>
            </div>
        )
    }
}
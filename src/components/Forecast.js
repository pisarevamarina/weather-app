import React from 'react';
import Cards from './Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
    };
  }

  componentDidMount = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=47.222531&lon=-39.718705&units=metric&lang=ru&exclude=hourly,minutely,alerts&appid=5f125c81f099c4c9663f7b46c8e4d885'
    )
      .then((res) => res.json())
      .then((data) => {
     const dailyData = data.daily
     this.setState({days: dailyData})
      });
  };
  renderCards = () => {
    return this.state.days.map((day, i) => <Cards day={day} key={i} />);
  };

  render() {
    return (
      <div className='container'>
        <h1 className='display-5 jumbotron'>Прогноз погоды</h1>
        <h5 className='display-7 text-muted'>Ростов-на-Дону</h5>
        <div className='row justify-content-center'>{this.renderCards()}</div>
      </div>
    );
  }
}

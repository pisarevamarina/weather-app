import React from 'react';
import Card from './Card';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
    };
  }

  componentDidMount = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=Rostov-on-Don&lang=ru&units=metric&APPID=5f125c81f099c4c9663f7b46c8e4d885'
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = data.list.reduce((acc, item) => {
          const day = item.dt_txt.split(' ')[0]; // Дата как ключ
          if (!acc[day]) {
            // если у нас нет такого ключа, то создаем
            acc[day] = [];
          }
          acc[day].push(item.main.temp); // добавляем температуру
          return acc;
        }, {});

        const temp = [];
        for (let item in newData) {
          const avgTemp = Math.round(
            newData[item].reduce((acc, cur) => {
              return acc + cur;
            }, 0) / newData[item].length
          );
          temp.push({
            day: item,
            avgTemp: avgTemp,
          });
        }
        this.setState({ days: temp });
      });
  };
  renderCards = () => {
    return this.state.days.map((day, i) => <Card day={day} key={i} />);
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

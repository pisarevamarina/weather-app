import React from 'react';
const moment = require('moment')
moment.locale('ru');

export default class Card extends React.Component {
  render() {
    
    let newDate = new Date();
    const weekDay = this.props.day.dt * 1000
    newDate.setTime(weekDay)

    const logoURL = `owf owf-${this.props.day.weather[0].id} owf-5x`

    return (
      <div className='col-auto'>
        <div className='card bg-light'>
          <h3 className='card-title'>{moment(newDate).format('dddd')}</h3>
          <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
          <i className={logoURL}></i>
          <h2>{Math.round(this.props.day.main.temp)} °C</h2>
          <div className='card-body'>
            <button className='btn btn-dark btn-outline-light'>
              {this.props.day.weather[0].description}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import moment from 'moment';
import russianLocale from "moment/locale/ru";
moment.updateLocale('ru', russianLocale);

export default class Card extends React.Component {
  render() {
    
    return (
      <div className='col-auto'>
        <div className='card bg-light'>
          <h3 className='card-title'>{}</h3>
          <p className="text-muted">{this.props.day.day}</p>

          <h2>{this.props.day.avgTemp} °C</h2>
          <div className='card-body'>
            <button className='btn btn-dark btn-outline-light'>
              {/* {this.props.day.weather[0].description} */}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// // // import React from 'react';
// import moment from 'moment';
// // // import { Button } from '@material-ui/core';
// import russianLocale from "moment/locale/ru";
// moment.updateLocale('ru', russianLocale);

// export default class Card extends React.Component {
//   render() {

// const ms = this.props.day.dt * 1000;
// const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

//     return (
//       <div className='col-auto'>
//         <div className='card bg-light'>
//           <h3 className='card-title'>{}</h3>
//           <p className="text-muted">{weekdayName}</p>

//           <h2>{this.props.day.temp.day} °C</h2>
//           <div className='card-body'>
//             <Button color="primary">
//               {this.props.day.weather[0].description}
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import russianLocale from "moment/locale/ru";
import moment from 'moment';

moment.updateLocale('ru', russianLocale);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const icon = `http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`
  const weekDay = props.day.dt * 1000;
  let newDate = new Date();
  newDate.setTime(weekDay);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {bull}
          {moment(newDate).format('dddd')}
          {bull}
        </Typography>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
         {moment(newDate).format("MMM Do YY")}
        </Typography>
        <img src={icon}></img>
        <Typography variant='body2' component='p'>
          {props.day.temp.day} °C
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>{props.day.weather[0].description}</Button>
      </CardActions>
    </Card>
  );
}

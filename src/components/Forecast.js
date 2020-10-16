import React from 'react';
import Cards from './Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Forecast() {
  const classes = useStyles();
  const [weatherData, setWeatherData] = React.useState({ days: [] });

  React.useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=47.222531&lon=-39.718705&units=metric&lang=ru&exclude=hourly,minutely,alerts&appid=5f125c81f099c4c9663f7b46c8e4d885'
      ).then((res) => res.json());
      const dailyData = data.daily;
      setWeatherData({days: dailyData});
      
    }
    fetchWeatherData()
  }, []);


  return (
    <div className='container'>
      <h1 className='display-5 jumbotron text-muted'>Прогноз погоды</h1>
      <h5 className='display-7 text-muted'>Ростов-на-Дону</h5>
      <Grid container   direction="row" justify="center" alignItems="center" className={classes.root} spacing={2}>
        {weatherData.days.map((day, i) => <Cards day={day} key={i} />)}
      </Grid>
    </div>
  );
}

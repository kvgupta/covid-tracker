import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    const covidCases = [{
        title: 'Confirmed',
        body: 'Number of active cases of Covid-19',
        value: confirmed.value,
        type: 'confirmed'
    }, {
        title: 'Recovered',
        body: 'Number of recoveries from Covid-19',
        value: recovered.value,
        type: 'recovered'
    }, {
        title: 'Deaths',
        body: 'Number of deaths caused by Covid-19',
        value: deaths.value,
        type: 'deaths'
    }]
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {
                    covidCases.map(({ title, body, value, type}) => (
                        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[type])}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>{title}</Typography>
                                <Typography variant="h5">
                                    <CountUp
                                        start={0}
                                        end={value}
                                        duration={2.5}
                                        separator=","
                                    >
                                    </CountUp>
                                </Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">{body}</Typography>
                            </CardContent>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default Cards;
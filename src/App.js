import React, { Component } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './assets/image.png';
class App extends Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ 
            data: fetchedData,
            country
        })
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img src={coronaImage} alt="Covid-19" className={styles.image}></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
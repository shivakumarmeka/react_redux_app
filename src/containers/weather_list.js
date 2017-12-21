import React, {
    Component
} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends React.Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temperature = cityData.list.map(weather=>weather.main.temp);
        const pressure = cityData.list.map(weather=>weather.main.pressure);
        const humidity = cityData.list.map(weather=>weather.main.humidity);
        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temperature} color="red" units="k"/>
                </td>
                <td>
                    <Chart data={pressure} color="blue" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="orange" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}
export default connect(mapStateToProps)(WeatherList);
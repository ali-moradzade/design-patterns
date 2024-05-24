import {Observer} from "./Observer";
import {WeatherData} from "./WeatherData";

export interface DisplayElement {
    display(): void;
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private readonly weatherData: WeatherData;
    private temperature: number;
    private humidity: number;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);

        this.temperature = NaN;
        this.humidity = NaN;
    }

    update() {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();

        this.display();
    }

    display() {
        console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity`);
    }
}

export class StatisticsDisplay implements Observer, DisplayElement {
    private readonly weatherData: WeatherData;
    private readonly temperatures: number[];

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);

        this.temperatures = [];
    }

    update() {
        const temperature = this.weatherData.getTemperature();
        this.temperatures.push(temperature);

        this.display();
    }

    display() {
        if (this.temperatures.length == 0) {
            console.log('No temperatures yet!');
        } else {
            let min = this.temperatures[0];
            let max = this.temperatures[0];
            let sum = 0;

            for (const temperature of this.temperatures) {
                if (temperature < min) {
                    min = temperature;
                }

                if (temperature > max) {
                    max = temperature;
                }

                sum += temperature;
            }

            const average = sum / this.temperatures.length;

            console.log(`Avg/Max/Min temperature = ${average}/${max}/${min}`);
        }
    }
}

export class ForecastDisplay implements Observer, DisplayElement {
    private readonly weatherData: WeatherData;
    private temperature: number;
    private humidity: number;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);

        this.temperature = NaN;
        this.humidity = NaN;
    }

    update() {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();

        this.display();
    }

    display() {
        // TODO: replace with real implementation
        console.log(`Watch out for cooler, rainy weather`);
    }
}

export class HeatIndexDisplay implements Observer, DisplayElement {
    private readonly weatherData: WeatherData;
    private temperature: number;
    private humidity: number;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);

        this.temperature = NaN;
        this.humidity = NaN;
    }

    update(): void {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();

        this.display();
    }

    display(): void {
        const T = this.temperature;
        const RH = this.humidity;
        const heatIndex = 16.923 + 1.85212 * 0.1 * T + 5.37941 * RH - 1.00254 * 0.1 *
            T * RH + 9.41695 * 0.001 * T * T + 7.28898 * 0.001 * RH * RH + 3.45372 *
            0.0001 * T * T * RH - 8.14971 * 0.0001 * T * RH * RH + 1.02102 * 0.00001 * T * T *
            RH * RH - 3.8646 * 0.00001 * T * T * T + 2.91583 * 0.00001 * RH * RH * RH + 1.42721 * 0.000001
            * T * T * T * RH + 1.97483 * 0.0000001 * T * RH * RH * RH - 2.18429 * 0.00000001 * T * T * T * RH * RH
            + 8.43296 * 0.0000000001 * T * T * RH * RH * RH - 4.81975 * 0.00000000001 * T * T * T * RH * RH * RH;

        console.log(`Heat Index is: ${heatIndex}`);
    }
}

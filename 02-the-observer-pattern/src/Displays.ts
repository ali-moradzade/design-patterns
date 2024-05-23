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

    update(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;

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

    update(temperature: number, humidity: number, pressure: number) {
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

    update(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;

        this.display();
    }

    display() {
        // TODO: replace with real implementation
        console.log(`Watch out for cooler, rainy weather`);
    }
}

import {CurrentConditionsDisplay, ForecastDisplay, StatisticsDisplay} from "./Displays";

export class WeatherData {
    currentConditionsDisplay: CurrentConditionsDisplay;
    statisticsDisplay: StatisticsDisplay;
    forecastDisplay: ForecastDisplay;

    constructor(
        currentConditionsDisplay: CurrentConditionsDisplay,
        statisticsDisplay: StatisticsDisplay,
        forecastDisplay: ForecastDisplay,
    ) {
        this.currentConditionsDisplay = currentConditionsDisplay;
        this.statisticsDisplay = statisticsDisplay;
        this.forecastDisplay = forecastDisplay;
    }

    getTemperature(): Number {
        return 72;
    }

    getHumidity(): Number {
        return 60;
    }

    getPressure(): Number {
        return 2;
    }

    measurementsChanged(): void {
        const temperature = this.getTemperature();
        const humidity = this.getHumidity();
        const pressure = this.getPressure();

        this.currentConditionsDisplay.update(temperature, humidity, pressure);
        this.statisticsDisplay.update(temperature, humidity, pressure);
        this.forecastDisplay.update(temperature, humidity, pressure);
    }
}

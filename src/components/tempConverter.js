function tempConverter(measurementFrom=String, measurementTo=String, temperature=Number) {

    // Measurements
    let measurements = ["celcius", "fahreneheit", "kelvin"];

    // Temperature must be of number type
    if (typeof temperature !== "number") return false;

    // Measurement must be Celcius, Fahrenheit or Kelvin
    if (!measurements.includes(measurementFrom) || !measurements.includes(measurementTo)) return false;

    // MeasurementFrom and MeasurementTo must be different
    if (measurementFrom === measurementTo) return temperature;

    // Declare return value "temperature"
    let result

    // Convert Functions
    if (measurementFrom === "celcius") {
        // Convert Celcius to other measurements
        if(measurementTo === "fahrenheit") {
            // Celcius to Fahrenheit
            result = ((temperature * 1.8) + 32);
        } else {
            // Celcius to Kelvin
            result = (temperature + 273.15);
        }
    } else if (measurementFrom === "fahrenheit") {
        // Convert Fahrenheit to other measurements
        if(measurementTo === "celcius") {
            // Fahrenheit to Celcius
            result = ((temperature - 32) / 1.8);
        } else {
            // Celcius to Kelvin
            result = (((temperature - 32) / 1.8) + 273.15);
        }
    } else {
        // Convert Kelvin to other measurements
        if(measurementTo === "celcius") {
            // Kelvin to Celcius
            result = (temperature - 273.15);
        } else {
            // Kelvin to Fahrenheit
            result = (((temperature - 273.15) * 1.8) + 32);
        };
    };

    return result.toFixed(0);;
};

export default tempConverter;
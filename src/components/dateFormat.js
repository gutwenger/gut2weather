function dateFormat(output=String, input=Number, timezone_offset=Number) {

    // Output Formats
    let outputFormat = [
        "full_date", // 21 September 2020
        "month_year", // September 2020
        "weekday", // Sunday
        "HH", // 18 
        "HH:MM", // 18:20
        "HH:MM:SS", // 18:20:55
        "H:MM_APM", // 6:20pm
        "H:MM:SS_APM", // 6:20:55pm
        "H_APM", // 6pm
    ];

    // Month
    let monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Weekday
    let weekdayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    // Retrieve values
    let now = new Date(input * 1000);
    let inputDate = timezone_offset ? new Date(now.getTime() + now.getTimezoneOffset() * 60000 + (timezone_offset * 1000)) : now;
    let date = inputDate.getDate();
    let month = monthList[inputDate.getMonth() + 1];
    let year = inputDate.getFullYear();
    let weekday = weekdayList[inputDate.getDay()];
    let hoursWZ = inputDate.getHours() < 10 ? "0" + inputDate.getHours(): inputDate.getHours();
    let hours = inputDate.getHours();
    let minutes = inputDate.getMinutes() < 10 ? "0" + inputDate.getMinutes() : inputDate.getMinutes();
    let seconds = inputDate.getSeconds();
    let hoursAPM = hours < 12 ? hours : hours - 12;
    let APM = hours < 12 ? "am" : "pm";

    // if output is not on the list, return false
    if (!outputFormat.includes(output)) return false;

    // Declare result
    let result;

    switch(output) {
        case "full_date": // 21 September 2020
            result = `${date} ${month} ${year}`;
            break;
        case "month_year": // September 2020
            result = `${month} ${year}`;
            break;
        case "weekday": // Sunday
            result = `${weekday}`;
            break;
        case "HH": // 18
            result = `${hours}`;
            break;
        case "HH:MM": // 18:20
            result = `${hoursWZ}:${minutes}`;
            break;
        case "HH:MM:SS": // 18:20:55
            result = `${hoursWZ}:${minutes}:${seconds}`;
            break;
        case "H:MM_APM": // 6:20pm
            result = `${hoursAPM}:${minutes}${APM}`;
            break;
        case "H:MM:SS_APM": // 6:20:55pm
            result = `${hoursAPM}:${minutes}:${seconds}${APM}`;
            break;
        case "H_APM": // 6pm
            result = `${hoursAPM}${APM}`;
            break;
        default:
            break;
    }
    return result;
};

export default dateFormat;
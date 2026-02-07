export function formatDate(timestamp) {
    const date = new Date(timestamp)
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Get individual date components
    var dayName = days[date.getDay()];
    var monthName = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Pad minutes with leading zero if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Construct the formatted date string
    var formattedDate = dayName + ', ' + monthName + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes + ' ' + ampm;

    return formattedDate;
}

export const timestampToDateFormatter = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true, // Use 12-hour clock format
        timeZone: 'UTC', // Ensure consistent time zone
    };
    return date.toLocaleDateString('en-US', options);
}
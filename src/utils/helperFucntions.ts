export const getDateDifference = (dateString: string): string => {
    const inputDate = new Date(dateString);
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate.getTime() - inputDate.getTime();

    // Calculate the difference in various units
    const millisecondsInSecond = 1000;
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const daysInMonth = 30; // Assuming an average of 30 days in a month
    const daysInYear = 365; // Assuming a non-leap year

    const secondsDifference = timeDifference / millisecondsInSecond;
    const minutesDifference = secondsDifference / secondsInMinute;
    const hoursDifference = minutesDifference / minutesInHour;
    const daysDifference = hoursDifference / hoursInDay;
    const monthsDifference = daysDifference / daysInMonth;
    const yearsDifference = daysDifference / daysInYear;

    // Determine the appropriate unit based on the magnitude of the difference
    if (yearsDifference >= 1) {
        return `${Math.floor(yearsDifference)} years ago`;
    } else if (monthsDifference >= 1) {
        return `${Math.floor(monthsDifference)} months ago`;
    } else if (daysDifference >= 1) {
        return `${Math.floor(daysDifference)} days ago`;
    } else if (hoursDifference >= 1) {
        return `${Math.floor(hoursDifference)} hours ago`;
    } else {
        return 'Less than an hour ago';
    }
}

export const formatNumberAbbreviated = (value: number | string): string => {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numericValue)) {
        // Return the original string if parsing fails
        return value.toString();
    }

    const absValue = Math.abs(numericValue);

    if (absValue >= 1e6) {
        return (absValue / 1e6).toFixed(1) + 'M';
    } else if (absValue >= 1e3) {
        return (absValue / 1e3).toFixed(1) + 'k';
    } else {
        return numericValue.toString();
    }
}
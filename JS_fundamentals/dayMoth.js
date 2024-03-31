function matchAndExtract(pattern, str) {
    const match = str.match(pattern);
    if (match) {
        return match.slice(1); // Extracting captured groups excluding the full match
    } else {
        return null; // No match found
    }
}

const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const dateString = "Today's date is 28-03-2024";
const dateParts = matchAndExtract(datePattern, dateString);

console.log("Date Parts:", dateParts);

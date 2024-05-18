function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let inputYear = 2024;
if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
} else {
    console.log(inputYear + " is not a leap year.");
}


// Task 2: Weather Clothing Adviser

function clothingAdviser(temperature, isRaining) {
    if (temperature >= 25) {
        if (isRaining) {
            return "It's hot and raining. Wear a light raincoat or umbrella.";
        } else {
            return "It's hot and not raining. Wear light and breathable clothing.";
        }
    } else if (temperature >= 15) {
        if (isRaining) {
            return "It's mild and raining. Wear a raincoat or jacket.";
        } else {
            return "It's mild and not raining. Wear layers for comfort.";
        }
    } else {
        if (isRaining) {
            return "It's cold and raining. Wear a warm coat and rain gear.";
        } else {
            return "It's cold and not raining. Dress warmly with layers.";
        }
    }
}

// Example usage:
let currentTemperature = 18;
let isRaining = true;
console.log(clothingAdviser(currentTemperature, isRaining));

// Exercise 38: cities



// Function to describe a city with a default country
function describe_city(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi'); // Uses the default country 'Pakistan'
describe_city('New York', 'USA'); // Specifies 'USA' as the country
describe_city('Tokyo', 'Japan'); // Specifies 'Japan' as the country

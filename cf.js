// Control Flow
//Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius; // Calculate area of the garden
const spacePerPlant = 0.8; // Space required per plant
const maxPlants = Math.floor(area / spacePerPlant); // Maximum number of plants the garden can support

const pruneThreshold = 0.8 * maxPlants; // 80% of maximum capacity
const monitorThreshold = 0.5 * maxPlants; // 50% of maximum capacity

// Function to simulate plant growth and give advice
function plantGrowth(weeks) {
    let plants = 20; // Starting with 20 plants
    console.log(`Starting with ${plants} plants`);

    for (let week = 1; week <= weeks; week++) {
        plants *= 2; // Plants double every week
        console.log(`After week ${week}: ${plants} plants`);

        if (plants >= pruneThreshold) {
            console.log("Decision: Prune the plants. (Plant count >= 80% of capacity)");
        } else if (plants >= monitorThreshold) {
            console.log("Decision: Monitor the plants. (50% <= Plant count < 80%)");
        } else {
            console.log("Decision: Plant more plants. (Plant count < 50%)");
        }
    }
}

// Simulate growth for 1, 2, and 3 weeks
console.log("Results for 1 week:");
plantGrowth(1);

console.log("\nResults for 2 weeks:");
plantGrowth(2);

console.log("\nResults for 3 weeks:");
plantGrowth(3);


// Part 2: Thinking Bigger

// Constants
const PI = 3.1415;
const spacePerPlant = 0.8; // Space required per plant

// Function to calculate the number of plants after a given number of weeks
function calculatePlantGrowth(startingPlants, weeks) {
    let plants = startingPlants;
    for (let week = 1; week <= weeks; week++) {
        plants *= 2; // Plants double every week
    }
    return plants;
}

// Function to calculate the area required for a given number of plants
function calculateRequiredArea(plants) {
    return plants * spacePerPlant;
}

// Function to calculate the new radius of a circular garden with a given area
function calculateRadius(area) {
    return Math.sqrt(area / PI);
}

// Initial conditions
const startingPlants = 100;
const weeks = 10;

// Calculate plant growth and required area
const finalPlantCount = calculatePlantGrowth(startingPlants, weeks);
const requiredArea = calculateRequiredArea(finalPlantCount);

// Initial area of the garden
const initialRadius = 5;
const initialArea = PI * initialRadius * initialRadius;

// Calculate the additional space required
const additionalSpaceRequired = requiredArea - initialArea;

// Calculate the new radius of the expanded garden
const newRadius = calculateRadius(requiredArea);

// Output results
console.log(`Number of plants after ${weeks} weeks: ${finalPlantCount}`);
console.log(`Total area required for ${finalPlantCount} plants: ${requiredArea.toFixed(2)} square meters`);
console.log(`Initial garden area: ${initialArea.toFixed(2)} square meters`);
console.log(`Additional space required: ${additionalSpaceRequired.toFixed(2)} square meters`);
console.log(`Radius of the expanded garden: ${newRadius.toFixed(2)} meters`);

//Part 3: Errors in Judgement

// Constants
const PI = 3.1415;
const spacePerPlant = 0.8; // Space required per plant
const initialRadius = 5; // Radius of the garden in meters

// Function to calculate the area of a circle given its radius
function calculateArea(radius) {
    return PI * radius * radius;
}

// Function to calculate the required area for a given number of plants
function calculateRequiredArea(plants) {
    return plants * spacePerPlant;
}

// Error handling block
try {
    // Number of plants
    const startingPlants = 100;

    // Calculate initial and required areas
    const initialArea = calculateArea(initialRadius);
    const requiredArea = calculateRequiredArea(startingPlants);

    // Check if required space exceeds available space
    if (requiredArea > initialArea) {
        throw new Error('The space required for the plants exceeds the available space in the garden.');
    }

    // Log results if no error is thrown
    console.log(`Number of plants: ${startingPlants}`);
    console.log(`Total area required for ${startingPlants} plants: ${requiredArea.toFixed(2)} square meters`);
    console.log(`Initial garden area: ${initialArea.toFixed(2)} square meters`);
    console.log('The space available is sufficient for the plants.');

} catch (error) {
    // Handle and log the error
    console.error('Error:', error.message);
}

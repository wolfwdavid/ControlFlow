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

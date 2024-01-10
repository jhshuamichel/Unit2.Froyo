

function displayFroyoFlavors() {
    const inputList = prompt("Please enter flavor list of ice cream separated by commas:");

    const flavors = inputList.split(',');

    const flavorQuantities = {}

    for (let i = 0; i < flavors.length; i++) {
        const trimmedFlavor = flavors[i].trim();
        flavorQuantities[trimmedFlavor] = (flavorQuantities[trimmedFlavor]|| 0) + 1;
    }

    console.table(flavorQuantities);
}

displayFroyoFlavors();
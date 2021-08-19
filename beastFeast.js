function feast(beast, dish) {
    if (beast[0] == dish[0] && beast.slice(-1) == dish.slice(-1)) {
        return true;
    } else {
        return false;
    }
}

console.log(feast("great blue heron", "garlic naan")); // return true
console.log(feast("brown bear", "bear claw")); // return false
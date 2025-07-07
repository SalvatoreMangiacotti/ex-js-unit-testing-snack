// SNACK 1
function getInitials(name) {
    return name.split(" ").map(word => word[0]).join("").toUpperCase();
}

// SNACK 2 - SNACK 4 - SNACK 6
function createSlug(string) {
    if (string === "") {
        throw new Error("Il titolo è vuoto!")
    }
    return string.toLowerCase().replace(/\s+/g, '-')
}


// SNACK 3
function average(numbers) {
    const sum = numbers.reduce((acc, currNum) => acc + currNum, 0);
    const average = sum / numbers.length;
    return average;
}

// SNACK 5
function isPalindrome(str) {
    const string = str.toLowerCase().trim()
    return string.split("").reverse().join("").trim() === string;
}

// SNACK 7
function findPostById(posts, id) {
    return posts.find(post => post.id === id);
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}
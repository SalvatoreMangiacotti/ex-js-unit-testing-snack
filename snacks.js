// SNACK 1
function getInitials(name) {
    return name.split(" ").map(word => word[0]).join("").toUpperCase();
}

// SNACK 2 - SNACK 4 - SNACK 6
function createSlug(string) {
    if (!string) {
        throw new Error("Titolo non valido")
    }
    return string.toLowerCase().replaceAll(" ", "-")
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
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`)
    }
    posts.forEach(post => {
        if (
            post.id === undefined ||
            post.title === undefined ||
            post.slug === undefined
        ) {
            throw new Error(`L'array posts non è nel formato corretto.`)
        }
    })
    return posts.find(post => post.id === id) || null;
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}
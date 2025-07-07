const { default: expect } = require('expect');

const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./snacks');

// CHALLENGE
describe('Manipolazione di Stringhe', () => {

    // SNACK 1
    test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
        expect(getInitials("Buzz Lightyear")).toBe("BL");
    })

    // SNACK 5
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome("Anna ")).toBeTruthy();
    })

})


// SNACK 3
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// SNACK 7

const posts = [
    {
        id: 1,
        title: "Le auto sportive più veloci del mondo",
        slug: "le-auto-sportive-piu-veloci-del-mondo"
    },
    {
        id: 2,
        title: "Come scegliere un'auto sportiva",
        slug: "come-scegliere-un-auto-sportiva"
    },
    {
        id: 3,
        title: "Le innovazioni tecnologiche nelle auto sportive",
        slug: "le-innovazioni-tecnologiche-nelle-auto-sportive"
    },
    {
        id: 4,
        title: "I migliori motori per auto sportive",
        slug: "i-migliori-motori-per-auto-sportive"
    }
];


describe('Operazioni su Array', () => {

    // SNACK 3
    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average(numbersArray)).toBe(5.5);
    })

    // SNACK 7
    test("restituisce il post corretto dato l'array di post e l'id", () => {
        const postToCheck = posts[2];
        expect(findPostById(posts, 3)).toEqual(postToCheck)
        expect(findPostById(posts, 5)).toBe(null);
        expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id')
        expect(() => findPostById([34, 67], 2)).toThrow(`L'array posts non è nel formato corretto.`)
    })

    // Alternativa
    // test("se ogni post ha le proprietà: id, title e slug", () => {
    //     posts.forEach(post => {
    //         expect(post).toHaveProperty("id");
    //         expect(post).toHaveProperty("title");
    //         expect(post).toHaveProperty("slug");
    //     });
    // })

})

describe('Generazione di Slug', () => {

    // SNACK 2
    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug("JAVASCRIPT")).toBe("javascript");
    })

    // SNACK 4
    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
    })

    // SNACK 6
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug("")).toThrow("Titolo non valido");
        expect(() => createSlug(null)).toThrow("Titolo non valido");
    })

})
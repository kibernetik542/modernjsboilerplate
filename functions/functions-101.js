let myBook = {
    title: 'The Old Man and the Sea',
    author: 'Hemingway',
    pageCount: 128
}

let myOtherBook = {
    title: 'The Sun Also Rises',
    author: 'Hemingway',
    pageCount: 251
}

let result = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long` 
    }
}

let bookSummary = result(myBook)
let obookSummary = result(myOtherBook)

console.log(bookSummary.summary)


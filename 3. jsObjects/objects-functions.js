const myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

const myOtherBook = {
    title: 'Permanent Record',
    author: 'Edward Snowden',
    pageCount: 723
};

const getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} by ${book.pageCount} pages long.`
    };
}

getSummary(myBook);
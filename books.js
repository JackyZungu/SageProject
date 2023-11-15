const addBookForm = document.getElementById('addBookForm');
const bookList = document.getElementById('bookList');
const searchInput = document.getElementById('searchInput');
const bookInfo = document.getElementById('bookInfo');

function clearBooksData() {
    localStorage.removeItem('books');
    alert('Books data has been cleared.');
    location.reload();
    displayBookGenres();
}

const clearBooksButton = document.getElementById('clearBooksBtn');

clearBooksButton.addEventListener('click', clearBooksData);

function addBook(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const image = document.getElementById('image').value;
    const pubYear = document.getElementById('pubYear').value;

    const book = {
        title,
        author,
        genre,
        image,
        pubYear
    };

    const books = JSON.parse(localStorage.getItem('books')) || [];

    const isBookExists = books.some(
        existingBook =>
            existingBook.title === title &&
            existingBook.author === author &&
            existingBook.genre === genre &&
            existingBook.image === image &&
            existingBook.pubYear === pubYear
    );

    if (isBookExists) {
        alert('This book already exists in the list.');
    }

    else {
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    

    addBookForm.reset();

    displayBookGenres();
}


function displayBookTitles(selectedGenre, books) {
    bookInfo.innerHTML = '';

    const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;

    filteredBooks.forEach(book => {
        const titleItem = document.createElement('div');
        titleItem.textContent = book.title;
        titleItem.classList.add('bookTitle');
        titleItem.addEventListener('click', () => displayBookDetails(book));
        bookInfo.appendChild(titleItem);
    });
}

function displayBookDetails(book) {
    bookInfo.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p><p>Genre: ${book.genre}</p><p>Year of Publication: ${book.pubYear} </p>
     <img src="${book.image}" alt="${book.title}" width="190" height="200" >
    `;
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    const books = JSON.parse(localStorage.getItem('books')) || [];

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
    );

    displayBookTitles('', filteredBooks);
});

bookList.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        const selectedGenre = event.target.textContent;
        const books = JSON.parse(localStorage.getItem('books')) || [];
        displayBookTitles(selectedGenre, books);
    }
});

function init() {
    displayBookGenres();
}

function displayBookGenres() {
    bookList.innerHTML = '';

    const books = JSON.parse(localStorage.getItem('books')) || [];

    const genres = [...new Set(books.map(book => book.genre))];

    genres.forEach(genre => {
        const listItem = document.createElement('li');
        listItem.textContent = genre;
        bookList.appendChild(listItem);
    });
}

addBookForm.addEventListener('submit', addBook);

init();

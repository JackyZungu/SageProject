
 function addBook() {
     const title = document.getElementById('title').value;
     const author = document.getElementById('author').value;
     const category = document.getElementById('category').value;
     const pubYear = document.getElementById('pubYear').value;
     const image = document.getElementById('image').value;

     if (title && author && category && pubYear && image) {
         const book = { title, author,category,pubYear, image };
         saveBook(book);
         displayBooks();
         clearInputFields();
     } else {
         alert('Please enter title, author, category, publication year and image URL.');
     }
 }
         function saveBook(book) {
     let library = getLibraryFromStorage();
     library.push(book);
     localStorage.setItem('library', JSON.stringify(library));
 }

 // Function to get the library from localStorage
 function getLibraryFromStorage() {
     return JSON.parse(localStorage.getItem('library')) || [];
 }

 // Function to display all books in the library
 function displayBooks() {
     const bookList = document.getElementById('bookList');
     bookList.innerHTML = '';

     const library = getLibraryFromStorage();

     library.forEach((book, index) => {
         const li = document.createElement('li');
         li.innerHTML = `${book.title} by ${book.author} ${book.pubYear}
   <img src="${book.image}" alt="${book.title}" width="50" height="70" style="cursor:pointer;" onclick="showBookDetails(${index})">
   <button onclick="updateBook(${index})"><i class="fa fa-pencil" aria-hidden="true"></i></button><br/>
   <button onclick="deleteBook(${index})"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
         bookList.appendChild(li);
     });
 }
         // Function to list all books from localStorage
 function listAllBooks() {
     displayBooks();
 }

 // Function to show book details
 function showBookDetails(index) {
     const library = getLibraryFromStorage();
     const book = library[index];
     const individualBook = document.getElementById('individualBook');
     individualBook.innerHTML = `<h3>${book.title}</h3>
 <p><strong>Author:</strong> ${book.author}</p>
 <p><strong>Categories:</strong> ${book.category}</p>
 <p><strong>Year of publication:</strong>${book.pubYear}</p>
 <p><img src="${book.image}" alt="${book.title}" width="150" height="200"></p>`;
 }
function editBook(index) {
    const newTitle = prompt('Enter new title:');
    const newAuthor = prompt('Enter new author:');
    const newImage = prompt('Enter new image URL:');

    if (newTitle !== null && newAuthor !== null && newImage !== null) {
        const library = getLibraryFromStorage();
        library[index].title = newTitle;
        library[index].author = newAuthor;
        library[index].image = newImage;
        localStorage.setItem('library', JSON.stringify(library));
        displayBooks();
    }
}
 function deleteBook(index) {
     const isConfirmed = confirm('Are you sure you want to delete this book?');

     if (isConfirmed) {
         const library = getLibraryFromStorage();
         library.splice(index, 1);
         localStorage.setItem('library', JSON.stringify(library));
         displayBooks();
     }
 }
         // Function to clear input fields
 function clearInputFields() {
     document.getElementById('title').value = '';
     document.getElementById('author').value = '';
     document.getElementById('category').value = '';
     document.getElementById('pubYear').value = '';
     document.getElementById('image').value = '';
 }

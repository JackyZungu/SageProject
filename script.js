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

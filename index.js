function addBook() {
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  const title = titleInput.value;
  const author = authorInput.value;

  // Check if title or author is empty
  if (title.trim() === '' || author.trim() === '') {
    return; // Stop execution
  }

  const bookElement = document.createElement('p');
  bookElement.innerText = `${title} - ${author}`;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', () => {
    bookElement.remove();
  });

  bookElement.appendChild(removeButton);

  document.getElementById('bookList').appendChild(bookElement);

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
}

// Call the addBook function somewhere in your code if it is intended to be used
addBook();

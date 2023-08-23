//your code here!

// Get the list element
const infiList = document.getElementById('infi-list');

// Function to create and append a new list item
function createListItem(itemNumber) {
  const li = document.createElement('li');
  li.textContent = `List Item ${itemNumber}`;
  infiList.appendChild(li);
}

// Function to handle scrolling and load more items
function handleScroll() {
  const scrollTop = infiList.scrollTop;
  const scrollHeight = infiList.scrollHeight;
  const clientHeight = infiList.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    loadMoreItems();
  }
}

// Function to load more items
let currentItemNumber = 11; // Start from the 11th item
function loadMoreItems() {
  for (let i = 0; i < 2; i++) {
    createListItem(currentItemNumber);
    currentItemNumber++;
  }
}

// Initial load of default items
for (let i = 1; i <= 10; i++) {

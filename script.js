const list = document.getElementById('infi-list');
const initialItemsCount = 10;
let currentItemsCount = initialItemsCount;

// Function to add list items
function addListItems(count) {
  for (let i = 1; i <= count; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${currentItemsCount + i}`;
    list.appendChild(li);
  }
  currentItemsCount += count;
}

// Add initial list items
addListItems(initialItemsCount);

// Function to check if user reached the end of the list
function checkScroll() {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    // Add 2 more list items when reaching the end
    addListItems(2);
  }
}

// Listen for scroll events
list.addEventListener('scroll', checkScroll);

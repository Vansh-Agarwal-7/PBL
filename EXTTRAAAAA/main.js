// Get the modals and buttons
const addExpenseBtn = document.getElementById('add-expense-btn');
const addIncomeBtn = document.getElementById('add-income-btn');
const expensePopup = document.getElementById('expense-popup');
const incomePopup = document.getElementById('income-popup');
const closeExpenseBtn = document.getElementById('close-expense');
const closeIncomeBtn = document.getElementById('close-income');
const expenseCategories = document.getElementById('expense-categories');
const incomeCategories = document.getElementById('income-categories');
const expenseInputSection = document.getElementById('expense-input-section');
const incomeInputSection = document.getElementById('income-input-section');
const selectedExpenseCategory = document.getElementById('selected-expense-category');
const selectedIncomeCategory = document.getElementById('selected-income-category');
const expenseAmountInput = document.getElementById('expense-amount');
const incomeAmountInput = document.getElementById('income-amount');
const submitExpenseBtn = document.getElementById('submit-expense');
const submitIncomeBtn = document.getElementById('submit-income');
let totalExpense = document.getElementById('total-expense');
let totalIncome = document.getElementById('total-income');

// Show expense popup
addExpenseBtn.addEventListener('click', () => {
    expensePopup.style.display = 'block';
});

// Show income popup
addIncomeBtn.addEventListener('click', () => {
    incomePopup.style.display = 'block';
});

// Close expense popup
closeExpenseBtn.addEventListener('click', () => {
    expensePopup.style.display = 'none';
    expenseInputSection.style.display = 'none';
});

// Close income popup
closeIncomeBtn.addEventListener('click', () => {
    incomePopup.style.display = 'none';
    incomeInputSection.style.display = 'none';
});

// Select expense category and show amount input along with description input
expenseCategories.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        selectedExpenseCategory.innerText = `Category: ${e.target.getAttribute('data-category')}`;
        expenseInputSection.style.display = 'block';
    }
});

// Select income category and show amount input along with description input
incomeCategories.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        selectedIncomeCategory.innerText = `Category: ${e.target.getAttribute('data-category')}`;
        incomeInputSection.style.display = 'block';
    }
});
const expenseEntries = document.getElementById('expense-entries');
const incomeEntries = document.getElementById('income-entries');

// Submit expense
submitExpenseBtn.addEventListener('click', () => {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(expenseAmountInput.value);
    if (description.trim() === '') {
        alert('Please write the expense description');
        return;
    }
    if (!isNaN(amount) && amount > 0) {
        let currentExpense = parseFloat(totalExpense.innerText.replace('$', ''));
        totalExpense.innerText = `$${(currentExpense + amount).toFixed(2)}`;

        // Add the new expense entry
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = `
            <span class="entry-category">${selectedExpenseCategory.innerText}</span>
            <span class="entry-description">${description}</span>
            <span class="entry-amount entry-expense">-$${amount.toFixed(2)}</span>
        `;
        expenseEntries.appendChild(entry);

        expensePopup.style.display = 'none';
        expenseInputSection.style.display = 'none';
        expenseAmountInput.value = '';
        document.getElementById('expense-description').value = ''; // Reset description
    } else {
        alert('Please enter a valid amount');
    }
});

// Submit income
submitIncomeBtn.addEventListener('click', () => {
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(incomeAmountInput.value);
    if (description.trim() === '') {
        alert('Please write the income source description');
        return;
    }
    if (!isNaN(amount) && amount > 0) {
        let currentIncome = parseFloat(totalIncome.innerText.replace('$', ''));
        totalIncome.innerText = `$${(currentIncome + amount).toFixed(2)}`;

        // Add the new income entry
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = `
            <span class="entry-category">${selectedIncomeCategory.innerText}</span>
            <span class="entry-description">${description}</span>
            <span class="entry-amount entry-income">+$${amount.toFixed(2)}</span>
        `;
        incomeEntries.appendChild(entry);

        incomePopup.style.display = 'none';
        incomeInputSection.style.display = 'none';
        incomeAmountInput.value = '';
        document.getElementById('income-description').value = ''; // Reset description
    } else {
        alert('Please enter a valid amount');
    }
});
// Sample entries data (you can replace this with dynamic entries)
let entries = [
    { id: 1, category: 'Shopping', description: 'Bought clothes', amount: -150 },
];

// Function to load entries
function loadEntries() {
    const entryList = document.getElementById('entry-list');
    entryList.innerHTML = ''; // Clear previous entries
    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.setAttribute('data-id', entry.id);
        entryDiv.innerHTML = `
            <div class="entry-category">${entry.category}</div>
            <div class="entry-description">${entry.description}</div>
            <div class="entry-amount ${entry.amount < 0 ? 'entry-expense' : 'entry-income'}">${entry.amount < 0 ? '-' : ''} $${Math.abs(entry.amount)}</div>
            <button class="edit-btn" style="display: none;">Edit</button>
        `;
        entryList.appendChild(entryDiv);
    });
}

// Show Edit Modal
const modal = document.getElementById('edit-modal');
const closeModal = document.querySelector('.close-btn');
const editForm = document.getElementById('edit-entry-form');
let currentEntryId = null;

document.getElementById('entry-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('entry')) {
        const editBtn = e.target.querySelector('.edit-btn');
        editBtn.style.display = 'inline-block';
    } else if (e.target.classList.contains('edit-btn')) {
        const entryId = e.target.parentElement.getAttribute('data-id');
        currentEntryId = entryId;
        const entry = entries.find(e => e.id == entryId);
        document.getElementById('edit-category').value = entry.category;
        document.getElementById('edit-description').value = entry.description;
        document.getElementById('edit-amount').value = entry.amount;
        modal.style.display = 'block';
    }
});
// Sample entries data (you can replace this with your dynamic data)
const entries = [
    { type: 'expense', category: 'shopping', amount: 50 },
    { type: 'income', category: 'salary', amount: 500 },
    { type: 'expense', category: 'entertainment', amount: 100 },
    { type: 'income', category: 'daily-wage', amount: 100 },
    { type: 'expense', category: 'food', amount: 20 },
    { type: 'income', category: 'salary', amount: 700 }
];

const entriesSection = document.getElementById('entries-section');

// Function to display entries
function displayEntries(filteredEntries) {
    entriesSection.innerHTML = ''; // Clear existing entries
    filteredEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry-container');
        entryDiv.innerHTML = `
            <div class="entry">
                <span class="entry-category">${entry.category}</span>
                <span class="entry-amount ${entry.type === 'expense' ? 'entry-expense' : 'entry-income'}">${entry.amount}</span>
            </div>
        `;
        entriesSection.appendChild(entryDiv);
    });
}

// Initially display all entries
displayEntries(entries);

// Filtering logic
document.getElementById('filter-btn').addEventListener('click', function() {
    const filterType = document.getElementById('filter-type').value;

    let filteredEntries = entries; // Default to showing all entries

    if (filterType === 'expense') {
        filteredEntries = entries.filter(entry => entry.type === 'expense');
    } else if (filterType === 'income') {
        filteredEntries = entries.filter(entry => entry.type === 'income');
    } else if (filterType !== 'all') {
        filteredEntries = entries.filter(entry => entry.category === filterType);
    }

    displayEntries(filteredEntries); // Display filtered entries
});



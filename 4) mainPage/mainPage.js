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




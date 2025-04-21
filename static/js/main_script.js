var sideBarTrue = true;
// const sidebarList = [true, false, false, false, false, false, false, false]

function clear_content() {
    // Hide all sections
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.transactions').style.display = 'none';
    document.querySelector('.categories').style.display = 'none';
    document.querySelector('.reports').style.display = 'none';
    document.querySelector('.accounts').style.display = 'none';
    document.querySelector('.settings').style.display = 'none';
    document.querySelector('.help').style.display = 'none';
}

// Function to show the Dashboard section
function dashBoard() {
    clear_content();
    document.querySelector('.dashboard').style.display = 'block';
}

// Function to show the Transactions section
function transactions() {
    clear_content();
    document.querySelector('.transactions').style.display = 'block';

    console.log("works");

    // Array of possible categories
    const categories = [
        'Groceries', 'Salary', 'Rent', 'Utilities', 'Investment',
        'Entertainment', 'Transport', 'Healthcare', 'Shopping', 'Education'
    ];

    // Function to generate random transactions
    function generateRandomTransactions(count) {
        const transactions = [];
        for (let i = 1; i <= count; i++) {
            const category = categories[Math.floor(Math.random() * categories.length)];
            const description = `${category} payment`;
            const amount = Math.random() > 0.5
                ? Math.floor(Math.random() * 5000) + 100 // Deposit: $100 to $5000
                : -Math.floor(Math.random() * 5000) - 50; // Expense: -$50 to -$5000

            transactions.push({
                sno: i,
                category: category,
                description: description,
                amount: amount
            });
        }
        return transactions;
    }

    // Function to render transactions into the table
    function renderTransactions(transactions) {
        const tbody = document.querySelector('.transactions tbody');
        tbody.innerHTML = ''; // Clear existing rows

        transactions.forEach((txn) => {
            const row = document.createElement('tr');

            const amountClass = txn.amount > 0 ? 'deposit' : 'expense';
            const formattedAmount = txn.amount > 0
                ? `+$${Math.abs(txn.amount).toLocaleString()}`
                : `-$${Math.abs(txn.amount).toLocaleString()}`;

            row.innerHTML = `
                <td>${txn.sno}</td>
                <td>${txn.category}</td>
                <td>${txn.description}</td>
                <td class="${amountClass}">${formattedAmount}</td>
            `;

            tbody.appendChild(row);
        });
    }

    // Generate 150 random transactions and render them
    const transactionsData = generateRandomTransactions(150);
    renderTransactions(transactionsData);
}

// Function to show the Categories section
function categories() {
    clear_content();
    document.querySelector('.categories').style.display = 'block';
}

// Function to show the Reports section
function reports() {
    clear_content();
    document.querySelector('.reports').style.display = 'block';
}

// Function to show the Accounts section
function accounts() {
    clear_content();
    document.querySelector('.accounts').style.display = 'block';
}

// Function to show the Settings section
function settings() {
    clear_content();
    document.querySelector('.settings').style.display = 'block';
}

// Function to show the Help section
function help() {
    clear_content();
    document.querySelector('.help').style.display = 'block';
}

document.getElementById("sbacn-menu").addEventListener("click", ()=>{
    var sidebar = document.getElementsByClassName("sidebar")[0];
    if (sideBarTrue){
        sidebar.style.display = "none";
        sideBarTrue = false;
    }
    else{
        sidebar.style.display = "flex";
        sideBarTrue = true;
    }
});

var buttons = document.querySelectorAll(".sidebar button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Labels for the x-axis (months)
const labels = [
    'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025',
    'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025',
    'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025'
];

// Function to generate random spending data
function generateRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

// Generate random spending data
const spendingData = generateRandomData(labels.length, 0, 10000);

// Chart configuration
const config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Monthly Spending',
                data: spendingData,
                borderColor: 'gold',
                backgroundColor: 'rgba(255, 215, 0, 0.2)', // Light golden color with transparency
                tension: 0.5, // Smooth curve
                pointRadius: 5, // Size of data points
                pointBorderColor: 'gold',
                pointBackgroundColor: 'white',
                pointHoverRadius: 7,
                pointHoverBackgroundColor: 'gold',
                pointHoverBorderColor: 'white'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Spending ($)'
                },
                ticks: {
                    beginAtZero: true, // Start y-axis at 0
                    callback: function(value, index, values) {
                        return '$' + value.toLocaleString(); // Format as currency
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Spending (2025)'
            }
        }
    }
};

// Get the canvas context and render the chart
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, config);

console.log(document.getElementById('myChart'));

dashBoard()
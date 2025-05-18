








// Total Purchases Over Time (Line Chart)
const totalPurchasesCtx = document.getElementById('totalPurchasesChart').getContext('2d');
new Chart(totalPurchasesCtx, {
    type: 'bar',
    data: {
        labels: ['1-5', '6-10', '11-15', '16-20', '21-25', '26-30'],
        datasets: [{
            label: 'Total Purchases',
            data: [1200, 1900, 3000, 2500, 3200, 1200],
            borderColor: 'rgba(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true
    }
});

// Product Types (Pie Chart)
const productTypesCtx = document.getElementById('productTypesChart').getContext('2d');
new Chart(productTypesCtx, {
    type: 'doughnut',
    data: {
        labels: ['পাউরুটি', 'বিস্কুট', 'পেস্ট্রি', 'কুকি'],
        datasets: [{
            label: 'Product Types',
            data: [40, 25, 20, 15],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});
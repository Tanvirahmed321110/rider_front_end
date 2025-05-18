
// Total Purchases Over Time (Line Chart)
// const totalPurchasesCtx = document.getElementById('totalPurchasesChart').getContext('2d');
// new Chart(totalPurchasesCtx, {
//     type: 'bar',
//     data: {
//         labels: ['1-5', '6-10', '11-15', '16-20', '21-25', '26-30'],
//         datasets: [{
//             label: 'Total Purchases',
//             data: [1200, 1900, 3000, 2500, 3200, 1200],
//             borderColor: 'rgba(75, 192, 192)',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             tension: 0.4
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });


const ctx = document.getElementById('nearDeadline').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Task one', 'Task Nine', 'Task Four', 'Task Six', 'Task Five', 'Management Task', 'Team Task'],
        datasets: [{
            label: 'Days Until Deadline',
            data: [2, 5, 2, 3, 6, 5, 9], // Number of days left for each task
            backgroundColor: '#F44336', // red bars
            maxBarThickness: 60
        }]
    },
    options: {
        indexAxis: 'x', // Horizontal bars
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Days Left'
                },
                ticks: {
                    beginAtZero: true, stepSize: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Task Name'
                }
            }
        }
    }
});




// complete and uncomple task
const regularCahrt = document.getElementById('regularChart').getContext('2d');
new Chart(regularCahrt, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Uncompleted'],
        datasets: [{
            label: 'Task',
            data: [40, 25],
            backgroundColor: ['#4CAF50', '#F44336',],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});



// complete and uncomple task
const assignCahrt = document.getElementById('assignChart').getContext('2d');
new Chart(assignCahrt, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Uncompleted'],
        datasets: [{
            label: 'Task',
            data: [40, 60],
            backgroundColor: ['#4CAF50', '#F44336',],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});
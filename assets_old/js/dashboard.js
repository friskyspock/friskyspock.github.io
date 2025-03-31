// Skills Chart
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
new Chart(skillsCtx, {
    type: 'radar',
    data: {
        labels: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Analysis', 'Statistics', 'Programming'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 80, 90, 85, 90],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    }
});

// Add more charts and interactive elements
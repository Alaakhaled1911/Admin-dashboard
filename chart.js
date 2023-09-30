const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon', ],
        datasets: [{
            label: '# of Votes',
            data: [600,800,1000],
            backgroundColor: [
                'rgba(54, 162, 235, .8)',
                'rgba(255, 99, 132, .8)',
                'rgba(255, 206, 86, .8)',
              
            ],
    
            borderWidth: 1
        }]
    },
    options: {
     responsive:true,
    }
});
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon', ],
        datasets: [{
            label: 'Earning',
            data: [600,800,1000],
            backgroundColor: [
                'rgba(54, 162, 235, .8)',
                'rgba(255, 99, 132, .8)',
                'rgba(255, 206, 86, .8)',
              
            ],
    
            borderWidth: 1
        }]
    },
    options: {
     responsive:true,
    }
});
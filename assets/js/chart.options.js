const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const data = {
  labels: labels,
  datasets: [{
    data: [100, 80, 70, 102, 70, 80, 65, 82, 71, 88, 64, 77],
    fill: true,
    backgroundColor: ['#4673f240'],
    pointBackgroundColor: ['#4673f250'],
    borderWidth: 1,
    borderColor: ['#4673f2'],
    lineTension: .4,
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false
        },
    },
  } 
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Chart 2
const labels2 = [
  "01 May",
  "02 May",
  "03 May",
  "04 May",
  "05 May",
  "06 May",
  "07 May",
  "08 May",
  "09 May",
  "10 May",
  "11 May",
  "12 May",
  "13 May",
  "14 May",
  "15 May",
  "16 May",
  "17 May",
  "18 May",
  "19 May",
  "20 May",
  "21 May",
  "22 May",
  "23 May",
  "24 May",
  "25 May",
  "26 May",
  "27 May",
  "28 May",
  "29 May",
  "30 May",
  "31 May",
];
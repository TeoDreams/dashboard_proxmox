// example
const cpuData = {
  labels: ['Core 1', 'Core 2', 'Core 3', 'Core 4'],
  datasets: [{
    label: 'CPU Load (%)',
    data: [65, 59, 80, 81],
    backgroundColor: '#bfce6c',
  }]
};

const ramData = {
  labels: ['Used', 'Empty'],
  datasets: [{
    label: 'RAM (GB)',
    data: [6, 2],
    backgroundColor: [
      '#bfce6c',
      '#ebebeb'
    ],
  }]
};

// config charts
const cpuConfig = {
  type: 'bar',
  data: cpuData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'CPU Usage'
      }
    }
  },
};

const ramConfig = {
  type: 'doughnut',
  data: ramData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'RAM Usage'
      }
    }
  },
};

// add event
window.addEventListener('DOMContentLoaded', () => {
  const cpuCtx = document.getElementById('cpuChart').getContext('2d');
  const ramCtx = document.getElementById('ramChart').getContext('2d');
  new Chart(cpuCtx, cpuConfig);
  new Chart(ramCtx, ramConfig);
});
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function WorkingHoursChart() {
    const chart = new Chart;
    console.log(chart);
    const state = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                label: 'Cat1',
                backgroundColor: 'rgba(107, 137, 230,1)',
                borderWidth: 1,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: true,
                data: [4, 2, 1, 3, 4, 3, 2, 1, 3, 4, 1, 2],
            },
            {
                label: 'Cat2',
                backgroundColor: 'rgba(100, 179, 235,1)',
                borderWidth: 1,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: true,
                    data: [4, 2, 1, 3, 4, 3, 2, 1, 3, 4, 1, 2],
            },
            {
                label: 'Cat3',
                backgroundColor: 'rgba(226, 226, 235,1)',
                borderWidth: 1,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: true,
                    data: [4, 2, 1, 3, 4, 3, 2, 1, 3, 4, 1, 2],
            }
        ]
    }

    return (
        <div className='flex-auto h-64 p-4'>

            <Bar
            
                data={state}
                legend={
                    {
                        display: false,
                    }
                }
                options={
                    {
                        legend: {
                            display: false,
                            position: 'bottom'
                        },
                        responsive: true,
                        barThickness: 12,
                        borderRadius: 3,
                        scales: {
                            x: {
                                stacked: true,
                            },
                            y: {
                                stacked: true
                            }
                        },
                      
                        maintainAspectRatio: false,
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.yLabel;
                                }
                            }
                        },
                    }
                }
            />
          
        </div>
    );
}
export default WorkingHoursChart;
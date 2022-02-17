import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function WorkingHoursChart() {
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
        <div className='flex flex-col flex-auto p-8 mr-2 ml-2 card'>
            <div className="flex-1">
                <label className="card-text">Working Hours breakdown</label>
            </div>
            <div className='flex-auto'>
                <Bar
                    data={state}
                    legend={
                        {
                            display: false,
                        }
                    }
                    options={
                        {
                            maintainAspectRatio: false,
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
         
          
        </div>
    );
}
export default WorkingHoursChart;
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const TotalHoursChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow','Green'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100,70],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ],
            hoverOffset: 4
          }]
    }

    const options = {
        // borderJoinStyle: 'round',
        // legend: false,
        responsive: true,
            legend: {
                display: false,
                position: 'right'
            },
       
       
        borderRadius:{
            innerStart:20,
            outerStart:20,
        },
        cutout: 180
     
    }
    return (
        <div className="flex-auto w-12 bg-white m-4">
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    )
}

export default TotalHoursChart;
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
        cutout: 160
     
    }
    return (
        <div className="">
            <Doughnut
         
                data={data}
                options={{
            
                    elements: {
                      
                      center: {
                        legend: { display: false, position: "right" },
                        text: "Red is 2/3 the total numbers",
                        color: "#FF6384", // Default is #000000
                        fontStyle: "Arial", // Default is Arial
                        sidePadding: 20, // Default is 20 (as a percentage)
                        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                        lineHeight: 25 // Default is 25 (in px), used for when text wraps
                      }
                    },
                    
                  }}
            />
        </div>
    )
}

export default TotalHoursChart;
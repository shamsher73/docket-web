import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface Category {
    label:string,
    data:Array<number>
}
function WorkingHoursChart({labels,dataset}:{labels:Array<string>,dataset:Array<Category>}) {
    const colors = ["rgba(107, 137, 230,1)","rgba(100, 179, 235,1)","rgba(226, 226, 235,1)"]
    const data = dataset.map((category:Category, index:number) => {
        return {
            label: category.label,
            data: category.data,
            backgroundColor: colors[index],
            borderWidth: 1,
            borderRadius: 3,
            barThickness: 12,
        }
    })

    const state = {
        labels:labels,
        datasets:data
    }

    return (
        <div className='flex flex-col flex-auto p-8 mr-2 ml-2 card'>
            <div className="flex-1">
                <label className="card-text">Working Hours breakdown</label>
            </div>
            <div className='flex-auto flex sm:flex-auto'>
                <Bar
                    data={state}
                    options={
                        {
                            maintainAspectRatio: false,
                            responsive: true,
                            scales: {
                                x: {
                                    stacked: true,
                                },
                                y: {
                                    stacked: true
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
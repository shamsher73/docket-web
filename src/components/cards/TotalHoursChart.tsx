import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

const TotalHoursChart = () => {
    const data = {
        // labels: ['Red', 'Blue', 'Yellow','Green'],
        datasets: [{
            // label: 'My First Dataset',
            data: [300, 50, 100, 70],
            backgroundColor: [
                'rgb(255, 206, 115)',
                'rgb(226, 226, 235)',
                'rgb(100, 179, 235)',
                'rgb(154, 69, 242)'
            ],
            hoverOffset: 4
        }]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        borderRadius: {
            innerStart: 20,
            outerStart: 20,
        },
        cutout: 80,
        rotation: 1.25 * Math.PI,
    }

    return (
        <div className="card m-4">
            <div className="pt-6 pr-8 pl-7">
                <label className="basis-1/2 card-text">Total working hours</label>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 grid justify-items-center">
                    <div className="chart-container  self-center">
                        <Doughnut
                            data={data}
                            options={options}
                        />
                    </div>
                    <div className="relative self-center text-centers flex bottom-32">
                        <label className="working-hours-center-text">9 hrs</label>
                    </div>
                </div>
                <div className="basis-1/2 flex-auto ml-6 mt-10">
                    <div className="flex flex-auto mt-4">
                        <span className="m-1 dot bg-[#64B3EB]"></span>
                        <span className="flex-auto graph-label">Category 1</span>
                        <span className="flex-none graph-sub-label pr-12">9 hrs</span>
                    </div>
                    <div className="flex flex-auto mt-4">
                        <span className="m-1 dot bg-[#9a45f2]"></span>
                        <span className="flex-auto graph-label">Category 2</span>
                        <span className="flex-none graph-sub-label pr-12">9 hrs</span>
                    </div>
                    <div className="flex flex-auto mt-4">
                        <span className="m-1 dot bg-[#ffce73]"></span>
                        <span className="flex-auto graph-label">Category 3</span>
                        <span className="flex-none graph-sub-label pr-12">9 hrs</span>
                    </div>
                    <div className="flex flex-auto mt-4">
                        <span className="m-1 dot bg-[#e2e2eb]"></span>
                        <span className="flex-auto graph-label">More</span>
                        <span className="flex-none graph-sub-label pr-12">9 hrs</span>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default TotalHoursChart;
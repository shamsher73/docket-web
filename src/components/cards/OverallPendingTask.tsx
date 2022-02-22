
const OverallPendingTask = ({max,value}:{max:number,value:number}) => {
    return (
        <div className="flex flex-col flex-auto card m-4 ">
            <div className="flex flex-row basis-1/2 pt-6 pr-8 pl-7">
                <label className="basis-1/2 card-text">Overall Pending Task</label>
                <label className="basis-1/2 flex justify-end progress-bar-value">{value}/{max}</label>
            </div>
            <div className="basis-1/2 pt-3 pl-7 pb-6 pr-8">
                <progress className="progress-bar" value={value} max={max}></progress>
            </div>
            
        </div>
    )
}

export default OverallPendingTask;

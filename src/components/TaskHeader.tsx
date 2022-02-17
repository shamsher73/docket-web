
import { ReactComponent as Filter } from './../styles/assets/images/btn-filter.svg';

const TaskHeader = ({filterHandler,filter}:{filterHandler:any,filter:string}) => {
    
    const className = "dashboard-selector-active"
    return (
        <div className="flex">
            <div className="flex-1 card-text p-1">
                Tasks
            </div>
            <div className="flex-none flex filter-border">
            
                <button className={(filter === 'all') ? `${className} flex-auto p-1 pr-4 pl-4` : `flex-auto p-1 pr-4 pl-4`} onClick={() => filterHandler('all')}>All</button>
                <button className={(filter === 'pending') ? `${className} flex-auto p-1 pr-4 pl-4` : `flex-auto p-1 pr-4 pl-4`} onClick={() => filterHandler('pending')}>Pending</button>
                <button className={(filter === 'completed') ? `${className} flex-auto p-1 pr-4 pl-4` : `flex-auto p-1 pr-4 pl-4`} onClick={() => filterHandler('completed')}>Completed</button>
            </div>
            <div className="flex-none p-2 ml-4 filter-border">
                <Filter className="w-18 h-18" />
            </div>
        </div>
    )
}

export default TaskHeader;
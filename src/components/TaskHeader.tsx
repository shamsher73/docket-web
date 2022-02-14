
import { ReactComponent as Filter } from './../styles/btn-filter.svg';

const TaskHeader = () => {
    return (
        <div className="flex">
            <div className="flex-1 card-text p-1">
                Tasks
            </div>
            <div className="flex-none flex filter-border">
                <button className="flex-auto p-1 pr-4 pl-4 dashboard-selector-active">All</button>
                <button className="flex-auto p-1 pr-4 pl-4">Pending</button>
                <button className="flex-auto p-1 pr-4 pl-4">Completed</button>
            </div>
            <div className="flex-none p-2 ml-4 filter-border">
                <Filter className="w-18 h-18" />
            </div>
        </div>
    )
}

export default TaskHeader;
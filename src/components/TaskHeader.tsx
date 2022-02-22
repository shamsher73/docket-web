
import { ReactComponent as FilterSVG } from './../styles/assets/images/btn-filter.svg';
import Filter from './Filter';

const TaskHeader = ({filterHandler,filter,filterValues}:{filterHandler:any,filter:string,filterValues:Array<string>}) => {
    
   
    return (
        <div className="flex">
            <div className="flex-1 card-text p-1">
                Tasks
            </div>
            <Filter filter={filter} filterValues={filterValues} filterHandler={filterHandler}/>
            <div className="flex-none p-2 ml-4 filter-border">
                <FilterSVG className="w-18 h-18" />
            </div>
        </div>
    )
}

export default TaskHeader;
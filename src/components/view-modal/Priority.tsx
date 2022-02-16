
import { ReactComponent as PriorityIcon } from './../../styles/assets/images/priority.svg';

const Priority = ({ priority }:{priority:string}) => {
    return (
        <div className='flex p-2 border-t'>
            <PriorityIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">PRIORITY</div>
                <div className="ml-1 p-2">
                    <span className="priority-button p-1 pl-2 pr-2 "><label className='priority-button-text'>Urgent</label></span>
                    <span className="priority-button p-1 pl-2 pr-2 ml-2"><label className='priority-button-text'>Urgent</label></span>
                    <span className="priority-button p-1 pl-2 pr-2 ml-2"><label className='priority-button-text'>Urgent</label></span>
                </div>
            </div>
            
        </div>
    );
}

export default Priority;
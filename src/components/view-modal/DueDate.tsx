
import { ReactComponent as Date } from './../../styles/date.svg';

const DueDate = ():JSX.Element => {
    return (
        <div className='flex p-2 border-t'>
            <Date className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">DUE DATE</div>
                <div className="ml-1 modal-subtitle mt-2">29 Jan 2019</div>
            </div>
        </div>
    );
}

export default DueDate;

import { ReactComponent as Sun } from './../../styles/sun.svg';

const AddToDay = ():JSX.Element => {
    return (
        <div className='flex p-2 border-t'>
            <Sun className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="ml-1 modal-subtitle">Add to my day</div>
            </div>
        </div>
    );
}

export default AddToDay;
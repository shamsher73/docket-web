
import { ReactComponent as RepeatIcon } from './../../styles/assets/images/repeat.svg';

const Repeat = ():JSX.Element => {
    return (
        <div className='flex p-2 border-t'>
            <RepeatIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">REPEAT</div>
                <div className="ml-1 modal-subtitle mt-2">Monthly</div>
            </div>
        </div>
    );
}

export default Repeat;
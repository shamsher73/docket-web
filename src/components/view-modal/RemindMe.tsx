
import { ReactComponent as Alarm } from './../../styles/assets/images/alarm.svg';

const RemindMe = ():JSX.Element => {
    return (
        <div className='flex p-2 border-t'>
            <Alarm className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">REMIND ME</div>
                <div className="ml-1 modal-subtitle mt-2">29 Jan 2019</div>
            </div>
        </div>
    );
}

export default RemindMe;
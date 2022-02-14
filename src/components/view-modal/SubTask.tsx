
import { ReactComponent as SubTaskIcon } from './../../styles/subtask.svg';
import { ReactComponent as Cancel } from './../../styles/cancel.svg';
import { ReactComponent as Add } from './../../styles/add.svg';

const SubTask = ():JSX.Element => {
    return (
        <div className='flex p-2 border-t'>
            <SubTaskIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">SUBTASK <span className='label-blue form-label p-1 ml-1'>1 hr 20 min</span></div>
                <div className="ml-1">
                    <div className="flex p-2">
                        <Add className='flex-none' />
                        <label className="flex-auto pl-2 add">Add subtask</label>
                    </div>
                    <div className="flex p-2">
                        <input type="radio" name="subtask" value="1" className="flex-none "/>
                        <label className="flex-auto pl-2 modal-subtitle">Subtask 2</label>
                        <input type="text" className="flex-none w-12 bg-slate-100 priority-button-text" value="1:00"/>
                        <label className="flex-none pl-1 pr-1 modal-subtitle">-</label>
                        <input type="text" className="flex-none w-12 bg-slate-100 priority-button-text" value="1:00" />
                        <Cancel className="right-0 "/>
                    </div>
                    <div className="flex p-2">
                        <input type="radio" name="subtask" value="1" className="flex-none "/>
                        <label className="flex-auto pl-2 modal-subtitle">Subtask 2</label>
                        <input type="text" className="flex-none w-12 bg-slate-100 priority-button-text" value="1:00"/>
                        <label className="flex-none pl-1 pr-1 modal-subtitle">-</label>
                        <input type="text" className="flex-none w-12 bg-slate-100 priority-button-text" value="1:00" />
                        <Cancel className="right-0 "/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubTask;
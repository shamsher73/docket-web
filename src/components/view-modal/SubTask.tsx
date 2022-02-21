
import { ReactComponent as SubTaskIcon } from './../../styles/assets/images/subtask.svg';
import { ReactComponent as Cancel } from './../../styles/assets/images/cancel.svg';
import { ReactComponent as Add } from './../../styles/assets/images/add.svg';
import { useState } from 'react';

interface SubTaskType {
    title: string
    startTime: string
    endTime: string
    status: string
}

const SubTask = ({subTasks,addSubTask}:{subTasks:Array<SubTaskType>,addSubTask:any}):JSX.Element => {

    const [addSubTaskShow, setAddSubTaskShow] = useState(false);
    const [newSubTask, setNewSubTask] = useState({
        title: '',
        startTime: '',
        endTime: '',
        status: 'pending',
    });

    const createSubTask = (e:any) => {
        e.preventDefault();
        addSubTask([...subTasks, newSubTask]);
        setAddSubTaskShow(false);
        setNewSubTask({
            title: '',
            startTime: '',
            endTime: '',
            status: 'pending',
        })
    }

    const removeSubTask = (subTask:SubTaskType) => {
        addSubTask(subTasks.filter((t:SubTaskType) => t !== subTask));
    }

    const subTaskList = subTasks.map((subTask:SubTaskType, index:number) => {
        return (
            <div className="flex p-2" key={index}>
            <input type="radio" name="subtask" value="1" className="flex-none "/>
            <label className="flex-auto pl-2 modal-subtitle">{subTask.title}</label>
            <input type="text" className="flex-none w-10 bg-slate-100 priority-button-text" value={subTask.startTime} disabled/>
            <label className="flex-none pl-1 pr-1 modal-subtitle">-</label>
            <input type="text" className="flex-none w-10 bg-slate-100 priority-button-text" value={subTask.endTime} disabled/>
            <Cancel className="right-0 ml-1 mt-1" onClick={(e) => removeSubTask(subTask)}/>
        </div>
        )
    })

    return (
        <div className='flex p-2 border-t'>
            <SubTaskIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">SUBTASK <span className='label-blue form-label p-1 ml-1'>1 hr 20 min</span></div>
                <div className="ml-1">
                    {
                        !addSubTaskShow &&
                        <div className="flex p-1">
                            <Add className='flex-none' />
                            <label className="flex-auto pl-2 add" onClick={() => setAddSubTaskShow(true)}>Add subtask</label>
                        </div>
                    }
                    {
                        addSubTaskShow &&
                        <div className="flex p-1">
                            <input type="text" className="flex-none w-32" placeholder="Enter subtask" onChange={(e) => setNewSubTask({...newSubTask, title: e.target.value})}/>
                            <input type="text" className="flex-none w-12 bg-slate-100 priority-button-text"  onChange={(e) => setNewSubTask({...newSubTask, startTime: e.target.value})} />
                            <label className="flex-none pl-1 pr-1 modal-subtitle">-</label>
                            <input type="text" className="flex-none w-12 bg-slate-100 priority-button-text"  onChange={(e) => setNewSubTask({...newSubTask, endTime: e.target.value})} />
                            <button className="button-primary p-1" onClick={createSubTask}>Add</button>
                        </div>

                    }
            
                    {subTaskList}
                </div>
            </div>
        </div>
    );
}

export default SubTask;
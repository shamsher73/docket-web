import AddToDay from './view-modal/AddToDay';
import CategoryName from './view-modal/CategoryName';
import Description from './view-modal/Description';
import DueDate from './view-modal/DueDate';
import Priority from './view-modal/Priority';
import RemindMe from './view-modal/RemindMe';
import Repeat from './view-modal/Repeat';
import SubTask from './view-modal/SubTask';
import Tags from './view-modal/Tags';
import { ReactComponent as Oval } from './../styles/assets/images/oval.svg';
import { ReactComponent as DeleteIcon } from './../styles/assets/images/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeTask, updateTask } from '../features/my-day-tasks/taskSlice';

const TaskModal = ({taskId,closeModal,taskUpdated}:{taskId:number,closeModal:any,taskUpdated:any}) => {
    const dispatch = useDispatch()
    const tempTask = useSelector((state:any) => state.task.find((task:any) => task.id === taskId))
    const [task, setTask] = useState(tempTask)

    const updateTag = (tags:Array<string>) => {
        setTask({...task, tags: tags})
    }

    const addSubtask = (subtasks:Array<{title:string,startTime:string,endTime:string,status:string}>) => {
        setTask({...task, subTasks: subtasks})
    }

    const save = () => {
        taskUpdated(task)
        dispatch(updateTask({...task}))
        closeModal()
    }

    const deleteTask = () => {
        dispatch(removeTask({id : task.id}))
        closeModal()
    }

    const editTask = (key:string,value:string) => {
        setTask({...task, [key]: value})
    }
   
    return (
        <div className='overflow-y-auto h-full'>
            <label className='modal-title'>Task Details</label>
            <div className='flex p-2'>
                <Oval className=""/>
                <label className="ml-1 modal-subtitle">{task.task}</label>
            </div>
            <Description description={task.description} handleChange={editTask}/>
            <CategoryName category={task.category} handleChange={editTask}/>
            <Priority priority={task.priority} />
            <Tags tags={task.tags} handleChange={updateTag}/>
            <SubTask subTasks={task.subTasks} addSubTask={addSubtask}/>
            <DueDate dueDate={task.due_date} handleChange={editTask}/>
            <RemindMe />
            <Repeat />
            <AddToDay />
            <div className='flex p-2 border-t pt-3'>
                <DeleteIcon className="flex-initial left-0" onClick={deleteTask}/>
                <div className="flex-auto"></div>
                <div className="flex-none right-0 pl-2 text-right">
                    <button className="button-primary p-2" onClick={save}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;
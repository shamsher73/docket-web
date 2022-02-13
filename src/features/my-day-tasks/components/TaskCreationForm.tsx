import { ReactComponent as Person } from './../../../styles/form-person.svg';

const TaskCreationForm = () => {
    return (
        <div className="task-create-form w-full p-4">
             <Person className='absolute person-align'/>
            <div className="task-text">
                Add My Day Task
            </div>
           
            <div className="flex">
                <div className="flex-auto w-32 p-4">
                    <label className="form-label">TASK</label>
                    <input type="text" className="w-full input-area input-text pl-4" />
                </div>
                <div className="flex-auto w-24 p-4">
                    <label className="form-label">Category</label>
                    <input type="text" className="w-full input-area" />
                </div>
                <div className="flex-auto mt-9">
                    <button className="form-button p-1 pr-8 pl-8" >Add</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCreationForm;
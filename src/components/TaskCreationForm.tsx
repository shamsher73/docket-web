import { ReactComponent as Person } from './../styles/assets/images/form-person.svg';
import Creatable from 'react-select/creatable';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/my-day-tasks/taskSlice';

const TaskCreationForm = ({taskAdded}:{taskAdded:any}) => {


    const customStyles = {
        option: () => ({
            padding: '10px',
            fontFamily : "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "23px",
            letterSpacing: "0.075px",
            color: "#44444F",
          }),
        control: (base:any, state:any) => ({
            ...base,
            background: "#384986",
            borderRadius: "6px",
            border: "1px solid #384986",
            fontFamily : "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "23px",
            letterSpacing: "0.075px",
            color: "#ffffff",
        }),
        singleValue: (provided:any, state:any) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const color = "#ffffff";
            return { ...provided, opacity, color };
          },
        
      
      };

    const [selectedOption, setSelectedOption] = useState('');
    const [task, setTask] = useState('');
    const dispatch = useDispatch()
    const handleChangeOption = (selectedOption:any) => {
        setSelectedOption(selectedOption.value);
    };
    const handleChangeTask = (e:any) => {
        setTask(e.target.value);
    }
    const generateId = () => 
    Math.floor(Math.random() * 100000);

    
    const createTask = () => {
        if(selectedOption && task){
            let newTask = {
                id: generateId(),
                task:task,
                category:selectedOption,
                description: '',
                priority: 'medium',
                subTasks: [],
                tags: [],
                time: 0,
                due_date: '',
                remind_me: '',
                repeat: '',
                status: 'pending'
            }
            dispatch(
                addTask(newTask)
            );
      
            taskAdded(newTask)
            setTask('');
            setSelectedOption('');
        }
    }

    const options = [
        { value: 'Category 1', label: 'Category 1' },
        { value: 'Category 2', label: 'Category 2' },
        { value: 'Category 3', label: 'Category 3' }
    ]

    return (
        <div className="task-create-form w-full p-4">
             <Person className='absolute person-align'/>
            <div className="task-text">
                Add My Day Task
            </div>
           
            <div className="flex">
                <div className="flex-auto w-32 p-4">
                    <label className="form-label">TASK</label>
                    <input type="text" className="w-full input-area input-text pl-4 mt-1" onChange={handleChangeTask} value={task}/>
                </div>
                <div className="flex-auto w-24 p-4">
                    <label className="form-label">Category</label>
                    <Creatable options={options} styles={customStyles} onChange={handleChangeOption}/>
                </div>
                <div className="flex-auto mt-11">
                    <button className="form-button p-1 pr-8 pl-8" onClick={createTask}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCreationForm;
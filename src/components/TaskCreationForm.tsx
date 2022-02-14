import { ReactComponent as Person } from './../styles/form-person.svg';
import Creatable from 'react-select/creatable';

const TaskCreationForm = () => {


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
      
      };

    const options = [
        { value: 'id1', label: 'Category 1' },
        { value: 'id2', label: 'Category 2' },
        { value: 'id3', label: 'Category 3' }
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
                    <input type="text" className="w-full input-area input-text pl-4" />
                </div>
                <div className="flex-auto w-24 p-4">
                    <label className="form-label">Category</label>
                    <Creatable options={options} styles={customStyles}  />
                </div>
                <div className="flex-auto mt-11">
                    <button className="form-button p-1 pr-8 pl-8" >Add</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCreationForm;
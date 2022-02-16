
import { useState } from 'react';
import { ReactComponent as Date } from './../../styles/assets/images/date.svg';

const DueDate =  ({ dueDate,handleChange }:{dueDate:string,handleChange:any}):JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [newDueDate, setNewDueDate] = useState(dueDate);

    return (
        <div className='flex p-2 border-t'>
            <Date className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">DUE DATE</div>
                {
                    isOpen &&
                    <div className="flex p-2">
                        <input type="date" className="flex-auto" placeholder={dueDate}  onChange={(e) => setNewDueDate(e.target.value)}/>
                        <button className="button-primary p-1" onClick={() => {handleChange('due_date',newDueDate);setIsOpen(false)}}>Update</button>
                    </div>
                } 
                {
                    !isOpen &&
                    <div className="flex p-2" onClick={() => {setIsOpen(true)}}>
                        <div className="ml-1 modal-subtitle" >{newDueDate ? newDueDate : "-"}</div>
                    </div>
                }
            </div>
        </div>
    );
}

export default DueDate;
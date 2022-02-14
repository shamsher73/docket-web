import AddToDay from './view-modal/AddToDay';
import CategoryName from './view-modal/CategoryName';
import Description from './view-modal/Description';
import DueDate from './view-modal/DueDate';
import Priority from './view-modal/Priority';
import RemindMe from './view-modal/RemindMe';
import Repeat from './view-modal/Repeat';
import SubTask from './view-modal/SubTask';
import Tags from './view-modal/Tags';
import { ReactComponent as Oval } from './../styles/oval.svg';
import { ReactComponent as DeleteIcon } from './../styles/delete.svg';

const TaskModal = () => {
    return (
        <form>
            <label className='modal-title'>Task Details</label>
            <div className='flex p-2'>
                <Oval className=""/>
                <label className="ml-1 modal-subtitle">Lorem ipsum is dummy text</label>
            </div>
            <Description description='Lorem ipsum is a dummy text and main and it is used in all forms and is advis' />
            <CategoryName category='Category 1' />
            <Priority priority='Urgent' />
            <Tags />
            <SubTask />
            <DueDate />
            <RemindMe />
            <Repeat />
            <AddToDay />
            <div className='flex p-2 border-t pt-3'>
                <DeleteIcon className="flex-initial left-0"/>
                <div className="flex-auto"></div>
                <div className="flex-none right-0 pl-2 text-right">
                    <button className="button-primary p-2">Save</button>
                </div>
            </div>
        </form>
    );
}

export default TaskModal;
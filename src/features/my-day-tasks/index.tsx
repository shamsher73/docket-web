import TaskTable from "../../components/table/TaskTable";
import TaskHeader from "../../components/TaskHeader";
import TaskCreationForm from "../../components/TaskCreationForm";
import { useState } from "react";
import Modal from 'react-modal';
import TaskModal from "../../components/TaskModal";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const MyDayTasks = () => {
    const headers = ['task', 'category', 'tags', 'time', 'due date', 'status'];
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [taskId, setTaskId] = useState(0);
    const [allTasks, setAllTasks] = useState(useSelector((state: RootState) => state.task));
    const [rows, setRows] = useState(allTasks);
    const [filter, setFilter] = useState('all');
    const openModal = (id:number) => {
        setTaskId(id);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setTaskId(0);
        setModalIsOpen(false);
    }

    const changeFilter = (filter:string) => {
        setFilter(filter);
        if(filter === 'all') {
            setRows(allTasks);
        } else if(filter === 'pending') {
            setRows(allTasks.filter(task => task.status === 'pending'));
        } else if(filter === 'completed') {
            setRows(allTasks.filter(task => task.status === 'completed'));
        }
    }

    const taskAdded = (task:any) => {
        setAllTasks([...allTasks, task]);
        setRows([...rows, task]);
    }

    const taskUpdated = (task:any) => {
        const index = allTasks.findIndex(t => t.id === task.id);
        setAllTasks([...allTasks.slice(0, index), task, ...allTasks.slice(index + 1)]);
        setRows([...rows.slice(0, index), task, ...rows.slice(index + 1)]);
    }

    return (
        <div className="w-full h-full p-8">
            <TaskCreationForm taskAdded={taskAdded}/>
            <div className="w-full h-full p-4 mt-8 card">
                <TaskHeader filterHandler={changeFilter} filter={filter}/>
                <TaskTable headers={headers} rows={rows} handleModal={openModal} />
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="absolute right-0 top-0 bg-white w-96 sm:w-80 h-full"
            >
                <TaskModal taskId={taskId} closeModal={closeModal} taskUpdated={taskUpdated}/>
            </Modal>
        </div>
    )
}

export default MyDayTasks;
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

    const customStyles = {
        content: {
            top: '0%',
            left: '75%',
            right: '0%',
            bottom: '0%',
        },
    };

    return (
        <div className="w-full h-full p-4">
            <TaskCreationForm />
            <div className="w-full h-full p-4 mt-8 card">
                <TaskHeader filterHandler={changeFilter} filter={filter}/>
                <TaskTable headers={headers} rows={rows} handleModal={openModal} />
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <TaskModal taskId={taskId} closeModal={closeModal}/>
            </Modal>
        </div>
    )
}

export default MyDayTasks;
import TaskTable from "../../components/table/TaskTable";
import TaskHeader from "../../components/TaskHeader";
import TaskCreationForm from "../../components/TaskCreationForm";
import { useState } from "react";
import Modal from 'react-modal';
import TaskModal from "../../components/TaskModal";

const MyDayTasks = () => {
    const headers = ['task','category','tags','time','due date','status'];
    const rows = [
        {
            task: 'Lorem ipsum is dummy text',
            category: 'Category 1',
            tags: 'Tag 1, Tag 2, Tag 3, Tag 4, Tag 5',
            time: '1 hr',
            dueDate: '11 Nov 21',
            status: 'pending'
        },
        {
            task: 'Lorem ipsum is dummy text',
            category: 'Category 1',
            tags: 'Tag 1, Tag 2',
            time: '1 hr',
            dueDate: '11 Nov 21',
            status: 'completed'
        },
    ]

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
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
                <TaskHeader />
                <TaskTable headers={headers} rows={rows} handleModal={openModal}/>
            </div>
            
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <TaskModal />
            </Modal>
        </div>
    )
}

export default MyDayTasks;
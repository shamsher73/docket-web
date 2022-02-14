
import { ReactComponent as Tag } from './../../styles/tag.svg';
import { ReactComponent as Cancel } from './../../styles/cancel.svg';
import { ReactComponent as Add } from './../../styles/add.svg';

const Tags = ():JSX.Element => {
    return (
        <div className='flex p-2 border-t'>
            <Tag className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">TAGS</div>
                <div className="ml-1">
                    <div className="flex p-2">
                        <Add className='flex-none' />
                        <label className="flex-auto pl-2 add">Add tags</label>
                    </div>
                    <div className="flex p-2">
                        <input type="radio" name="subtask" value="1" className="flex-none "/>
                        <label className="flex-auto pl-2 modal-subtitle">Subtask 2</label>
                        <Cancel className="right-0 "/>
                    </div>
                    <div className="flex p-2">
                        <input type="radio" name="subtask" value="1" className="flex-none "/>
                        <label className="flex-auto pl-2 modal-subtitle">Subtask 2</label>
                        <Cancel className="right-0 "/>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Tags;
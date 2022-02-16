
import { useState } from 'react';
import { ReactComponent as DescriptionIcon } from './../../styles/assets/images/description.svg';

const Description = ({ description,handleChange }:{description:string,handleChange:any}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newDescription, setNewDescription] = useState('');

    return (
        <div className='flex p-2 border-t'>
            <DescriptionIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">DESCRIPTION</div>
                {
                    isOpen &&
                    <div className="flex p-2">
                        <input type="text" className="flex-auto" placeholder={description}  onChange={(e) => setNewDescription(e.target.value)}/>
                        <button className="button-primary p-1" onClick={() => {handleChange('description',newDescription);setIsOpen(false)}}>Update</button>
                    </div>
                }
                {
                    !isOpen &&
                    <div className="flex p-2">
                        <div className="ml-1 modal-subtitle" onClick={() => {setIsOpen(true)}}>{description ? description : "-"}</div>
                    </div>
                }
            </div>
            
        </div>
    );
}

export default Description;
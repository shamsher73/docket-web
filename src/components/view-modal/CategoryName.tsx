
import { useState } from 'react';
import { ReactComponent as CategoryIcon } from './../../styles/assets/images/category.svg';

const CategoryName = ({ category,handleChange }:{category:string,handleChange:any}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newCategory, setNewCategory] = useState('');

    const update = (e:any) => {
        handleChange('category',newCategory);
        setIsOpen(false);
    }

    return (
        <div className='flex p-2 border-t'>
            <CategoryIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">CATEGORY NAME</div>
                {
                    isOpen &&
                    <div className="flex p-2">
                        <input type="text" className="flex-auto" placeholder={category}  onChange={(e) => setNewCategory(e.target.value)}/>
                        <button className="button-primary p-1" onClick={update}>Update</button>
                    </div>
                } 
                {
                    !isOpen &&
                    <div className="flex p-2">
                        <div className="ml-1 modal-subtitle" onClick={() => {setIsOpen(true)}}>{category}</div>
                    </div>
                }
                
            </div>
            
        </div>
    );
}

export default CategoryName;
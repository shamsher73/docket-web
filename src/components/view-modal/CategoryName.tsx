
import { ReactComponent as CategoryIcon } from './../../styles/category.svg';

const CategoryName = ({ category }:{category:string}) => {
    return (
        <div className='flex p-2 border-t'>
            <CategoryIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">CATEGORY NAME</div>
                <div className="ml-1 modal-subtitle">{category}</div>
            </div>
            
        </div>
    );
}

export default CategoryName;
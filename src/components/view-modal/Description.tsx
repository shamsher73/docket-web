
import { ReactComponent as DescriptionIcon } from './../../styles/description.svg';

const Description = ({ description }:{description:string}) => {
    return (
        <div className='flex p-2 border-t'>
            <DescriptionIcon className="flex-none"/>
            <div className="flex-auto pl-2">
                <div className="description">DESCRIPTION</div>
                <div className="ml-1 modal-subtitle">{description}</div>
            </div>
            
        </div>
    );
}

export default Description;
import { Link } from 'react-router-dom';
import {ReactComponent as Google} from './../styles/assets/images/Google.svg';

const LoginButton = () => {
    return (
        <div className='p-2 '>
            <Link to="/dashboard" className='flex google-button p-2 w-96 pl-24'>
                <Google className='m-1'/>Continue with Google
            </Link>
        </div>
    )
}

export default LoginButton;
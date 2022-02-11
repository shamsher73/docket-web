import {ReactComponent as Google} from './../../../styles/Google.svg';

const LoginButton = () => {
    return (
        <div className='p-2 '>
            <a href="https://www.geekyants.com" className='flex google-button p-2 w-96 pl-24'><Google className='m-1'/>Continue with Google</a>
        </div>
    )
}

export default LoginButton;
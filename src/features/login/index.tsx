import {ReactComponent as UserOnDesk} from './../../styles/assets/images/user-on-desk.svg';
import LoginButton from '../../components/LoginButton';
import Logo from './../../styles/assets/images/geekyants-logo.png';

import Text from '../../components/Text';

const UserLogin = () => {
    return (
        <>
            <div className="sm:flex sm:flex-row login-gradient h-screen">
                <div className='flex flex-col basis-2/3 space-y-4 '>
                    <UserOnDesk className='flex-auto p-6  w-96 sm:w-full self-center'/>
                </div>
                
                <div className="flex flex-col basis-1/4 self-center">
                    <div className='flex-auto self-center'>
                    <img src={Logo} alt="Geekyants"/>
                        <Text text="Log In to Your Account" />
                        <LoginButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin;
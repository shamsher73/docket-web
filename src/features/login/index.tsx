import React from 'react';
import {ReactComponent as LogoGeekyants} from './../../styles/logo-geekyants.svg';
import {ReactComponent as UserOnDesk} from './../../styles/user-on-desk.svg';
import LoginButton from '../../components/LoginButton';

import Text from '../../components/Text';

const UserLogin = () => {
    return (
        <>
            <div className="flex login-gradient h-screen place-items-center">
                <UserOnDesk className='flex-auto sticky p-6'/>
                <div className="flex-auto">
                    <Text text="Log In to Your Account" />
                    <LoginButton />
                </div>
            </div>
        </>
    )
}

export default UserLogin;
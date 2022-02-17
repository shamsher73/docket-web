import { ReactComponent as UserImage } from './../styles/assets/images/Profile.svg';
import { ReactComponent as Notification } from './../styles/assets/images/notification.svg';

const Header = ({name}: {name:string}) => {
    return (
        <header className='flex items-center justify-between flex-wrap bg-white h-16 border-b-2'>
            <div className='flex-none p-4 w-24 md:w-64'>
                LOGO
            </div>
            <div className='flex-auto w-12 sm:w-24 md:w-64'>
                <div className="flex-1 w-32 justify-left">
                    <div className="flex border-1 rounded search-box">
                        <button className="flex items-center justify-center px-4 ">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                        </button>
                        <input type="text" className="px-4 py-2 w-80 search-box" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className='flex text-right items-center pr-20'>
                <div className='flex-none pr-6'>
                    <Notification />
                </div>
                <div className='invisible sm:visible md:visible '>
                    <UserImage />
                </div>
                <div className='user-text pl-4'>
                    {name}
                </div>
            </div>
        </header>
    )
}

export default Header;

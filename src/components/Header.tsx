import { ReactComponent as UserImage } from './../styles/assets/images/Profile.svg';
import { ReactComponent as Notification } from './../styles/assets/images/notification.svg';

const Header = ({name,showMenu}: {name:string,showMenu:any}) => {
    return (
        <header className='flex items-center justify-between flex-wrap bg-white h-16 border-b-2'>
            <div className='flex-none p-4 w-24 md:w-64'>
                LOGO
            </div>
            <div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => {showMenu()}}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
                    
         
            <div className='flex-auto w-12 sm:w-24 md:w-64'>
                <div className="flex-1 w-38 justify-left">
                    <div className="flex border-1 rounded">
                        <input className="nosubmit" type="search" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className='flex text-right items-center pr-20'>
                <div className='flex-auto text-right pr-0 sm:pr-7'>
                    <Notification />
                </div>
                <div className='hidden sm:inline'>
                    <UserImage />
                </div>
                <div className='user-text pl-4 hidden sm:inline'>
                    {name}
                </div>
            </div>
        </header>
    )
}

export default Header;

import React from 'react';



const Header: React.FC = () => {

  return (
    <div className="navbar shadow-sm bg-white">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl text-black">
                <h1 className='text-2xl font-bold cursor-pointer'>
                    Ibra<span className='text-blue-500'>Track</span>
                </h1>
            </a>
        </div>
            <div className="flex-none flex items-center space-x-4">
                <ul className="menu menu-vertical lg:menu-horizontal space-x-4">
                    <li><button className="btn rounded-md bg-blue-500 border-none shadow-none">Login</button></li>
                    <li><button className="btn rounded-md bg-white text-black shadow-none border-gray-300">Contact</button></li>
                </ul>
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
  );
};

export default Header;

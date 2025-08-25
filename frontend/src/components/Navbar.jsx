import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount } = useContext(ShopContext)

    return (
        <div className="flex items-center justify-between py-5 px-4 sm:px-6 lg:px-8 font-medium">
            <Link to="/"><img src={assets.logo} alt="Logo" className="w-32 cursor-pointer" /></Link>
            {/* Menu desktop */}
            <ul className="hidden sm:flex items-center gap-6 font-medium">
                <NavLink to="/" className="flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <p>HOME</p>
                            <hr className={`${isActive ? 'block' : 'hidden'} w-2/4 border-none h-[1.5px] bg-gray-700`} />
                        </>
                    )}
                </NavLink>

                <NavLink to="/collection" className="flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <p>COLLECTION</p>
                            <hr className={`${isActive ? 'block' : 'hidden'} w-2/4 border-none h-[1.5px] bg-gray-700`} />
                        </>
                    )}
                </NavLink>

                <NavLink to="/about" className="flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <p>ABOUT</p>
                            <hr className={`${isActive ? 'block' : 'hidden'} w-2/4 border-none h-[1.5px] bg-gray-700`} />
                        </>
                    )}
                </NavLink>

                <NavLink to="/contact" className="flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <p>CONTACT</p>
                            <hr className={`${isActive ? 'block' : 'hidden'} w-2/4 border-none h-[1.5px] bg-gray-700`} />
                        </>
                    )}
                </NavLink>
            </ul>

            {/* Icons + profile menu */}
            <div className="flex items-center gap-6">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='' />

                <div className="group relative">
                    <Link to='/login'><img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" /></Link>
                    <div className="hidden group-hover:flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded absolute right-0 top-full mt-2">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
                </Link>

                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt="Menu"
                />
            </div>

            {/* Menu mobile */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/">HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/about">ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar

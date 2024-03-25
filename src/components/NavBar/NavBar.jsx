import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links= <>
    <li><NavLink className={({isActive})=> isActive? 'btn btn-ghost font-normal text-lg border-[#23BE0A] text-[#23BE0A]': 'btn btn-ghost font-normal text-lg border-none' } 
    to="/">Home</NavLink></li>
    <li><NavLink className={({isActive})=> isActive? 'btn btn-ghost font-normal text-lg border-[#23BE0A] text-[#23BE0A]': 'btn btn-ghost font-normal text-lg border-none' } 
    to="/listedBooks">Listed Books</NavLink></li>
    <li><NavLink className={({isActive})=> isActive? 'btn btn-ghost font-normal text-lg border-[#23BE0A] text-[#23BE0A]': 'btn btn-ghost font-normal text-lg border-none' } 
    to="/pagesToRead">Pages to Read</NavLink></li>
    </>
    return ( 
        <div className="navbar bg-base-100 flex flex-col md:flex-row">
            <div className="navbar-start mr-20">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn btn-success text-white">Sign In</a>
                <a className="btn btn-accent text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;
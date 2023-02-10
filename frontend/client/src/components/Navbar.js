import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { logout } from "features/user";
const Navbar = () => {

    const dispatch = useDispatch();
    const{ isAuthenticated } = useSelector(state => state.user)


    const authLinks = (
        <>
         <Link to="/">
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => dispatch(logout())}
              className=" relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              LOGOUT
            </button>
          </div>
          </Link>
      </>
      )
      const guestLinks = (
        <>
        <Link to="/login">
          <div className="ml-4 mt-2 flex-shrink-0 ">
              <button 
                type="button"
                className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                LOGIN
              </button>
            </div>
        </Link>
        </>
      )
    
    return(

        <nav className=" fixed w-full py-10 shadow-md bg-ucn-blue">
        <div className="bg-ucn-blue px-4 sm:px-6">
    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
    <div className="ml-4 mt-2">
    <a href="/" className="flex items-center mb-4 sm:mb-0">
        <img src="https://www.ucn.cl/wp-content/uploads/2018/05/Escudo-UCN-Full-Color.png" className="w-20 mr-3" alt="UCN logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UCN</span>
    </a>
    </div>
    <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Sistema de Justificativos de Inasistencias
    </div>
    <div className="object-right">
    </div>
    {isAuthenticated ? authLinks : guestLinks}
    </div>
    </div>
    </nav>
)}


export default Navbar;
import { NavLink,Link } from "react-router-dom"
export default function(){
    return (
        <>
          <div className="flex flex-wrap w-full h-1/4 bg-blue-700 justify-end p-4">
        <nav className="flex mr-96">
          <ul>
            <li className="text-black font-mono"> <NavLink to="/aboutUs"  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } >LOGO</NavLink></li>
          </ul>
        </nav>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/User">User info</Link></li>
          </ul>
        </nav>
      </div>
        </>
    )
}
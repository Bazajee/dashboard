
import { useNavigate } from "react-router-dom";

function Navbar () {
    const navigate = useNavigate()

    function nav_to_home () {
        navigate('/')
    }
    function nav_to_dashboard () {
        navigate('/dashboard')
    }
    function nav_to_data () {
        navigate('/data')
    }

    return (
        <nav className="bg-blue-600 text-white px-6 py-4 rounded">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
                <a
                    className="cursor-pointer"
                    onClick={nav_to_home}
                > DASHBOARD App </a>
            </h1>
            <ul className="flex space-x-4">
                <li className="hover:underline cursor-pointer">
                    <a
                        onClick={nav_to_home}
                    > Home </a> 
                </li>
                <li className="hover:underline cursor-pointer">
                    <a
                        onClick={nav_to_data}
                    > Data </a> 
                </li>
                <li className="hover:underline cursor-pointer">
                    <a
                        onClick={nav_to_dashboard}
                    > Dashboard </a> 
                </li>
            </ul>
        </div>
      </nav>
    )
};

export default Navbar ;
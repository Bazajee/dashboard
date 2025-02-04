import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Data } from "../appState/dataState"


function HomePage () {
    const navigate = useNavigate()
    const {createData} = Data()
    
    function nav_to_data () {
        navigate('/data')
    }

    useEffect(()=> {
        createData()
    })

return (
<>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">
          DASHBOARD App
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          This is a simple homepage built with React and Tailwind CSS. Click on the "Dashboard" link in the navbar to view your analytics.
        </p>
        <button 
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
            onClick= {nav_to_data}
        >
          Get Started
        </button>
    </div>
    <div className="bg-blue-500 text-white p-6">
        Tailwind CSS is working!
    </div>
</>
)}

export default HomePage

import { useState } from "react";
import { Data } from "../appState/dataState";

function AddDataSetCard ({ setAddDataSet }) {
    const { registerDataSet } = Data()
    const [isValid, setIsValid] = useState(true)
    const [newDataSet, setNewDataSet] = useState({
        'name': '',
        'data': ''
    })

    function sendRegister () {
        registerDataSet(newDataSet)
        setAddDataSet(false)
    }

    function handleInputChange (e) {
        const value = e.target.value;
        setNewDataSet({
            ...newDataSet, 
            data: e.target.value
        })
        const regex = /^(?:[0-9]{1,2})(?:,(?:[0-9]{1,2}))*$/;
        if (regex.test(value)){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }


    return (
        <div className=" ">
            <div className="flex items-start">
                <div className="m-3">
                    <p className="text font-semibold text-blue-600">Dataset Name: </p>
                        <input 
                            className="custom-input"
                            value={newDataSet.name}
                            onChange={(e) => {setNewDataSet({
                                ...newDataSet, 
                                name: e.target.value
                            })}}
                        
                        />
                </div>
                <div className="m-2 ">
                    <p className="text font-semibold text-blue-600">DataSet value: </p>
                        <input 
                            className={isValid ? "custom-input" : "error-input"}
                            value={newDataSet.data}
                            onChange={handleInputChange}
                        
                        />
                </div>
            </div>
            <div className="flex">
                <button
                    disabled={!isValid}
                    onClick={sendRegister}
                    className="custom-button items-start"
                >ADD</button>
            </div>
        </div> 
    )
}
export default AddDataSetCard;
import {  useState } from "react"
import { Data } from "../appState/dataState"

function DataSetCard ({dataSetName, dataSetId, dataSetValue}) {
    const { updateDataSet, deleteDataSet } = Data()
    const [isValid, setIsValid] = useState(true)
    const [canEdit, setCanEdit] = useState(false)
    const [newDataSet, setNewDataSet] = useState({
        'id': dataSetId,
        'setName': dataSetName,
        'data': dataSetValue

    })

    function toggleCanEdit ()  {
        setCanEdit(!canEdit)
    }    

    function dataSetUpdater () {
        try{

            updateDataSet(dataSetId, newDataSet)
            setCanEdit(!canEdit)
        }catch{
            console.log('Data set update failed.')
        }
        setCanEdit(!canEdit)
    }

    function sendDelete () {
        try{ 
            deleteDataSet(dataSetId)
            setCanEdit(!canEdit)
        }catch{
            console.log('Data set delete failed.')
        }
        setCanEdit(!canEdit)
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
        <>
            <div  className=" m-3 bg-gray-100 rounded" >
                {canEdit ? 
                <div className="">
                    <div className="flex  m-2">
                        <div className="m-2 ">
                            <p className="text font-semibold text-blue-600 "> ID: </p>
                            <div>{dataSetId}</div>
                        </div>
                        <div className=" m-2 ">
                            <p className="text font-semibold text-blue-600 ">Dataset Name: </p>
                            <input 
                                className="custom-input m-2"
                                value={newDataSet.setName}
                                onChange={(e) => {setNewDataSet({
                                    ...newDataSet, 
                                    setName: e.target.value
                                })}}
                            />
                        </div>
                        <div className="m-1">
                            <p  className="m-1 text font-semibold text-blue-600" >Data: </p>
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
                            className="custom-button disabled "
                            onClick={dataSetUpdater}
                        >SEND</button>
                        <button
                            className="custom-button"
                            onClick={sendDelete}
                        >DELETE</button>
                    </div>
                </div> 
                :
                <div className="m-2">
                    <div>
                        <div className="flex m-2">
                            <p className="m-1 text font-semibold text-blue-600"> ID: </p>
                            <div className="m-1">{dataSetId}</div>
                        </div>
                        <div className="flex m-2">
                            <p className="m-1 text font-semibold text-blue-600" >Dataset Name: </p>
                            <div
                                className=" m-1 "
                            >{dataSetName}</div>
                        </div>
                        <div className="flex m-2  ">
                            <p className="m-1 text first-line:font-semibold text-blue-600">Data: </p>
                            <div
                                className="m-1"
                            >{dataSetValue}</div>
                        </div>
                    </div>
                    <div className="flex"> 
                        <button
                            onClick={toggleCanEdit}
                            className="custom-button "
                        >UPDATE</button>
                    </div>
                </div>
                }
            </div>
        </>
    )
} 

export default DataSetCard;
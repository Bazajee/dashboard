import { useState } from "react"
import { Data } from "../appState/dataState"
import DataSetCard from "../component/DataSetCard"
import AddDataSetCard from "../component/AddDataSetCard"


function DataPage () {
    const {storedData, setStoredData } = Data()
    const [addDataSet, setAddDataSet] = useState(false)

    function toggleAddDataSet () {
        setAddDataSet(!addDataSet)
    }

    return (
        <>
            <div className="">
                <div className="flex items-center justify-start">
                    <div className=" m-3">
                        <h1
                            className="  text-4xl font-semibold text-blue-600 rounded "
                        >Dataset </h1>
                    </div>

                    <div className="w-1/2 ">
                        <button
                            className="custom-button "
                            onClick={toggleAddDataSet}>
                            ADD DATASET
                        </button>
                    </div>
                </div>
                <div className="m-3 font-semibold text-blue-600">
                    <p className="text-left">
                        Data format must be an integer followed by a comma. For example: 12,3,83,4
                    </p>
                </div>
                    { addDataSet ?
                        <AddDataSetCard 
                            setAddDataSet={setAddDataSet}
                        /> 
                        :
                        <div/>
                    }
                <div>
                    {storedData
                        .slice()
                        .reverse()
                        .map((dataSet: Object) => (
                            <div
                                key={dataSet.id}
                            >
                                <DataSetCard 
                                    dataSetName={dataSet.setName} 
                                    dataSetId={dataSet.id} 
                                    dataSetValue={dataSet.data}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default DataPage
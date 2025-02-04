import { 
    createContext, 
    useContext,
    useState,
} from "react"


export interface DataSet {
    id: number;
    data: string[]
    [key: string]: any
}

export const DataContext= createContext()

export const DataProvider = ({ children }) => {
    const [countDataset, setCountDataset] = useState( () => {
        return JSON.parse(localStorage.getItem('countDataSet')) || []
    })
    const [storedData, setStoredData] = useState( () => {
        return JSON.parse(localStorage.getItem('data')) || []
    })

    const createData = () => {
        if (!localStorage.getItem('data')) {
            const  baseDataset = [
            {
                'id': 0,
                'setName': 'First data set',
                'data': [3,4,81,6,7,73,5,2,8]
            }, 
            {
                'id': 1,
                'setName': 'Second data set',
                'data': [3,4,18,7,29,8]
            }, 
            {
                'id': 2,
                'setName': 'Third data set',
                'data': [3,47,5,2,8,14,29,64,3,14,43,8,16,7,]
            }
        ]
            localStorage.setItem( 'data', JSON.stringify(baseDataset))
            setStoredData(baseDataset)
        }
        if (!localStorage.getItem('countDataSet')) {
            localStorage.setItem('countDataSet', '3')
        }
    }

    const registerDataSet = (newData: Partial<DataSet>) => {
        if (storedData.length < 12){
            const newDataSet: DataSet = {
                id: countDataset,
                setName : newData.name,
                data:typeof newData.data === "string" ? newData.data.split(",").map(stringValue => parseInt(stringValue)) : [],
            }
            const updatedData = [...storedData, newDataSet];
            localStorage.setItem('data', JSON.stringify(updatedData))
            setStoredData(updatedData)
            localStorage.setItem('countDataSet', JSON.stringify(countDataset+1))
            setCountDataset(countDataset+1)     
        }
    }

    const updateDataSet = (dataSetId: number, newDataSet: Object) => {
        const updatedDataSet = storedData.map( dataset => {
            if (dataSetId === dataset.id) {
                if (typeof(newDataSet.data) == 'string') {
                    newDataSet.data = newDataSet.data.split(',').map(stringValue => parseInt(stringValue))
                }
                return newDataSet
            }
            return dataset
        })
        setStoredData(updatedDataSet)
        localStorage.setItem('data', JSON.stringify(updatedDataSet))
        return updatedDataSet
    }

    const deleteDataSet = (id: Number) => {
        const updatedData = storedData.filter(dataSet => 
            dataSet.id !== id
        )
        localStorage.setItem('data', JSON.stringify(updatedData))
        setStoredData(updatedData)    
    }

    return (
        <DataContext.Provider value={{
            storedData, 
            setStoredData,
            createData, 
            registerDataSet, 
            updateDataSet,
            deleteDataSet,
            
        }}>
            {children}
        </DataContext.Provider>
    )
    
}

export const Data = () => {
    return useContext(DataContext);
}

export default DataProvider
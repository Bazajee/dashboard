import Card from './Card.jsx'
import { Data } from '../../appState/dataState.tsx'

function AverageDataSetLentgh (){

    const {storedData} = Data()
    const cardData = {
        title: 'Average length',
        percent: false, 
        value: getAverageLength(),
    }
    function getAverageLength () {
        let lengthsSum = 0
        for (let length of  storedData.map( dataset => dataset.data.length )) {
            lengthsSum += length
        }
        return Math.ceil(lengthsSum / storedData.length)
    }



    return (
        <>
            <div>
                <Card data={cardData}/>
            </div>
        </>
    )


}
export default AverageDataSetLentgh
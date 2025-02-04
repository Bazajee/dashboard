import Card from './Card.tsx'
import { Data } from '../../appState/dataState.tsx'


function CountDataSet (){
    const {storedData} = Data()
    const cardData = {
        title: 'Dataset amout ',
        percent: false, 
        value: storedData.length,
    }
    
    return (
        <>
            <div>
                <Card data={cardData}/>
            </div>
        </>
    )


}
export default CountDataSet
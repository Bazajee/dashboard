import { Data } from "../../appState/dataState"
import Card from "../ChartCard/Card"

function GlobalAmount () {
    const {storedData} = Data()
    const cardData = {
        title: 'Global sum',
        percent: false, 
        value: getGlobalAmount(),
    }

    function getGlobalAmount () {
        let globalAmount = 0
        for (let dataset of storedData) {
            for (let datavalue of dataset.data) {
                if (typeof(datavalue )){
                    globalAmount += parseInt(datavalue)
                }
            }
        }
        return globalAmount
    }



    return (
        <>
            <div>
                <Card data={cardData}/>
            </div>
        </>

    )
}
export default GlobalAmount
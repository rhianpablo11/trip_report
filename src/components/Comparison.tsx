import { useEffect, useState } from "react"
import type { ComparisonProps } from "../interfaces/interfaces"
import { getAllListsOrderedByDate, getFormattedDataForGraphic, getLatestListBefore, getList,  getListDate,  getSavedListsCount } from "../functions/utils"
import Graphic from "./ui/Graphic"


function Comparison(props: ComparisonProps){
    const {ida, volta, vespertino} = props
    const [idaDif, setIdaDif] = useState(0)
    const [voltaDif, setVoltaDif] = useState(0)
    const [vespertinoDif, setVespertinoDif] = useState(0)
    const [dateOfList, setDateOfList] = useState('')
    const [dayOfDifComparison, setDayOfDifComparison] = useState('')
    const [showDif, setShowDif] = useState(false)
    const [daysWithHistorical, setDaysWithHistorical] = useState<number>(0)
    const [idaQuantsForGraphic, setIdaQuantsForGraphic] = useState<number[]>([])
    const [voltaQuantsForGraphic, setVoltaQuantsForGraphic] = useState<number[]>([]);
    const [vespertinoQuantsForGraphic, setVespertinoQuantsForGraphic] = useState<number[]>([]);
    const [datesQuantsForGraphic, setDatesQuantsForGraphic] = useState<string[]>([]);
    const [isShowComparison, setIsShowComparison] = useState(true)

    useEffect(()=>{
        const list = getList()
        if(list != null){
            const lastListData = getLatestListBefore(list)
            setShowDif(true)
            if(lastListData?.quantidades.ida != null && lastListData?.quantidades.volta != null && lastListData?.quantidades.vespertino != null){
                setIdaDif(ida - lastListData?.quantidades.ida)
                setVoltaDif(volta - lastListData?.quantidades.volta)
                setVespertinoDif(vespertino - lastListData?.quantidades.vespertino)
                const listDate = getListDate(list)
                console.log(typeof(listDate))
                if (typeof listDate === 'string' && listDate){
                    const listDateFormatted = listDate
                    const listDateParts = listDateFormatted.split('-')
                    const listFormattedDate = `${listDateParts[2]}/${listDateParts[1]}`
                    setDateOfList(listFormattedDate)
                    console.log(listDateFormatted)
                }
                

                const dateParts = lastListData.dateList.split('-')
                const formattedDate = `${dateParts[2]}/${dateParts[1]}`
                setDayOfDifComparison(formattedDate)
            } else{
                setIdaDif(0)
                setVoltaDif(0)
                setVespertinoDif(0)
            }
        } else{
            setShowDif(false)
        }
        setDaysWithHistorical(getSavedListsCount())
        if(getSavedListsCount() < 1){
            setIsShowComparison(false)
        }
        const formattedDataForGraphic = getFormattedDataForGraphic(getAllListsOrderedByDate())
        setIdaQuantsForGraphic(formattedDataForGraphic.quantIda)
        setVoltaQuantsForGraphic(formattedDataForGraphic.quantVolta)
        setVespertinoQuantsForGraphic(formattedDataForGraphic.quantVespertino)
        setDatesQuantsForGraphic(formattedDataForGraphic.dates)
        console.log(getAllListsOrderedByDate())
    }, [ida, volta, vespertino])

    return isShowComparison ? (<>
            <div className='flex flex-col justify-start items-center shadow bg-white/25 backdrop-blur-2xl inset-shadow-2xs  inset-shadow-white rounded-3xl'>
                <div className="flex py-4 flex-col justify-start w-full h-64">
                    <div className="px-3.5">
                        <h4 className="font-medium text-lg">Resumo últimos {daysWithHistorical} {daysWithHistorical > 1 ? "dias" : "dia"}</h4>
                    </div>
                    <Graphic quantsIda={idaQuantsForGraphic} quantsVolta={voltaQuantsForGraphic} quantsVespertino={vespertinoQuantsForGraphic} dates={datesQuantsForGraphic} />
                </div>
                {showDif ? (
                    <>
                        <div className="border-t-[1px] border-black/20 mt-3 w-9/10 mx-auto"></div>
                        <div className="flex text-start px-3.5 py-3 flex-col justify-start w-full">
                            <div className="flex flex-col justify-start">
                                <div className="flex justify-start items-baseline">
                                    <h1 className='text-start font-medium text-lg'>
                                        Balaço de 
                                    </h1>
                                    <h3 className="text-start font-medium pl-1 text-base">{dateOfList}</h3>
                                    <h4 className="text-start font-extralight pl-1 text-sm">
                                        (vs. anterior: {dayOfDifComparison}):
                                    </h4>
                                </div>
                                <div className="flex flex-col pl-3.5 py-0 my-0">
                                    <div className="flex py-0 my-0">
                                        <h4 className="font-normal leading-tight text-sm">
                                            Ida: 
                                        </h4>
                                        <p  className="text-sm font-light pl-1 leading-tight">
                                            {idaDif > 1 ? "+ ": null}{idaDif} {idaDif > 1 ? "pessoas" : 'pessoa'}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <h4 className="font-normal leading-tight text-sm ">
                                            Volta: 
                                        </h4>
                                        <p className="text-sm font-light pl-1 leading-tight">
                                            {voltaDif > 1 ? "+ ": null}{voltaDif} {voltaDif > 1 ? "pessoas" : 'pessoa'}
                                        </p>
                                    </div>
                                    <div className="flex py-0 my-0">
                                        <h4 className="font-normal leading-tight text-sm">
                                            Vespertino: 
                                        </h4>
                                        <p className="text-sm font-light pl-1 leading-tight">
                                            {vespertinoDif > 1 ? "+ ": null}{vespertinoDif} {vespertinoDif > 1 ? "pessoas" : 'pessoa'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>) : <><div className="pb-3"></div></>}
            </div>
        </>) : null
    
}


export default Comparison


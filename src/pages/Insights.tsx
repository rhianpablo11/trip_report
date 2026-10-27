import { useEffect, useState } from "react"
import Panorama from "../components/Panorama"
import { quantidadePessoas } from "../functions/Calcs"
import Comparison from "../components/Comparison"


function Insights(){
    const [quantIda, setQuantIda] = useState(0)
    const [quantVolta, setQuantVolta] = useState(0)
    const [quantVoltaVespertino, setQuantVoltaVespertino] = useState(0)

    useEffect(()=>{
        const quants = quantidadePessoas()
        setQuantIda(quants[0])
        setQuantVolta(quants[1])
        setQuantVoltaVespertino(quants[2])
    },[])


    return(
        <>
            <div className="h-dvh w-full flex flex-col pt-16 px-3">
                <div>
                    <Panorama type='insights' ida={quantIda} volta={quantVolta} vespertino={quantVoltaVespertino} />
                </div>
                <div className="mt-2">
                    <Comparison ida={quantIda} volta={quantVolta} vespertino={quantVoltaVespertino} />
                </div>

            </div>
        </>
    )
}


export default Insights
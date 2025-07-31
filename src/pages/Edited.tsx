import { useEffect, useState } from "react";
import ListEdited from "../components/ListEdited";
import Panorama from "../components/Panorama";
import type { EditedPageProps } from "../interfaces/interfaces";
import { editaListaIda, editaListaMatutino, editaListaVespertino } from "../functions/Edits";
import { quantidadePessoas } from "../functions/Calcs";
import PointsGo from "../components/PointsGo";





function Edited(props: EditedPageProps) {
    const {hour} = props
    const [typeOfPanorama, setTypeOfPanorama] = useState<'insights' | 'ida' | 'matutino' | 'vespertino'>('insights')
    const [list, setList] = useState<any>('')
    const [quantIda, setQuantIda] = useState<any>(0)
    const [quantVolta, setQuantVolta] = useState<any>(0)
    const [quantVespertino, setQuantVespertino] = useState<any>(0)


    useEffect(() =>{
        console.log(hour)
        const quantStudents = quantidadePessoas()
        if(hour == '05h'){
            setList(editaListaIda())
            setTypeOfPanorama('ida')
            setQuantIda(quantStudents[0])
        } else if(hour == '12h'){
            setList(editaListaMatutino())
            setTypeOfPanorama('matutino')
            setQuantIda(quantStudents[3])
            setQuantVolta(quantStudents[1])
        } else if(hour == '17h'){
            setList(editaListaVespertino())
            setTypeOfPanorama('vespertino')
            setQuantIda(quantStudents[4])
            setQuantVespertino(quantStudents[2])
        }
    }, [hour])


    return(
        <>
            <div className="w-full h-full flex flex-col pt-16 px-3">
                <div className="flex-shrink-0">
                    <Panorama type={typeOfPanorama} ida={quantIda} volta={quantVolta} vespertino={quantVespertino} />
                </div>
                {hour == '05h' ? <><PointsGo /></> : null}
                <div className=" flex-grow min-h-0">
                    <ListEdited hour={hour} list={list} />
                </div>
                <div className="mb-23"></div>
            </div>

        </>
    )
}

export default Edited
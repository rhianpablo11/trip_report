import { enviarListaIda, enviarListaMatutino, enviarListaVespertino, enviarQuantsDaLista } from "../functions/utils"
import type { PanoramaProps } from "../interfaces/interfaces"
import Button from "./ui/Button"


function Panorama(props: PanoramaProps){
    const {type, ida, volta, vespertino} = props


    const onClickFather = (buttonClicked:string) => {
        console.log('enviar zap zap')
        console.log(buttonClicked)
        if(type == 'insights'){
            enviarQuantsDaLista(ida, volta, vespertino)
        } else if(type == 'ida'){
            enviarListaIda()
        } else if(type == 'matutino'){
            enviarListaMatutino()
        } else if(type == 'vespertino'){
            enviarListaVespertino()
        }
    }


    return(
        <>
            <div className="flex justify-between items-center shadow bg-white/25 backdrop-blur-2xl inset-shadow-2xs  inset-shadow-white rounded-3xl">
                <div className="flex justify-start px-3.5 py-4 flex-col">
                    <h3 className="font-medium text-xl">Panorama:</h3>
                    <div className="flex flex-col pl-3.5 py-0 my-0 ">
                        <div className="flex  py-0 my-0 ">
                            <h4 className="font-normal leading-tight text-base py-0 my-0 ">
                                Ida:
                            </h4>
                            <p className="text-base font-light pl-1 leading-tight py-0 my-0">{ida} pessoas</p>
                        </div>
                        {type == 'matutino' || type == 'insights' ? <>
                            <div className="flex  py-0 my-0">
                                <h4 className="font-normal  py-0 my-0 text-base leading-tight">
                                    Volta:
                                </h4>
                                <p className="text-base font-light pl-1 leading-tight py-0 my-0">{volta} pessoas</p>
                            </div>
                        </> : null}
                        
                        {type == 'vespertino' || type == 'insights' ? <>
                                            <div className="flex  py-0 my-0">
                                                <h4 className="font-normal leading-tight py-0 my-0 text-base">
                                                    Vespertino:
                                                </h4>
                                                <p className="text-base font-light leading-tight py-0 my-0 pl-1">{vespertino} pessoas</p>
                                            </div>
                                            </> : <></>}
                    </div>
                </div>
                <div className="flex w-16 h-16 shadow rounded-4xl mx-3 p-3">
                    <Button isActive={false} buttonShow="whatsapp" onClickChildren={onClickFather}/>
                </div>
            </div>
        </>
    )
}

export default Panorama
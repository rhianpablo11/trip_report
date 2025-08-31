import { useEffect, useState } from "react";
import { quantidadePessoasPontos } from "../functions/Calcs";


function PointsGo(){
    const [quantCocaCola, setQuantCocaCola] = useState(0);
    const [quantQuadra, setQuantQuadra] = useState(0);
    const [quantRodoviaria, setQuantRodoviaria] = useState(0);
    const [quantVilatoide, setQuantVilatoide] = useState(0);
    const [quantSerraria, setQuantSerraria] = useState(0);
    const [quantTapera, setQuantTapera] = useState(0);
    const [quantSossego, setQuantSossego] = useState(0);
    const [quantFluminense, setQuantFluminense] = useState(0);
    const [quantTerraNova, setQuantTerraNova] = useState(0);
    const [quantPostoAvenida, setQuantPostoAvenida] = useState(0)
    const [quantCidadeJardim, setQuantCidadeJardim] = useState(0)
    const [quantBandiacu, setQuantBandiacu] = useState(0)
    const [quantCajueiro, setQuantCajueiro] = useState(0)
    //const [quantTotalPosCorreios, setQuantTotalPosCorreios] = useState(0);

    useEffect(()=>{
        const quants = quantidadePessoasPontos()
        setQuantCocaCola(quants[0])
        setQuantQuadra(quants[1])
        setQuantRodoviaria(quants[2])
        setQuantVilatoide(quants[3])
        setQuantSerraria(quants[4])
        setQuantTapera(quants[5])
        setQuantSossego(quants[6])
        setQuantFluminense(quants[7])
        setQuantTerraNova(quants[8])
        setQuantPostoAvenida(quants[9])
        setQuantCidadeJardim(quants[10])
        setQuantBandiacu(quants[11])
        setQuantCajueiro(quants[12])
        //setQuantTotalPosCorreios(quants[13])
    }, [])


    return(
        <>
            <div className="flex flex-col justify-start px-3.5 py-4 mt-3 rounded-3xl w-full shadow bg-white/25 backdrop-blur-2xl inset-shadow-2xs  inset-shadow-white">
                <h1 className="font-medium text-lg">Pontos ida:</h1>
                {quantRodoviaria != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Rodoviária: </h3>
                            <p className="pl-1 font-light text-base">{quantRodoviaria} {quantRodoviaria > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantVilatoide != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Vilatóide: </h3>
                            <p className="pl-1 font-light text-base">{quantVilatoide} {quantVilatoide > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantCocaCola != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Coca-Cola: </h3>
                            <p className="pl-1 font-light text-base">{quantCocaCola} {quantCocaCola > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantQuadra != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Quadra: </h3>
                            <p className="pl-1 font-light text-base">{quantQuadra} {quantQuadra > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantSerraria != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Serraria: </h3>
                            <p className="pl-1 font-light text-base">{quantSerraria} {quantSerraria > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantFluminense != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Fluminense: </h3>
                            <p className="pl-1 font-light text-base">{quantFluminense} {quantFluminense > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantTerraNova != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Terra Nova: </h3>
                            <p className="pl-1 font-light text-base">{quantTerraNova} {quantTerraNova > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantSossego != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Sossego: </h3>
                            <p className="pl-1 font-light text-base">{quantSossego} {quantSossego > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantTapera != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Tapera: </h3>
                            <p className="pl-1 font-light text-base">{quantTapera} {quantTapera > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantPostoAvenida != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Posto Avenida: </h3>
                            <p className="pl-1 font-light text-base">{quantPostoAvenida} {quantPostoAvenida > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantCidadeJardim != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Cidade Jardim: </h3>
                            <p className="pl-1 font-light text-base">{quantCidadeJardim} {quantCidadeJardim > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantCajueiro != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Posto Cajueiro: </h3>
                            <p className="pl-1 font-light text-base">{quantCajueiro} {quantCajueiro > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}

                {quantBandiacu != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Bandarrinha (Bandiaçu): </h3>
                            <p className="pl-1 font-light text-base">{quantBandiacu} {quantBandiacu > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null}
                

                {/* {quantTotalPosCorreios != 0 ? (
                    <>
                        <div className="pl-3.5 flex items-baseline">
                            <h3 className="font-formal leading-tight text-base">Total pós Correios: </h3>
                            <p className="pl-1 font-light text-base">{quantTotalPosCorreios} {quantTotalPosCorreios > 1 ? "pessoas" : "pessoa"}</p>
                        </div>
                    </>
                ) : null} */}
                
            </div>
        </>
    )
}

export default PointsGo
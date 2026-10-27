import { errorReport, getAtualVersion, getYearActual, sendList, sendListLikeBoss } from "../functions/utils"
import type { SidebarProps } from "../interfaces/interfaces"



function SideBar(props: SidebarProps){
    const {isOpen, onClose} = props


    return(
        <>
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}>
            </div>
            <div className={`relative w-3/4 max-w-sm h-full bg-white/90 backdrop-blur-xl shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out rounded-r-3xl ${isOpen ? "translate-x-0" : "-translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
                    <div className="p-4 pb-1 pt-6 flex flex-col">
                        <h1 className="font-normal text-xl text-black" style={{ fontFamily: 'Rock Salt' }}>
                            Tripply
                        </h1>
                        <div className="flex pt-2">
                            <h4 className="font-extralight text-xs">Versão: </h4>
                            <h5 className="pl-1 font-thin text-[11px]">{getAtualVersion()}</h5>
                        </div>
                        <div className="flex">
                            <h4 className="font-extralight text-xs">by 
                                <a className="pl-0.5" href="https://www.instagram.com/rhianpablo11/">Rhian Pablo</a>
                            </h4>
                            <h1 className="font-thin text-[7px]">
                                    ©
                            </h1>
                            <h5 className="pl-0.5 font-thin text-[11px]">, {getYearActual()}</h5>
                        </div>
                    </div>
                    <div className="border-t-[1px] border-black/25 w-9/10 mx-auto"></div>
                    <div className="flex pt-3 pl-4 pr-2 justify-start">
                        <button className="flex justify-start items-center" onClick={sendList}>
                            <div className="p-1 flex items-center justify-center rounded-2xl bg-white">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                    <path d="M3.75 4C3.75 3.58579 4.08579 3.25 4.5 3.25H20.5C20.9142 3.25 21.25 3.58579 21.25 4C21.25 4.41421 20.9142 4.75 20.5 4.75L4.5 4.75C4.08579 4.75 3.75 4.41421 3.75 4Z" fill="#323544"/>
                                    <path d="M12.4644 9.33398C12.4644 8.91977 12.8001 8.58398 13.2144 8.58398H20.5002C20.9145 8.58398 21.2502 8.91977 21.2502 9.33398C21.2502 9.7482 20.9145 10.084 20.5002 10.084H13.2144C12.8001 10.084 12.4644 9.7482 12.4644 9.33398Z" fill="#323544"/>
                                    <path d="M13.2144 13.916C12.8001 13.916 12.4644 14.2518 12.4644 14.666C12.4644 15.0802 12.8001 15.416 13.2144 15.416L20.5002 15.416C20.9145 15.416 21.2502 15.0802 21.2502 14.666C21.2502 14.2518 20.9145 13.916 20.5002 13.916L13.2144 13.916Z" fill="#323544"/>
                                    <path d="M3.75 20C3.75 19.5858 4.08579 19.25 4.5 19.25H20.5C20.9142 19.25 21.25 19.5858 21.25 20C21.25 20.4142 20.9142 20.75 20.5 20.75H4.5C4.08579 20.75 3.75 20.4142 3.75 20Z" fill="#323544"/>
                                    </g>
                                    <path d="M5.25035 9.31638L5.26526 9.30822L9.46288 11.9922L5.25035 9.31638Z" fill="#323544"/>
                                    <path d="M3.75 9.32249C3.75 8.12684 5.07125 7.40338 6.0786 8.04744L10.266 10.7247C11.1969 11.3198 11.1969 12.6796 10.266 13.2748L6.0786 15.952C5.07124 16.5961 3.75 15.8726 3.75 14.677V9.32249ZM5.25035 9.31638C5.25035 9.31638 5.25 9.31939 5.25 9.32249L5.25 14.677C5.25 14.6801 5.25035 14.6831 5.25035 14.6831C5.25035 14.6831 5.25326 14.6867 5.25696 14.6887C5.26065 14.6907 5.2646 14.6915 5.2646 14.6915C5.2646 14.6915 5.26798 14.6899 5.27059 14.6882L9.45798 12.011L9.4598 12.0098L9.46189 12.0082L9.46282 12.0074C9.46282 12.0074 9.46415 12.0045 9.46415 11.9997C9.46415 11.9953 9.46288 11.9922 9.46288 11.9922L9.46189 11.9913L9.46013 11.9899L9.45798 11.9884L5.27059 9.31121C5.26798 9.30954 5.26526 9.30822 5.26526 9.30822C5.26526 9.30822 5.26065 9.30873 5.25696 9.31075C5.25326 9.31277 5.25035 9.31638 5.25035 9.31638Z" fill="#323544"/>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-start text-start pl-3">
                                <h1 className="font-normal text-base leading-tight">
                                    Iniciar uma lista
                                </h1>
                                <p className="font-extralight text-sm leading-tight" >Envia a lista do próximo dia</p>
                            </div>
                        </button>
                    </div>
                    <div className="flex pt-3 px-4 justify-start">
                        <button className="flex justify-start items-center" onClick={sendListLikeBoss}>
                            <div className="p-1 flex items-center justify-center rounded-2xl bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="#000000" viewBox="0 0 256 256">
                                    <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H96a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm125.09-40.22-22.52,18.59,6.86,27.71a8,8,0,0,1-11.82,8.81L184,183.82l-25.61,15.07a8,8,0,0,1-11.82-8.81l6.85-27.71-22.51-18.59a8,8,0,0,1,4.47-14.14l29.84-2.31,11.43-26.5a8,8,0,0,1,14.7,0l11.43,26.5,29.84,2.31a8,8,0,0,1,4.47,14.14Zm-25.47.28-14.89-1.15a8,8,0,0,1-6.73-4.8l-6-13.92-6,13.92a8,8,0,0,1-6.73,4.8l-14.89,1.15,11.11,9.18a8,8,0,0,1,2.68,8.09l-3.5,14.12,13.27-7.81a8,8,0,0,1,8.12,0l13.27,7.81-3.5-14.12a8,8,0,0,1,2.68-8.09Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-start text-start pl-3">
                                <h1 className="font-normal text-base leading-tight">
                                    Iniciar uma lista - rp11
                                </h1>
                                <p className="font-extralight text-sm leading-tight">Envia a lista do próximo dia já com "Rhian" inserido</p>
                            </div>
                        </button>
                    </div>
                    <div className="mt-2 border-t-[1px] border-black/25 w-9/10 mx-auto"></div>
                    <div className="flex pt-3 px-4 justify-start">
                        <button className="flex justify-start items-center" onClick={errorReport}>
                            <div className="p-1 flex items-center justify-center rounded-2xl bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                                    <path d="M144,92a12,12,0,1,1,12,12A12,12,0,0,1,144,92ZM100,80a12,12,0,1,0,12,12A12,12,0,0,0,100,80Zm116,64A87.76,87.76,0,0,1,213,167l22.24,9.72A8,8,0,0,1,232,192a7.89,7.89,0,0,1-3.2-.67L207.38,182a88,88,0,0,1-158.76,0L27.2,191.33A7.89,7.89,0,0,1,24,192a8,8,0,0,1-3.2-15.33L43,167A87.76,87.76,0,0,1,40,144v-8H16a8,8,0,0,1,0-16H40v-8a87.76,87.76,0,0,1,3-23L20.8,79.33a8,8,0,1,1,6.4-14.66L48.62,74a88,88,0,0,1,158.76,0l21.42-9.36a8,8,0,0,1,6.4,14.66L213,89.05a87.76,87.76,0,0,1,3,23v8h24a8,8,0,0,1,0,16H216ZM56,120H200v-8a72,72,0,0,0-144,0Zm64,95.54V136H56v8A72.08,72.08,0,0,0,120,215.54ZM200,144v-8H136v79.54A72.08,72.08,0,0,0,200,144Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-start text-start pl-3">
                                <h1 className="font-normal text-base leading-tight">
                                    Reportar um erro
                                </h1>
                                <p className="font-extralight text-sm leading-tight">Enviar dados para analise e correção do erro</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
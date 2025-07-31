import type { ListEditedProps } from "../interfaces/interfaces";


function ListEdited(props: ListEditedProps){
    const {hour, list} = props

    

    return(
        <>
            <div className="flex flex-col shadow w-full h-full rounded-3xl my-4 bg-white/25 backdrop-blur-2xl inset-shadow-2xs  inset-shadow-white">
                <div className="flex pl-4 pt-3 flex-shrink-0">
                    <h2 className="font-medium text-xl">Lista {hour}:</h2>
                </div>
                <div className="flex pl-8 pt-2 flex-grow overflow-y-auto">
                    <p className="text-sm font-light whitespace-pre-line">
                        {list}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ListEdited
import { useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import type { HomeProps } from "../interfaces/interfaces"
import { saveList, saveListData } from "../functions/utils"


function Home(props: HomeProps){
    const {onClickButton} = props
    const  [listTyped, setListTyped] = useState('')

    const onClickFather = (buttonClicked:string) => {
        onClickButton(buttonClicked)
        
        if(listTyped != ''){
            saveList(listTyped)
            saveListData(listTyped)
        }
        
    }
    
    const onChangeInputFather = (value:string) => {
        setListTyped(value)
    }

    return(
        <>
            <div className="h-dvh flex flex-col justify-center">
                    <div className="flex justify-center items-center text-center leading-none">
                        <h1 className="pr-2 text-[28px]">Bem-vindo ao</h1>
                        <h1 className="text-2xl" style={{ fontFamily: 'Rock Salt' }}>Tripply</h1>
                    </div>
                    <div>
                        <p className="text-center leading-5 font-light text-black/70 whitespace-pre-wrap">
                            {`Para iniciar digite uma lista
e deixe a mágica acontecer`}
                        </p>
                    </div>
                    
                </div>
                <div className="w-full flex p-3 grid grid-cols-12 gap-3 fixed bottom-16">
                    <div className="col-span-10 h-24">
                        <Input onChangeInput={onChangeInputFather}/>
                    </div>
                    <div className="col-span-2">
                        <Button buttonShow="send" isActive={true} onClickChildren={onClickFather}/>
                    </div>
                </div>
        </>
    )
}

export default Home
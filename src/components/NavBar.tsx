import { useEffect, useState } from "react"
import Button from "./ui/Button"
import type { NavBarProps } from "../interfaces/interfaces"


function NavBar(props: NavBarProps){
    const {onClickButton, buttonSelected} = props
    const [isSelectedInsights, setIsSelectedInsights] = useState(false)
    const [isSelected05h, setIsSelected05h] = useState(false)
    const [isSelectedHome, setIsSelectedHome] = useState(true)
    const [isSelected12h, setIsSelected12h] = useState(false)
    const [isSelected17h, setIsSelected17h] = useState(false)
    const [buttonOfPage, setButtonSelected] = useState('home')

    useEffect(()=>{
        if(buttonSelected == "insights"){
            setIsSelectedInsights(true)
            setIsSelected05h(false)
            setIsSelectedHome(false)
            setIsSelected12h(false)
            setIsSelected17h(false)
        } else if(buttonSelected == '05h'){
            setIsSelectedInsights(false)
            setIsSelected05h(true)
            setIsSelectedHome(false)
            setIsSelected12h(false)
            setIsSelected17h(false)
        } else if(buttonSelected == 'home'){
            setIsSelectedInsights(false)
            setIsSelected05h(false)
            setIsSelectedHome(true)
            setIsSelected12h(false)
            setIsSelected17h(false)
        } else if(buttonSelected == '12h'){
            setIsSelectedInsights(false)
            setIsSelected05h(false)
            setIsSelectedHome(false)
            setIsSelected12h(true)
            setIsSelected17h(false)
        } else if(buttonSelected == '17h'){
            setIsSelectedInsights(false)
            setIsSelected05h(false)
            setIsSelectedHome(false)
            setIsSelected12h(false)
            setIsSelected17h(true)
        }
    }, [buttonSelected])



    const onClickFather = (buttonClicked:string) => {
        setButtonSelected(buttonClicked)
        onClickButton(buttonClicked)
    }

    return (
        <>
            <div className=" h-full w-full p-3 px-4 bg-white/30 backdrop-blur-2xl inset-shadow-2xs  inset-shadow-white shadow flex justify-center rounded-3xl">
                <ul className="flex flex-row bg-white/25 justify-between items-center w-full h-full">
                    <li>
                        <div>
                            <Button isActive={isSelectedInsights} onClickChildren={onClickFather} buttonShow="insights"/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Button isActive={isSelected05h} onClickChildren={onClickFather}  buttonShow="05h"/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Button isActive={isSelectedHome} onClickChildren={onClickFather}  buttonShow="home"/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Button isActive={isSelected12h} onClickChildren={onClickFather}  buttonShow="12h"/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Button isActive={isSelected17h} onClickChildren={onClickFather}  buttonShow="17h"/>
                        </div>
                    </li>
                </ul> 
            </div>
        </>
    )
}


export default NavBar
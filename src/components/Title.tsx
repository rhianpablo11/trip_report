import type { HomeProps } from "../interfaces/interfaces";
import Button from "./ui/Button";

function Title(props: HomeProps) {
    const {onClickButton} = props

    const onClickFather = (buttonClicked:string) => {
        console.log(buttonClicked)
        onClickButton('options')
    }

    return (
        <div className="fixed top-0 left-0 w-full h-16 flex  rounded-b-2xl justify-between items-center px-4">
            <div className="w-8">
                <Button isActive={true} buttonShow="options" onClickChildren={onClickFather}/>
            </div>
            <h1 className="font-normal text-xl text-black" style={{ fontFamily: 'Rock Salt' }}>
                Tripply
            </h1>
            <div className="w-8"></div>
            
        </div>
    );
}

export default Title;
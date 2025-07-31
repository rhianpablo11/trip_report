import { useState } from "react";
import type { InputProps } from "../../interfaces/interfaces";


function Input(props: InputProps) {
    const {onChangeInput} = props
    const [valueText, setValueText] = useState('')
    const placeholderText = `Lista - Segunda/Feira 20/05

        UEFS
    1. Ingrid (ida e volta) coca cola
    2. Karoline (ida e volta vespertino)`;


    const handleInputChange = (event: any) => {
        const value = event.target.value;
        setValueText(value)
        onChangeInput(value);
    }
    

    return (
        <>
            <div className="w-full h-full">

                <textarea 
                    placeholder={placeholderText}
                    value={valueText}
                    onChange={handleInputChange}
                    className="w-full h-full shadow rounded-3xl bg-white/25 backdrop-blur-2xl inset-shadow-2xs  inset-shadow-white px-4 pt-4 text-black font-normal text-left text-xs focus:outline-none resize-none placeholder:text-black/30"
                >
                </textarea>
            </div>
        </>
    );
}

export default Input;
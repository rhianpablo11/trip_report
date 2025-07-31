export interface ButtonProps {
    isActive: boolean;
    onClickChildren: (id:string) => void;
    buttonShow: 'insights' | '05h' | '12h' | '17h' | 'whatsapp' | 'send' | 'home' | 'options' | 'close'
}

export interface PanoramaProps {
    type: 'ida' | 'matutino' | 'vespertino' | 'insights';
    ida: number;
    volta?: number;
    vespertino?: number;
}

export interface ListEditedProps {
    hour: string;
    list: string;
}

export interface EditedPageProps{
    hour: string
}

export interface NavBarProps {
    onClickButton: (id:string) => void
    buttonSelected: string
}

export interface HomeProps {
    onClickButton: (id:string) => void
}

export interface InputProps {
    onChangeInput: (value: string) => void
}


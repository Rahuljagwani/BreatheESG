export interface RegisterProp {
    setRegister: (val: number) => void;
}

export interface MenuItem {
    icon: React.ReactNode;
    label: string;
    route: string;
}

export interface StateGlobalProviderProps {
    children: JSX.Element
}

export interface AssignmentDataType {
    key: React.Key;
    assessment: string;
    type: string;
    nos: number;
    score: number;
    rc: string;
    status: string;
    result: boolean;
}

export interface InputModalProps {
    open: boolean | undefined;
    closeModal: () => void;
}
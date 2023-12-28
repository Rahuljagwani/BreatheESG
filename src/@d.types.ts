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
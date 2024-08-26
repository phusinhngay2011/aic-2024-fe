
export type ClassName = string;

export type Style = React.CSSProperties;

export type Node = React.ReactNode;

export type BaseComponentProps = {
    className?: ClassName;
    style?: Style;
    children?: Node;
};

export type BaseLayoutProps = {
    children?: Node;
}

export type BaseProviderProps = {
    children?: Node;
}
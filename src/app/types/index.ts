import { MouseEventHandler } from "react";


export interface NavLinksProps {
    title: string,
    href: string,
    linkStyles?: string,

}
export interface NavButtonProps {
    BtnIcon? : JSX.Element,
    title?: string,
    btnStyle?: string,
    btnStyle2?: string,
    profileImg?: boolean,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
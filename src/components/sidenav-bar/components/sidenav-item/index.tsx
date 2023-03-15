import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";

type props = {
    name: string,
    icon: JSX.Element
}

export default function SideNavItem({name, icon}: props): JSX.Element {

    return (
        <>
            <div className="sidenav-item
                            w-100
                            d-inline-flex 
                            justify-content-start 
                            align-items-center
                            pad-12
                            my-1
                            font-def
                            hide-x">
                <div className="sidenav-icon
                                d-inline-flex
                                justify-content-center
                                img-def
                                align-items-center">
                    {icon}
                </div>
                <div className="sidenav-name 
                                d-none d-md-block
                                ps-2">
                    {name}
                </div>
            </div>
        </>
    )
}
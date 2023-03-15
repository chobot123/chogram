import { AiOutlineHome, 
         AiOutlineSearch, 
         AiOutlineCompass, 
         AiOutlineMessage,
         AiOutlinePlayCircle, 
         AiOutlineHeart } from "react-icons/ai";
import SideNavItem from "./components/sidenav-item";
import SideNavOptions from "./components/sidenav-options";
import SideNavLogo from "./components/sidenav-logo";

type sideNavItem = {
    name: string,
    icon: JSX.Element
}

export default function SideNavBar(): JSX.Element {

    const sideNavList: sideNavItem[] = [
        {
            name: "Home",
            icon: <AiOutlineHome />
        },
        {
            name: "Search",
            icon: <AiOutlineSearch />
        },
        {
            name: "Explore",
            icon: <AiOutlineCompass />
        },
        {
            name: "Reels",
            icon: <AiOutlinePlayCircle />
        },
        {
            name: "Messages",
            icon: <AiOutlineMessage />
        },
        {
            name: "Notifications",
            icon: <AiOutlineHeart />
        },
    ]

    return (
        <>
            <div className="sidenav-bar 
                            position-fixed 
                            border-end
                            vh-100">
                <div className="med-nav 
                            nav-full-h 
                            d-flex
                            flex-column
                            pt-2 
                            pad-x-12
                            pb-4">
                    
                    <SideNavLogo />

                    <ul className="list-unstyled
                                    flex-grow-1
                                    w-100">
                        {
                            sideNavList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <SideNavItem 
                                            name={item.name}
                                            icon={item.icon}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <SideNavOptions />
                </div>
            </div>
        </>
    )
}
import { AiOutlineHome, 
         AiOutlineSearch, 
         AiOutlineCompass, 
         AiOutlineMessage,
         AiOutlinePlayCircle, 
         AiOutlineHeart, 
         AiOutlineSetting,
         AiOutlineDown,
         AiOutlineUserAdd} from "react-icons/ai";
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
            <div className="d-md-none 
                            d-block
                            position-relative
                            mb-nav-top
                            border-bottom
                            border-muted">
                <nav className="d-flex
                                align-items-stretch
                                position-relative
                                h-100">
                    <div className="d-flex
                                    flex-1
                                    w-100">
                        <header className="d-flex
                                           px-3
                                           flex-row
                                           justify-content-between
                                           align-items-center
                                           w-100">
                            <div className="d-flex
                                            justify-content-center
                                            flex-column
                                            align-items-center">
                                <button className="p-0 pe-2">
                                    <div className="fs-3
                                                    d-flex
                                                    justify-content-center
                                                    align-items-center">
                                        <AiOutlineSetting />
                                    </div>
                                </button>
                            </div>
                            <h1 className="d-block
                                           flex-grow-1
                                           flex-shrink-1
                                           flex-basis-0
                                           text-center
                                           text-truncate
                                           m-0
                                           fs-6">
                                <div className="w-100
                                                d-flex
                                                align-items-stretch
                                                justify-content-start
                                                position-relative">
                                    <button aria-label="switch-accounts"
                                            className="w-100">
                                        <div className="d-flex
                                                        align-items-center
                                                        justify-content-center
                                                        position-relative">
                                            <div>chojoshua99</div>
                                            <div className="p-2
                                                            d-flex
                                                            flex-column
                                                            flex-shrink-0
                                                            align-items-stretch
                                                            justify-content-start
                                                            align-self-auto
                                                            position-relative
                                                            flex-grow-0">
                                                <span className="fs-6
                                                                 d-inline-block
                                                                 text-center">
                                                    <AiOutlineDown className="d-block
                                                                              position-relative" />
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </h1>
                            <div className="d-flex
                                            justify-content-center
                                            flex-column
                                            align-items-center">
                                <button className="p-2">
                                    <div className="fs-3
                                                    d-flex
                                                    justify-content-center
                                                    align-items-center">
                                        <AiOutlineUserAdd />
                                    </div>
                                </button>
                            </div>
                        </header>
                    </div>
                </nav>
            </div>
            <div className="sidenav-bar 
                            position-fixed 
                            border-end"
            >
                <div className="med-nav
                            mednav-bar 
                            nav-full-h 
                            d-flex
                            flex-column
                            pt-0
                            pt-md-2 
                            pad-x-12
                            pb-md-4">
                    
                    <SideNavLogo />

                    <ul className="list-unstyled
                                    sidenav-items
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
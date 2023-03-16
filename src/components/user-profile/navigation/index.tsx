import { AiOutlineTable, AiOutlineFlag, AiOutlineTags} from "react-icons/ai";
import UserProfileNavigationTab from "./components/navigation-tab";
import { useState } from "react";
import UserProfileCPostsGrid from "../posts";

type navigationTab = {
    name: string, 
    logo: JSX.Element
}

export default function UserProfileNavigation(): JSX.Element {

    const NavigationTabElements: navigationTab[] = [
        {
            name: "POSTS",
            logo: <AiOutlineTable />
        },
        {
            name: "SAVED",
            logo: <AiOutlineFlag />
        },
        {
            name: "TAGGED",
            logo: <AiOutlineTags />
        }
    ];

    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    return (
        <>
            <div className="user-profile-navigation
                            d-flex
                            justify-content-center
                            align-items-center
                            border-top
                            border-muted"
                role="tablist"
                aria-label="User Profile Navigation Tabs"
            >
                {
                    NavigationTabElements.map((tab, index) => {
                        return (
                            <UserProfileNavigationTab key={index}
                                                      index={index}
                                                      activeTabIndex={activeTabIndex}
                                                      setActiveTabIndex={setActiveTabIndex}
                                                      name={tab.name} 
                                                      logo={tab.logo} />
                        )
                    })
                }
            </div>

            <div className="d-flex
                            mh-0
                            mw-0
                            justify-content-start
                            flex-column
                            align-items-stretch
                            position-relative">
                <UserProfileCPostsGrid />                
            </div>
        </>
    )
}
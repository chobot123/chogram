import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from "react";

type props = {
    index: number,
    activeTabIndex: number,
    setActiveTabIndex: Dispatch<SetStateAction<number>>
    name: string,
    logo: JSX.Element,
}
export default function UserProfileNavigationTab({name, logo, index, activeTabIndex, setActiveTabIndex}: props): JSX.Element {

    const tabRef = useRef<HTMLAnchorElement | null>(null);
    const toggleActiveAriaCB = useCallback(() => {
        if(tabRef == null || tabRef.current == null) return;

        const isSelected: string | null = tabRef.current.ariaSelected;

        if(isSelected == "true") {
            tabRef.current.classList.add("active-nav-tab");
        } else if(isSelected == "false") {
            tabRef.current.classList.remove("active-nav-tab");
        }

        return;

    }, []);

    useEffect(() => {
        toggleActiveAriaCB();
    }, [activeTabIndex, toggleActiveAriaCB])
    
    function handleActiveTab() {
        if(activeTabIndex === index) return;
        setActiveTabIndex(index);
    }
    
    return (
        <>
            <a className="user-nav-tab
                          align-items-center
                          d-flex
                          flex-row
                          flex-md-grow-0
                          flex-shrink-1
                          flex-basis-auto
                          flex-grow-1
                          flex-grow-md-0
                          flex-shrink-md-0
                          flex-basis-md-auto
                          justify-content-center"
                aria-selected={(index === activeTabIndex) ? true : false}
                role="tab"
                ref={tabRef}
                tabIndex={0}
                onClick={() => handleActiveTab()}
            >
                <div className="d-flex
                                flex-grow-0
                                flex-shrink-0
                                flex-basis-auto
                                justify-content-start
                                flex-row
                                position-relative
                                align-items-center">
                    {logo}
                    <span>
                        {name}
                    </span>
                </div>
            </a>
        </>
    )
}
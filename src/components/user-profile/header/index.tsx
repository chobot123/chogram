import UserProfileProfileImage from "./components/profile-img";
import UserProfileInfo from "./components/user-info";
import UserProfileName from "./components/user-info/components/name";
import UserProfileUserSettings from "./components/user-info/components/user-settings";
import UserProfileStatus from "./components/user-info/components/user-status";

export default function UserProfileHeader(): JSX.Element {

    return (
        <>
            <header className="user-profile-header
                                d-flex
                                flex-row
                                align-items-stretch
                                flex-shrink-0
                                mx-md-0
                                mt-md-0
                                mx-3
                                mt-3
                                mb-4
                                mb-mb-5"
            >
                <div className="d-flex
                                flex-md-grow-1
                                flex-md-basis-0
                                justify-content-center
                                flex-column
                                flex-shrink-0
                                position-relative
                                me-md-4">
                    <UserProfileProfileImage />
                </div>
                <div className="d-flex
                                flex-column
                                flex-grow-2
                                flex-shrink-1
                                align-items-stretch
                                pl-0
                                mw-0">
                    <div>
                        <UserProfileUserSettings />
                    </div>
                    <div className="d-none
                                    d-md-block">
                        <UserProfileStatus />
                    </div>
                    <div className="d-none
                                    d-md-block">
                        <UserProfileName /> 
                    </div>
                </div>               
            </header>
            <div className="d-md-none                                    
                            px-md-0
                            py-md-0
                            px-3
                            pt-0
                            pb-3">
                <UserProfileName />
            </div>
            <div className="d-md-none">
                <UserProfileStatus />
            </div>
        </>
    )
}
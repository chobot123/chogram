import UserEditProfile from "./components/edit-profile";
import UserProfileSettings from "./components/settings";
import UserProfileUsername from "./components/username";

export default function UserProfileUserSettings(): JSX.Element {


    return (
        <>
            <div className="d-flex
                                position-relative
                                flex-row
                                flex-shrink-1
                                align-items-center
                                header-b-gap
                                mw-0">
                <UserProfileUsername />
                <UserEditProfile />
                <UserProfileSettings />        
            </div>
        </>
    )
}
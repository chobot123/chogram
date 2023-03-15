import { AiOutlineSetting } from "react-icons/ai";
import UserProfileUsername from "./components/user-settings/components/username";
import UserEditProfile from "./components/user-settings/components/edit-profile";
import UserProfileSettings from "./components/user-settings/components/settings";
import UserProfileStatus from "./components/user-status";
import UserProfileName from "./components/name";
import UserProfileUserSettings from "./components/user-settings";

export default function UserProfileInfo(): JSX.Element {

    return (
        <>
            <section className="d-flex
                                flex-column
                                flex-grow-2
                                flex-shrink-1
                                align-items-stretch
                                pl-0
                                mw-0">
                <UserProfileUserSettings />
                <UserProfileStatus />
                <UserProfileName />                  
            </section>
        </>
    )
}
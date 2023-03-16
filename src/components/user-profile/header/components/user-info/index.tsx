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
            <UserProfileUserSettings />
            <UserProfileStatus />
            <UserProfileName />
        </>
    )
}
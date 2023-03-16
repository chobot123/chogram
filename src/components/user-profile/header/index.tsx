import UserProfileProfileImage from "./components/profile-img";
import UserProfileInfo from "./components/user-info";

export default function UserProfileHeader(): JSX.Element {

    return (
        <>
            <header className="user-profile-header
                                d-flex
                                flex-row
                                align-items-stretch
                                flex-shrink-0"
                style={
                    {
                        marginBottom: "44px"
                    }
                }
            >
                <UserProfileProfileImage />
                <UserProfileInfo />                
             </header>
        </>
    )
}
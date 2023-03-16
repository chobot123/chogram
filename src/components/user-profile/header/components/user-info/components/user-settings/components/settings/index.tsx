import { AiOutlineSetting } from "react-icons/ai";

export default function UserProfileSettings(): JSX.Element {

    return (
        <>
            <div className="user-profile-settings
                            ms-1
                            flex-shrink-0">
                <button className="icon-btn">
                    <div className="icon-wrapper
                                    settings-icon">
                        <AiOutlineSetting />
                    </div>
                </button>
            </div>
        </>
    )
}
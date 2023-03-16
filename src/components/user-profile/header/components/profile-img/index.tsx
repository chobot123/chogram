import Image from "next/image";

export default function UserProfileProfileImage(): JSX.Element {

    return (
        <>
            <div className="mx-md-auto
                            me-4
                            profile-logo
                            d-flex
                                flex-grow-md-1
                                flex-basis-md-0
                                justify-content-center
                                flex-column
                                flex-shrink-0
                                position-relative">
                <div className="profile-img
                                w-100
                                h-100">
                    <button className="button-fill
                                       w-100
                                       h-100">
                        <Image src="/test.png" 
                            fill={true}
                            alt="change profile picture" />
                    </button>
                </div>
            </div>
        </>
    )
}
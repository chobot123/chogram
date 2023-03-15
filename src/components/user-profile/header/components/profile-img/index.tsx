import Image from "next/image";

export default function UserProfileProfileImage(): JSX.Element {

    return (
        <>
            <div className="d-flex
                            flex-grow-1
                            flex-basis-0
                            justify-content-center
                            flex-column
                            flex-shrink-0
                            position-relative">
                <div className="mx-auto">
                    <div className="profile-img">
                        <button className="button-fill">
                            <Image src="/test.png" 
                                width={150}
                                height={150}
                                alt="change profile picture" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
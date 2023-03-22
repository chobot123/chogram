import Image from "next/image";

export default function Suggestion(): JSX.Element {

    return (
        <>
            <div className="suggestion
                            d-flex">
                <div className="profile-picture">
                    <div style={{padding: '4px'}}>
                        <div className="profile-picture-wrapper
                                        position-relative"
                            style={
                                {
                                    width: '42px',
                                    height: '42px',
                                }
                            }
                        >
                            <Image 
                                src="/next.svg"
                                alt="profile picture of user"
                                fill
                            />
                        </div>
                    </div>
                </div>
                <div className="username
                                flex-grow-1
                                d-flex
                                justify-content-start
                                align-items-center"
                    style={
                        {
                            marginLeft: '4px'
                        }
                    }
                >
                    <div className="username-wrapper
                                    d-flex
                                    flex-column">
                        <div className="username
                                        d-inline-flex">
                            <span style={{fontSize: '14px', fontWeight: 'bold'}}>NextJs</span>
                        </div>
                        <div className="comment
                                        d-inline-flex">
                            <span style={{fontSize: '12px', color: 'lightgray', fontWeight: 'bold'}}>Suggested for you</span>
                        </div>
                    </div>
                </div>
                <div className="follow-btn
                                d-flex
                                flex-column">
                    <button className="follow
                                        d-flex
                                        align-items-center
                                        p-0
                                        flex-grow-1"
                        style=  {
                                    {
                                        color: 'DeepSkyBlue',
                                        fontWeight: 'bold',
                                        background: 'transparent',
                                        fontSize: '12px',
                                    }
                                }
                    >
                        <span>
                            Follow
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}
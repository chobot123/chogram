import Image from "next/image";

export default function SuggestionsUser(): JSX.Element {

    return (
        <>
            <div className="user"
                style={
                    {
                        margin: '10px 0px'
                    }
                }
            >
                <div className="user-wrapper
                                d-flex">
                    <div className="profile-picture"
                        style={
                            {

                            }
                        }
                    >
                        <div className="profile-picture-wrapper
                                        position-relative"
                            style={
                                {
                                    width: '56px',
                                    height: '56px'
                                }
                            }
                        >
                            <Image 
                                src="/test.png"
                                alt="User Profile Picture"
                                fill

                            />
                        </div>
                    </div>
                    <div className="username-name
                                    d-flex
                                    flex-grow-1
                                    flex-column
                                    justify-content-center
                                    align-items-start"
                        style={
                            {
                                fontSize: '14px',
                                marginLeft: '12px'
                            }
                        }
                    >
                        <div className="username d-inline-flex"
                            style={
                                {
                                    fontWeight: 'bolder'
                                }
                            }
                        >
                            <span className="">chojoshua99</span>
                        </div>
                        <div className="name d-inline-flex"
                            style={
                                {
                                    color: 'gray'
                                }
                            }
                        >
                            <span className="">Joshua Cho</span>
                        </div>
                    </div>
                    <div className="switch-acc
                                    d-flex
                                    flex-column">
                        <button className="switch-acc-btn
                                           d-flex
                                           align-items-center
                                           p-0
                                           flex-grow-1"
                                style={
                                    {
                                        color: 'DeepSkyBlue',
                                        fontWeight: 'bold',
                                        background: 'transparent',
                                        fontSize: '12px',
                                    }
                                }
                        >
                            <span>Switch</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
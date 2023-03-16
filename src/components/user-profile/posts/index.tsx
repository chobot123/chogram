import Image from "next/image";

export default function UserProfileCPostsGrid(): JSX.Element {

    return (
        <>
            <article className="flex-grow-1">
                <div>
                    <div className="position-relative
                                    d-flex
                                    flex-column
                                    pb-0
                                    pt-0">
                        <div className="row m-0">
                            <div className="col
                                            d-block
                                            position-relative
                                            user-posts-gap
                                            p-0"
                            >
                                <a>
                                    <div className="d-block
                                                    position-relative">
                                        <div className="d-block
                                                        overflow-hidden
                                                        pb-full
                                                        position-relative">
                                            <Image src="/test.png" 
                                                   fill={true}
                                                   alt="Image Test"
                                                   style={{objectFit: "cover"}}
                                            />
                                        </div>                    
                                    </div>
                                </a>
                            </div>
                            <div className="col
                                            d-block
                                            position-relative
                                            user-posts-gap
                                            p-0"
                            >
                            </div>
                            <div className="col 
                                            p-0">
                            </div>
                        </div>                    
                    </div>
                </div>
            </article>
        </>
    )
}
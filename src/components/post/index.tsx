import Image from "next/image";
import { FormEvent, useCallback, useRef } from "react";
import { AiOutlineArrowRight, AiOutlineComment, AiOutlineEllipsis, AiOutlineFlag, AiOutlineHeart, AiOutlineSend, AiOutlineSmile } from "react-icons/ai";

export default function SinglePost(): JSX.Element {

    const growerWrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <div className="SinglePost">
                <div className="SinglePost-wrapper
                                d-flex
                                flex-column
                                mx-auto
                                align-items-center
                                position-relative
                                w-100">
                    <div className="singlepost-border-wrapper
                                    d-flex
                                    w-100
                                    flex-row">
                        <div className="post-image
                                        d-flex
                                        align-items-center
                                        flex-grow-1"
                            style={
                                {
                                    minHeight: '450px',
                                    borderLeft: '1px solid lightgray',
                                    borderTop: '1px solid lightgray',
                                    borderBottom: '1px solid lightgray'
                                }
                            }
                        >
                            <div className="d-block 
                                            w-100"
                            >
                                <div className="d-flex
                                                m-0
                                                p-0
                                                align-items-stretch
                                                position-relative
                                                flex-column">
                                    <div>
                                        <div className="flex-grow-1">
                                            <div className="card-content">
                                                <div className="card-content
                                                                d-block
                                                                position-relative">
                                                    <div className="img-singlepost-wrapper" 
                                                        style={
                                                            {
                                                                paddingBottom: '100%',
                                                            }
                                                        }
                                                    />
                                                    <Image 
                                                        src="/dad.png"
                                                        alt="post image"
                                                        fill
                                                        style={
                                                            {
                                                                objectFit: 'contain'
                                                            }
                                                        }
                                                    />                 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-etc
                                        d-flex
                                        flex-column
                                        position-relative"
                            style={
                                {
                                    width: '335px',
                                    border: '1px solid lightgray'
                                }
                            }
                        >
                            <div className="user 
                                            d-flex"
                                style={
                                    {
                                        padding: '14px 4px 14px 16px',
                                        borderBottom: '1px solid lightgray'
                                    }
                                }
                            >
                                <header className="user-info 
                                                   d-flex
                                                   flex-grow-1">
                                    <div className="profile-picture
                                                    d-flex
                                                    align-items-center
                                                    justify-content-center">
                                        <div className="profile-picture-wrapper
                                                        position-relative"
                                            style={{padding: 4}}
                                        >
                                            <Image 
                                                src="/test.png"
                                                alt="user profile picture"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                    <div className="user
                                                    d-flex
                                                    flex-column
                                                    align-items-start
                                                    justify-content-center">
                                        <div className="d-flex
                                                        flex-row
                                                        align-items-center
                                                        justify-content-start"
                                            style={{fontSize: 14, fontWeight: '500'}}
                                        >
                                            <div className="username">
                                                <span>chojoshua99</span>
                                            </div>
                                            <div className="dot-divider px-1">
                                                <span>
                                                    &#8226;
                                                </span>
                                            </div>
                                            <div className="status">
                                                <span>Following</span>
                                            </div>
                                        </div>
                                        <div className="location"
                                            style={{fontSize: 12, color: 'dimgray'}}
                                        >
                                            <span>Home Sweet Home</span>
                                        </div>
                                    </div>
                                </header>
                                <div className="settings-btn
                                                d-flex
                                                justify-content-center
                                                align-items-center">
                                    <div className="img-container
                                                    d-inline-flex"
                                        style={{padding: 8}}                
                                    >
                                        <AiOutlineEllipsis style={{fontSize: '24px'}}/>
                                    </div>
                                </div>
                            </div>                                
                            <div className="post-description-comments
                                            position-relative
                                            overflow-x-auto
                                            h-100
                                            overflow-y-auto"
                                style={{borderBottom: '1px solid lightgray'}}
                            >
                                <div className="post-description-comments-wrapper
                                                w-100
                                                h-100
                                                position-absolute"
                                    style={{padding: '0px 16px 16px 16px'}}
                                >
                                    <div className="h-100">

                                    </div>
                                </div>
                            </div>
                            <div className="post-statuses-likes"
                                style={{padding: '6px 16px'}}
                            >
                                <div className="status-btns"></div>
                                <section className="likes-preview">
                                    <div className="likes-preview-wrapper">
                                        <div className="preview-profile-pictures
                                                        d-flex
                                                        align-items-center">
                                            <div className="like-btn"
                                                style={{marginLeft: '-8px'}}
                                            >
                                                <div className="like-btn-wrapper"
                                                    style={{padding: 8}}
                                                >
                                                    <AiOutlineHeart style={{width: 24, height: 24}} />
                                                </div>
                                            </div>
                                            <div className="comment-btn">
                                                <div className="comment-btn-wrapper"
                                                    style={{padding: 8}}
                                                >
                                                    <AiOutlineComment style={{width: 24, height: 24}} />
                                                </div>
                                            </div>
                                            <div className="share-btn">
                                                <div className="share-btn-wrapper"
                                                    style={{padding: 8}}
                                                >
                                                    <AiOutlineSend style={{width: 24, height: 24}} />
                                                </div>
                                            </div>
                                            <div className="save-btn
                                                            d-flex
                                                            flex-grow-1
                                                            flex-row
                                                            justify-content-end">
                                                <div className="save-btn-wrapper"
                                                    style={{padding: 8}}
                                                >
                                                    <AiOutlineFlag style={{width: 24, height: 24}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preview-users"
                                            style={{fontSize: 14}}
                                        >
                                            <span>
                                                Liked By 
                                                    <a style={{fontWeight: 'bold'}}> redrobsterr </a> 
                                                and
                                                    <a style={{fontWeight: 'bold'}}> others </a>
                                            </span>
                                        </div>
                                    </div>
                                </section>
                                <div className="date-posted"
                                    style={{fontSize: 10, color: 'gray', fontWeight: '500'}}
                                >
                                    <div className="date-posted-wrapper">
                                        <span>2 Days Ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="add-comment"
                                style={{padding: '6px 16px 6px 0px', fontSize: 14}}
                            >
                                <div>
                                    <form>
                                        <div className="d-flex
                                                        align-items-center"
                                        >
                                            <div className="emoji"
                                                style={{padding: 8}}
                                            >
                                                <AiOutlineSmile style={{width: 24, height: 24}}/>
                                            </div>
                                            <div className="grow-wrap
                                                            d-grid
                                                            w-100
                                                            overflow-y-scroll"
                                                style={{
                                                    maxHeight: 80
                                                }}
                                                ref={growerWrapperRef}
                                            >
                                                <textarea id="current-user-comment"
                                                        className="flex-grow-1" 
                                                        rows={1}
                                                        name="current-user-comment"
                                                        placeholder="Add a comment..."
                                                        onInput={(e : FormEvent<HTMLTextAreaElement>) => {
                                                            if(!growerWrapperRef || !growerWrapperRef.current) return;

                                                            growerWrapperRef.current.dataset.replicatedValue = e.currentTarget.value
                                                        }}
                                                        style={
                                                            {
                                                                maxHeight: 80,
                                                                resize: 'none',
                                                                height: 'auto'
                                                            }
                                                        }
                                                >
                                                </textarea>
                                            </div>
                                            <div className="send-comment
                                                            d-flex
                                                            justify-content-center
                                                            align-items-center">
                                                <span>Post</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
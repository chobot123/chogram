import Image from "next/image";
import styles from "../styles/feed-card.module.css";
import { AiOutlineComment, AiOutlineEllipsis, AiOutlineFlag, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";

export default function FeedCard(): JSX.Element {

    return (
        <>
            <article className="Feed-Card"
                style={
                    {
                        marginBottom: '12px',
                        paddingBottom: '20px',
                        maxHeight: 'inherit',
                        maxWidth: '470px',
                        borderBottom: '1px solid lightgray'
                    }
                }
            >
                <div className="card-list-wrapper
                                d-flex
                                flex-column
                                align-items-stretch
                                position-relative"
                >
                    <div className="header">
                        <div className="header-wrapper
                                        d-flex">
                            <header className="user
                                               d-flex"
                                    style={
                                        {
                                            margin: '8px 4px'
                                        }
                                    }>
                                <div className="profile-picture
                                                d-inline-flex
                                                justify-content-center
                                                align-items-center
                                                align-self-center"
                                    style={
                                        {
                                            padding: '8px'
                                        }
                                    }
                                >
                                    <Image src="/test.png" alt="profile picture" 
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="user-post-info
                                                d-flex
                                                justify-content-center
                                                align-items-start
                                                flex-column">
                                    <div className="username-date
                                                    d-flex"
                                        style={
                                            {
                                                fontSize: '14px'
                                            }
                                        }
                                    >
                                        <div className="username">chojoshua99</div>
                                        <span className="divider-dot"
                                            style={
                                                {
                                                    paddingLeft: '4px',
                                                    paddingRight: '4px'
                                                }
                                            }
                                        >
                                            &#8226;
                                        </span>
                                        <div className="date-posted">
                                            16h
                                        </div>
                                    </div>
                                    <div className="location"
                                        style={
                                            {
                                                fontSize: '12px'
                                            }
                                        }
                                    >
                                        Home Sweet Home
                                    </div>
                                </div>
                            </header>
                            <div className="settings
                                            d-inline-flex
                                            align-self-center
                                            flex-grow-1
                                            justify-content-end
                                            align-items-center"
                                style={
                                    {
                                        marginRight: '-8px'
                                    }
                                }
                            >
                                <div className="img-container
                                                d-inline-flex
                                                align-items-center
                                                justify-content-center"
                                    style={
                                        {
                                            padding: '8px'
                                        }
                                    }
                                >
                                    <AiOutlineEllipsis 
                                        style={
                                            {
                                                fontSize: '24px'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="d-block
                                        position-relative">
                            <div className="card-content">
                                <div className="img-padding" 
                                    style={
                                        {
                                            paddingBottom: '100%'
                                        }
                                    }/>
                                <div className="image-container">
                                    <div className="img-wrapper">
                                        <div className="slide-wrapper" role="presentation">
                                            <div className="slide-pos-container">
                                                <ul className="card-ul">
                                                    <li 
                                                        style={
                                                            {
                                                                width: '1px',
                                                            }
                                                        }
                                                    />
                                                    <li className="card-li">
                                                        <div className="card-wrapper">
                                                            <div className="card-btn" role="button">
                                                                <div>
                                                                    <div className="img-container
                                                                                    position-relative
                                                                                    overflow-hidden
                                                                                    display-block"
                                                                        style={
                                                                            {
                                                                                paddingBottom: '100%'
                                                                            }
                                                                        }>
                                                                            <Image src="/dad.png"
                                                                                alt="post-picture"
                                                                                fill
                                                                                style={
                                                                                    {
                                                                                        height: '100%',
                                                                                        position: 'absolute',
                                                                                        top: 0,
                                                                                        userSelect: 'none',
                                                                                        left: 0
                                                                                    }
                                                                                } 
                                                                            />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-wrapper">
                            <section className="post-actions
                                                d-flex
                                                flex-row
                                                align-items-center"
                                style={
                                    {
                                        fontSize: '24px'
                                    }
                                }
                            >
                                <div className="like-btn
                                                d-flex">
                                    <div className="d-inline-flex
                                                    justify-content-center
                                                    align-items-center"
                                        style={
                                            {
                                                padding: '8px'
                                            }
                                        }
                                    >
                                        <AiOutlineHeart />
                                    </div>
                                    
                                </div>
                                <div className="comment-btn
                                                d-flex">
                                    <div className="d-inline-flex
                                                    justify-content-center
                                                    align-items-center"
                                        style={
                                            {
                                                padding: '8px'
                                            }
                                        }
                                    >
                                        <AiOutlineComment />
                                    </div>
                                </div>
                                <div className="share-btn 
                                                d-flex">
                                    <div className="d-inline-flex
                                                    justify-content-center
                                                    align-items-center"
                                        style={
                                            {
                                                padding: '8px'
                                            }
                                        }
                                    >
                                        <AiOutlineSend/>
                                    </div>
                                </div>
                                <div className="save-btn
                                                d-flex
                                                justify-content-end
                                                align-items-center
                                                flex-grow-1">
                                    <div className="d-inline-flex
                                                    justify-content-center
                                                    align-items-center"
                                        style={
                                            {
                                                padding: '8px'
                                            }
                                        }
                                    >
                                        <AiOutlineFlag />
                                    </div>
                                    
                                </div>
                            </section>
                            <section className="likes"></section>
                            <section className="post-description">
                                <span className="username">chojoshua99</span>
                                <span className="gap">&nbsp;</span>
                                <span className="description">2023.03.20</span>
                            </section>
                            <section className="expand-post">
                                <span>View all 2 comments</span>
                            </section>
                            <section className="add-comment">
                                {
                                    //form
                                }
                                Add a comment... (placeholder)
                            </section>
                        </div>
                    </div>
                </div>  
            </article>
        </>
    )
}
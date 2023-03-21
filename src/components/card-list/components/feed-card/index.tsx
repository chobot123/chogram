import Image from "next/image";
import styles from "../styles/feed-card.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";

export default function FeedCard(): JSX.Element {

    return (
        <>
            <article className="Feed-Card"
                style={
                    {
                        marginBottom: '12px',
                        paddingBottom: '20px !important',
                        maxHeight: 'inherit',
                        padding: 0
                    }
                }
            >
                <div className="card-list-wrapper
                                d-flex
                                flex-column
                                align-items-stretch
                                position-relative">
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
                                <div className="profile-picture">
                                    <Image src="/test.png" alt="profile picture" 
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="user-post-info
                                                d-flex
                                                flex-column">
                                    <div className="username-date
                                                    d-flex">
                                        <div className="username">chojoshua99</div>
                                        <span className="divider-dot">
                                            &#8226;
                                        </span>
                                        <div className="date-posted">16h</div>
                                    </div>
                                    <div className="location">Home Sweet Home</div>
                                </div>
                            </header>
                            <div className="settings
                                            d-flex
                                            justify-content-center
                                            align-items-center">
                                <AiOutlineEllipsis />
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
                    <div className="footer"></div>
                </div>  
            </article>
        </>
    )
}
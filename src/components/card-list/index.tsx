import FeedCard from "./components/feed-card";
import FeedSuggestions from "./components/suggestions";

export default function CardList(): JSX.Element {

    return (
        <>
            <section className="d-flex
                                flex-row
                                flex-nowrap
                                CardList
                                home-mw-1120"
            >
                <div className="flex-shrink-0
                                w-100"
                        style={
                            {
                                maxWidth: '630px',
                                marginTop: '12px',
                                marginRight: 'auto'
                            }
                        }
                    >
                        <div className="d-flex
                                        flex-column
                                        align-items-center
                                        postion-static
                                        justify-content-start
                                        align-self-auto
                                        display-flex">
                            <div className="w-100"
                                style={
                                    {
                                        maxWidth: '470px'
                                    }
                                }
                            >
                                <FeedCard />
                                <FeedCard />
                                <FeedCard />
                            </div>
                        </div>
                </div>
                <div className="position-sticky
                                flex-shrink-0
                                right-0
                                w-100
                                hide-mw-1120
                                top-0"
                    style={
                        {
                            paddingTop: '30px',
                            height: '100vh',
                            marginBottom: '30px',
                            maxWidth: '319px'
                        }
                    }
                >
                    <FeedSuggestions /> 
                </div>
            </section>
        </>
    )
}
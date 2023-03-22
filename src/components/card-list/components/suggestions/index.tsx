import Image from "next/image";
import Suggestion from "./components/suggestion";
import SuggestionsUser from "./components/user";

export default function FeedSuggestions(): JSX.Element {

    return (
        <>
            <>
                <SuggestionsUser />
            </>
            <>
                <div className="suggestions
                                d-flex
                                flex-column">
                    <div className="suggestions-wrapper
                                    d-flex
                                    justify-content-between
                                    align-items-center">
                        <div className="title">
                            <span style={{fontSize: '14px', color: 'grey', fontWeight: 'bold'}}>Suggestions for you</span>
                        </div>
                        <div className="see-all-btn">
                            <span style={{fontSize: '12px', color: 'dimgray', fontWeight: 'bold'}}>See All</span>
                        </div>
                    </div>
                    <div className="suggestions-list"
                        style={
                            {
                                margin: '5px 0px'
                            }
                        }
                    >
                        <div className="suggestions-list-wrapper">
                            <Suggestion />
                            <Suggestion />
                            <Suggestion />
                            <Suggestion />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}
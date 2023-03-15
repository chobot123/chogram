import UserProfileFollowers from "./components/followers";
import UserProfileFollowing from "./components/following";
import UserProfilePostsStatus from "./components/posts";

export default function UserProfileStatus(): JSX.Element {

    return (
        <>
            <ul className="d-flex
                           header-b-gap">
                <li className="posts
                               mr-40">
                    <UserProfilePostsStatus />
                </li>
                <li className="followers
                               mr-40">
                    <UserProfileFollowers />
                </li>
                <li className="following
                               mr-40">
                    <UserProfileFollowing />
                </li>
            </ul>
        </>
    )
}
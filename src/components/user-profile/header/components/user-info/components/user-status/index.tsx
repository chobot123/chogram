import UserProfileFollowers from "./components/followers";
import UserProfileFollowing from "./components/following";
import UserProfilePostsStatus from "./components/posts";

export default function UserProfileStatus(): JSX.Element {

    return (
        <>
            <ul className="d-flex
                           justify-content-evenly
                           justify-content-md-start
                           mb-0
                           py-2
                           border-mb-top-muted
                           py-md-0
                           mb-md-4">
                <li className="posts
                               d-flex
                               justify-content-center
                               align-items-center
                               d-md-block
                               w-mb-33
                               mr-md-40">
                    <UserProfilePostsStatus />
                </li>
                <li className="followers
                               d-flex
                               justify-content-center
                               align-items-center
                               d-md-block
                               w-mb-33
                               mr-md-40">
                    <UserProfileFollowers />
                </li>
                <li className="following
                               d-flex
                               justify-content-center
                               align-items-center
                               d-md-block
                               w-mb-33
                               mr-md-40">
                    <UserProfileFollowing />
                </li>
            </ul>
        </>
    )
}
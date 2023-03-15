import UserProfileHeader from "@/components/user-profile/header";
import UserProfileNavigation from "@/components/user-profile/navigation";
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function UserProfile(): JSX.Element {

    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return; 
    }, [router.isReady])

    return (
        <>
            <main className="d-flex flex-column flex-grow-1">
                <div className="container">
                    <UserProfileHeader />
                    <UserProfileNavigation />
                    <div></div>
                </div>
            </main>
        </>
    )
}